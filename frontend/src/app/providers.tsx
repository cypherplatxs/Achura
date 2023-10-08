'use client'
import React from 'react'
import WalletContext from '@/context/walletContext'
import { NextUIProvider } from '@nextui-org/react'
import { WalletSelectorContextProvider } from '@/context/wallectSelectorContext'
import UserContextProvider from '@/context/userContext'

function Providers ({ children }: { children: React.ReactNode }) {
  
  
  return (
    <WalletContext.Provider value='0x2345'>
      <WalletSelectorContextProvider>
        <UserContextProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </UserContextProvider>
      </WalletSelectorContextProvider>
    </WalletContext.Provider>
  )
}

export default Providers
