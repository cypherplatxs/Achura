import { users } from '@/services';
import { useState } from 'react';

export function useSignUp() {
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<any>(null)

    const handleSignUp = async (data: any) => {
        try {
            const res = await users.register(data)
            setData(res)

        } catch (error) {
            setError(JSON.stringify(error))
        }
    }


    return {
        data,
        error,
        handleSignUp
    }
}