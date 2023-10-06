import { useState, useEffect } from 'react';
import { getTxsHistory } from '../services/blockchain';
import { Txn } from '@/types';
import { blockchain } from '@/services';

const useTxsHistory = () => {
  const [txsHistory, setTxsHistory] = useState([]);
  const[error, setError] = useState<String | null>(null)
  const [data, setData] = useState<Txn | null>(null)

  const getTxn = async (accountId: string) => {
    try {
        const res = await blockchain.getTxsHistory(accountId)
        setData(res)
        return res
    } catch (error) {
        setError(JSON.stringify(error))
    }
}

  return {

  };
};

export { useTxsHistory };