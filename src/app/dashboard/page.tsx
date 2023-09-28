'use client';
import BalancePanel from '@/components/dashboard/BalancePanel';
import FundPanel from '@/components/dashboard/FundPanel';
import OrgListPanel from '@/components/dashboard/OrgListPanel';
import TxnPanel from '@/components/dashboard/TxnPanel';
import WithdrawPanel from '@/components/dashboard/WithdrawPanel';
import WalletContext from '@/context/walletContext';
import { Organization, Txn } from '@/types/index.types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

enum fetchState {
  loading = 'LOADING',
  error = 'ERROR',
  success = 'SUCCESS',
}


type DashboardData = {
  balance: number;
  txnHistory: Txn[];
  userRole: 'Founder' | 'Organization';
  orgs:Organization[]
};

function Page() {
  const address = useContext(WalletContext);
  const [data, setData] = useState<DashboardData | null>(null);
  const [state, setState] = useState<fetchState>(fetchState.loading);

  useEffect(() => {
    async function getAllData() {
      //TODO: add parallel fetch
      try {
        const balanceResponse = await axios.get('/api/get-balance', {
          headers: {
            Address: address,
          },
        });
        const txnHistoryResponse = await axios.get('/api/txn-history', {
          headers: {
            Address: address,
          },
        });
        const userResponse = await axios.get('/api/user', {
          headers: {
            Address: address,
          },
        });
        const orgsResponse = await axios.get('/api/get-orgs')
        const {orgs } = orgsResponse.data
        const { txnHistory } = txnHistoryResponse.data;
        const { balance } = balanceResponse.data;
        const { user } = userResponse.data;
        console.debug(txnHistoryResponse);
        setData({
          balance,
          txnHistory,
          userRole: user.role,
          orgs
        });
        setState(fetchState.success);
      } catch (e) {
        setState(fetchState.error);
      }
    }
    getAllData();
  }, []);

  console.debug(address);
  useEffect(() => {
    console.debug('address');
  }, [address]);
  return (
    <main className='min-h-screen'>
      {address}
      {state === fetchState.success && <p>{data?.userRole}</p>}
      {state === fetchState.loading && <p>Loading...</p>}
      {state === fetchState.error && <p>Something went wrong</p>}
      {state === fetchState.success && (
        <div className='w-full flex flex-col gap-10 py-20'>
          <BalancePanel balance={data?.balance as number} />
          <TxnPanel txns={data?.txnHistory as Txn[]} />
          <WithdrawPanel/>
          <FundPanel/>
          <OrgListPanel orgs={data?.orgs as Organization[]} />
        </div>
      )}
    </main>
  );
}

export default Page;
