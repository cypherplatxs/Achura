'use client';
import BalancePanel from '@/components/dashboard/BalancePanel';
import TxnPanel from '@/components/dashboard/TxnPanel';
import WalletContext from '@/context/walletContext';
import { Txn } from '@/types/index.types';
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
        const { txnHistory } = txnHistoryResponse.data;
        const { balance } = balanceResponse.data;
        const { user } = userResponse.data;
        console.debug(txnHistoryResponse);
        setData({
          balance,
          txnHistory,
          userRole: user.role,
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
        </div>
      )}
    </main>
  );
}

export default Page;
