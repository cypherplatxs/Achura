'use client';
import React, { useEffect, useState } from 'react';
import WalletContext from '@/context/walletContext';

function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <WalletContext.Provider value={'0x1234'}>
      {isMounted && children}
    </WalletContext.Provider>
  );
}

export default Providers;
