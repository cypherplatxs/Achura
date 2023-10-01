'use client'
import React, { useCallback, useEffect, useState } from 'react'
import WalletContext from '@/context/walletContext'
import { NextUIProvider } from '@nextui-org/react'

import { setupWalletSelector } from '@near-wallet-selector/core'
import { setupModal } from '@near-wallet-selector/modal-ui'
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet'
import { WalletSelectorContextProvider } from '@/context/wallectSelectorContext'

async function openModal () {
  const selector = await setupWalletSelector({
    network: 'testnet',
    modules: [setupMyNearWallet()]
  })

  const modal = setupModal(selector, {
    contractId: 'test.testnet'
  })

  modal.show()
}

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
