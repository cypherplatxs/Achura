/* eslint-disable react-hooks/exhaustive-deps */
import { useGetUser } from '@/hooks'
import { WalletContextType } from '@/types/index'
import { createContext, useContext, useEffect, useState } from 'react'
import { useWalletSelector } from './wallectSelectorContext'
import { redirect, usePathname } from 'next/navigation'

export const UserContext = createContext<any | null>(null)

function UserContextProvider ({ children }: { children: React.ReactNode }) {
  const { accountId } = useWalletSelector()
  const { getUser, data, error } = useGetUser()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const path = usePathname()
  useEffect(() => {
    const fetchData = async () => {
      await getUser(accountId as string)
      setIsLoaded(prev => !prev)
    }
    fetchData()
  }, [accountId])

  console.debug(data, error)

  useEffect(() => {
    if (path === '/dashboard' && !data && isLoaded) {
      redirect('/auth')
    }
  }, [path])

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export default UserContextProvider
