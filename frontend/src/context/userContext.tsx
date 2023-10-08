/* eslint-disable react-hooks/exhaustive-deps */
import { useGetUser } from '@/hooks'
import { createContext, useEffect, useState } from 'react'
import { useWalletSelector } from './wallectSelectorContext'
import { redirect, usePathname } from 'next/navigation'

export const UserContext = createContext<any | null>(null)

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const { accountId } = useWalletSelector()
  const { getUser, data: userData, error } = useGetUser()
  const path = usePathname()
  useEffect(() => {
    if (accountId) {
      const fetchData = async () => {
        await getUser(accountId as string)
      }
      fetchData()
    }
  }, [accountId])

  useEffect(() => {
    if (path === '/dashboard' && !userData) {
      redirect('/auth')
    }
    if (path === '/auth' && userData) {
      redirect('/dashboard')
    }
  }, [path])

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>
}

export default UserContextProvider
