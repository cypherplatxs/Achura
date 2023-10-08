import { users } from '@/services';
import { User } from '@/types';
import { useState } from 'react';

export function useGetUser() {
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<User | null>(null)

    const getUser = async (accountId: string) => {
        try {
            const res = await users.getUser(accountId)
            console.debug({accountId, res})
            setData(res)
            return res
        } catch (error) {
            setError(JSON.stringify(error))
        }
    }

    return {
        data,
        error,
        getUser
    }
}