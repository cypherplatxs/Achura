/* eslint-disable react-hooks/exhaustive-deps */
import { useGetUser } from '@/hooks'
import { WalletContextType } from '@/types/index'
import { createContext, useContext, useEffect, useState } from 'react'
import { useWalletSelector } from './wallectSelectorContext'
import { redirect, usePathname } from 'next/navigation'

export const UserContext = createContext<boolean | null>(null)

function UserContextProvider ({ children }: { children: React.ReactNode }) {
  const [userLoged, setUserLoged] = useState(false)
  const { accountId } = useWalletSelector()
  const { getUser, data, error } = useGetUser()
  const path = usePathname()
  useEffect(() => {
    getUser(accountId as string)
  }, [accountId])

  useEffect(() => {
    if (data) setUserLoged(true)
    else setUserLoged(false)
  }, [data])
  console.debug(data, error)

  useEffect(() => {
    if (path === '/dashboard' && !data) redirect('/auth')
  }, [path])

  return (
    <UserContext.Provider value={userLoged}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider
