'use client';
import React, { useEffect, useState } from 'react';
import WalletContext from '@/context/walletContext';
import { NextUIProvider } from '@nextui-org/react';

function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <WalletContext.Provider value='0x2345'>
      <NextUIProvider>{isMounted && children}</NextUIProvider>
    </WalletContext.Provider>
  );
}

export default Providers;
