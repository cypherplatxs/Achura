'use client'
import React, { useCallback, useEffect, useState } from 'react'
import WalletContext from '@/context/walletContext'
import { NextUIProvider } from '@nextui-org/react'
import { WalletSelectorContextProvider } from '@/context/wallectSelectorContext'


function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <WalletContext.Provider value='0x2345'>
      <WalletSelectorContextProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </WalletSelectorContextProvider>
    </WalletContext.Provider>
  )
}

export default Providers
