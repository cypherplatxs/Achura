import { users } from '@/services';
import { User } from '@/types';
import { useState } from 'react';

export function useSignUp() {
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<User | null>(null)

    const handleSignUp = async (data: User) => {
        try {
            const res = await users.register(data)
            setData(res)
            return res
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