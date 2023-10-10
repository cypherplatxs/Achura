'use client'
import BalancePanel from '@/components/dashboard/BalancePanel'
import FundPanel from '@/components/dashboard/FundPanel'
import OrgListPanel from '@/components/dashboard/OrgListPanel'
import TxnPanel from '@/components/dashboard/TxnPanel'
import WithdrawPanel from '@/components/dashboard/WithdrawPanel'
import WalletContext from '@/context/walletContext'
import { Divider, Skeleton, User } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import BalancePanelSkeleton from '@/components/dashboard/skeleton/BalancePanelSkeleton'
import OrgListPanelSkeleton from '@/components/dashboard/skeleton/OrgListPanelSkeleton'
import WithdrawPanelSkeleton from '@/components/dashboard/skeleton/WithdrawPanelSkeleton'
import TxnPanelSkeleton from '@/components/dashboard/skeleton/TxnPanelSkeleton'
import { useWallet, useBalance, useGetUser, useTxsHistory } from '@/hooks'

import { useWalletSelector } from '@/context/wallectSelectorContext'
import { Organization, Txn } from '@/types/index'
import { User as UserType } from '@/types'

enum fetchState {
  loading = 'LOADING',
  error = 'ERROR',
  success = 'SUCCESS'
}

function Page () {
  const { accountId } = useWallet()

  const address = useContext(WalletContext)
  const [state, setState] = useState<fetchState>(fetchState.loading)

  const [balance, setBalance] = useState<string | null>(null)
  const { getBalance } = useBalance()
  const { getUser } = useGetUser()

  // const [txHistory, useTxsHistory] = useState<Txn[] | null>(null)
  const [orgs, setOrgs] = useState<Organization[] | null>(null)
  const [user, setUser] = useState<UserType | null>(null)

  const { data: txHistory, getTxn } = useTxsHistory()

  useEffect(() => {
    if (accountId) {
      getBalance(accountId).then(raw_balance => {
        const pasrsed_balance = parseFloat(raw_balance) / 10 ** 24
        setBalance(pasrsed_balance.toFixed(2))
      })

      getUser(accountId).then(user => {
        setUser(user)
      })
      getTxn(accountId)
    }

    axios.get('/api/get-orgs').then(res => {
      setOrgs(res.data.orgs)
    })
  }, [])


  const getUserButton = () => {
    return user && user.type === 'sponsor' ? <FundPanel /> : <WithdrawPanel />
  }
  // fix user servic

  useEffect(() => {
    console.debug('address')
  }, [address])
  return (
    <main className='min-h-screen'>
      <div className='w-full h-full flex flex-col lg:dashboard__lg gap-10 px-5 py-10 '>
        {user ? (
          <>
            <User
              className='user flex justify-start'
              name={user.legalEntityName}
              description={user.type}
              avatarProps={{
                src: 'https://i.pravatar.cc'
              }}
            />
            {getUserButton()}
          </>
        ) : (
          <div className='max-w-[300px] w-full flex items-center gap-3'>
            <div>
              <Skeleton className='flex rounded-full w-12 h-12' />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <Skeleton className='h-3 w-3/5 rounded-lg' />
              <Skeleton className='h-3 w-4/5 rounded-lg' />
            </div>
            <WithdrawPanelSkeleton />
          </div>
        )}
        {balance ? (
          <BalancePanel balance={balance} />
        ) : (
          <BalancePanelSkeleton />
        )}
        {/* TODO: create a component that shows when txHistory is empty */}
        {txHistory ? <TxnPanel txns={txHistory} /> : <TxnPanelSkeleton />}
        {orgs ? <OrgListPanel orgs={orgs} /> : <OrgListPanelSkeleton />}
      </div>
      {state === fetchState.loading && (
        <div className='w-full h-full flex flex-col lg:dashboard__lg gap-10 px-5 py-10 '></div>
      )}
      {state === fetchState.error && <p>Something went wrong</p>}
      {state === fetchState.success && (
        <div className='w-full h-full flex flex-col lg:dashboard__lg gap-10 px-5 py-10 '></div>
      )}
    </main>
  )
}

export default Page
