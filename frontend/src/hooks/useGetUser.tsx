import { users } from '@/services';
import { User } from '@/types';
import { useState } from 'react';

export function useGetUser() {
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const getUser = async (accountId: string) => {
        try {
            setIsLoading(true)
            const res = await users.getUser(accountId)
            setData(res)
            return res
        } catch (error) {
            setError(JSON.stringify(error))
        }finally{
            setIsLoading(false)
        }
    }

    return {
        data,
        error,
        isLoading,
        getUser
    }
}