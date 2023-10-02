import { blockchain } from '@/services';
import { useState } from 'react';

export function useBalance() {
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<string | null>(null)

    const getBalance = async (accountId: string) => {
        try {
            console.log({ accountId });

            const res = await blockchain.getBalance(accountId)
            setData(res.balance)
            return res.balance
        } catch (error) {
            setError(JSON.stringify(error))
        }
    }

    return {
        data,
        error,
        getBalance
    }
}