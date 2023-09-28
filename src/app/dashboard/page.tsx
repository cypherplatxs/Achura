'use client';
import BalancePanel from '@/components/dashboard/BalancePanel';
import WalletContext from '@/context/walletContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

enum fetchState {
  loading = 'LOADING',
  error = 'ERROR',
  success = 'SUCCESS',
}

function Page() {
  const address = useContext(WalletContext);
  const [data, setData] = useState<any | null>(null);
  const [state, setState] = useState<fetchState>(fetchState.loading);

  useEffect(() => {
    async function getAllData() {
      try {
        const balanceResponse = await axios.get('/api/get-balance', {
          headers: {
            Address: address,
          },
        });
        const { balance } = balanceResponse.data;
        setData({
          balance,
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
      {state === fetchState.success && <BalancePanel balance={data.balance} />}
    </main>
  );
}

export default Page;
