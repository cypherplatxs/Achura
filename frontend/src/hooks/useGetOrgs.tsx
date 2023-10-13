import { users } from '@/services';
import { User } from '@/types';
import { useState } from 'react';

export function useGetOrgs() {
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const getOrgs = async () => {
        try {
            setIsLoading(true)
            const res = await users.getOrgs()
            setData(res)
            return res
        } catch (error) {
            setError(JSON.stringify(error))
        } finally {
            setIsLoading(false)
        }
    }

    return {
        data,
        error,
        isLoading,
        getOrgs
    }
}