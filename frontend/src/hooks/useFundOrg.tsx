import { blockchain } from '@/services'
import React, { useState } from 'react'

function useFundOrg () {
  const [error, setError] = useState<String | null>(null)
  const [data, setData] = useState<any>(null)

  const fundOrg = async (
    accountId: string,
    amount: number,
    recipent: string
  ) => {
    try {
      const res = await blockchain.fundOrg(
        accountId,
        amount,
        recipent
      )
      setData(res.data)
    } catch (error) {
      setError(JSON.stringify(error))
    }
  }

  return {
    fundOrg,
    data,
    error
  }
}

export { useFundOrg }
