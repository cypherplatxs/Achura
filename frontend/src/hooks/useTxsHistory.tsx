import { useState } from 'react'
import { Txn } from '@/types'
import { blockchain } from '@/services'

const useTxsHistory = () => {
  const [error, setError] = useState<String | null>(null)
  const [data, setData] = useState<Txn[] | null>(null)

  const getTxn = async (accountId: string) => {
    try {
      const res = await blockchain.getTxsHistory(accountId)
      setData(res.data)
    } catch (error) {
      setError(JSON.stringify(error))
    }
  }

  return {
    data,
    error,
    getTxn
  }
}

export { useTxsHistory }
