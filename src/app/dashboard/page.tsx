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
  txnHistory: Txn[]
}

function Page() {
  const address = useContext(WalletContext);
  const [data, setData] = useState<DashboardData | null>(null);
  const [state, setState] = useState<fetchState>(fetchState.loading);

  useEffect(() => {
    async function getAllData() {
      try {
        const balanceResponse = await axios.get('/api/get-balance', {
          headers: {
            Address: address,
          },
        });
        const txnHistoryResponse = await axios.get('/api/txn-history',{
          headers: {
            Address: address,
          },
        })
        const {txnHistory} = txnHistoryResponse.data;
        const { balance } = balanceResponse.data;
        console.debug(txnHistoryResponse)
        setData({
          balance,
          txnHistory,
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
      {state === fetchState.success && (
      <>
      <BalancePanel balance={data?.balance as number} />
      <TxnPanel txns={data?.txnHistory} />
      </>
      )}
    </main>
  );
}

export default Page;
