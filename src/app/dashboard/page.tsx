'use client'
import BalancePanel from '@/components/dashboard/BalancePanel'
import FundPanel from '@/components/dashboard/FundPanel'
import OrgListPanel from '@/components/dashboard/OrgListPanel'
import TxnPanel from '@/components/dashboard/TxnPanel'
import WithdrawPanel from '@/components/dashboard/WithdrawPanel'
import WalletContext from '@/context/walletContext'
import { Organization, Txn, UserType } from '@/types/index.types'
import { Divider, Skeleton, User } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import BalancePanelSkeleton from '@/components/dashboard/skeleton/BalancePanelSkeleton'
import OrgListPanelSkeleton from '@/components/dashboard/skeleton/OrgListPanelSkeleton'
import WithdrawPanelSkeleton from '@/components/dashboard/skeleton/WithdrawPanelSkeleton'
import TxnPanelSkeleton from '@/components/dashboard/skeleton/TxnPanelSkeleton'
import { useWalletSelector } from '@/context/wallectSelectorContext'

enum fetchState {
  loading = 'LOADING',
  error = 'ERROR',
  success = 'SUCCESS'
}

type DashboardData = {
  balance: number
  txnHistory: Txn[]
  user: UserType
  userRole: 'Founder' | 'Organization'
  orgs: Organization[]
}

function Page () {
  const address = useContext(WalletContext)
  const [data, setData] = useState<DashboardData | null>(null)
  const [state, setState] = useState<fetchState>(fetchState.loading)
  const { selector, modal, accounts, accountId } = useWalletSelector();

  useEffect(() => {
    async function getAllData () {
      //TODO: add parallel fetch
      try {
        const balanceResponse = await axios.get('/api/get-balance', {
          headers: {
            Address: address
          }
        })
        const txnHistoryResponse = await axios.get('/api/txn-history', {
          headers: {
            Address: address
          }
        })
        const userResponse = await axios.get('/api/user', {
          headers: {
            Address: address
          }
        })
        const orgsResponse = await axios.get('/api/get-orgs')
        const { orgs } = orgsResponse.data
        const { txnHistory } = txnHistoryResponse.data
        const { balance } = balanceResponse.data
        const { user } = userResponse.data
        console.debug(user)
        setData({
          balance,
          txnHistory,
          user,
          userRole: user.role,
          orgs
        })
        setState(fetchState.success)
      } catch (e) {
        setState(fetchState.error)
      }
    }
    getAllData()
  }, [])

  console.debug(address)
  useEffect(() => {
    console.debug('address')
  }, [address])
  return (
    <main className='min-h-screen'>
      <button onClick={()=>modal.show()}>AAA</button>
      {state === fetchState.loading && (
        <div className='w-full h-full flex flex-col lg:dashboard__lg gap-10 px-5 py-10 '>
          <div className='max-w-[300px] w-full flex items-center gap-3'>
            <div>
              <Skeleton className='flex rounded-full w-12 h-12' />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <Skeleton className='h-3 w-3/5 rounded-lg' />
              <Skeleton className='h-3 w-4/5 rounded-lg' />
            </div>
          </div>
          <BalancePanelSkeleton />
          <WithdrawPanelSkeleton />
          <TxnPanelSkeleton />
          <OrgListPanelSkeleton />
        </div>
      )}
      {state === fetchState.error && <p>Something went wrong</p>}
      {state === fetchState.success && (
        <div className='w-full h-full flex flex-col lg:dashboard__lg gap-10 px-5 py-10 '>
          <User
            className='user flex justify-start'
            name={data?.user.name as string}
            description={data?.user.role as string}
            avatarProps={{
              src: 'https://i.pravatar.cc'
            }}
          />
          <BalancePanel balance={data?.balance as number} />
          <TxnPanel txns={data?.txnHistory as Txn[]} />
          {data?.userRole === 'Founder' ? <FundPanel /> : <WithdrawPanel />}
          <OrgListPanel orgs={data?.orgs as Organization[]} />
        </div>
      )}
    </main>
  )
}

export default Page
