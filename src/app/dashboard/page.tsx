'use client'
import WalletContext from '@/context/walletContext'
import React, { useEffect } from 'react'
import { useContext } from 'react'


function Page() {
  const address = useContext(WalletContext)
  console.debug(address)
  useEffect(() => {
    console.debug('address')
  },[address] )
  return (
    <div>{address}</div>
  )
}

export default Page