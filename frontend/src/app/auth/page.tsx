'use client'
import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/react'
import { useWallet, useSignUp } from '@/hooks'
import { User } from '@/types'
import { SignUpForm } from '@/components'
import { PATHS } from '@/config'
import { useRouter } from 'next/navigation'

export default function Page () {
  const { handleSignUp, error } = useSignUp()
  const [isLoading, setIsLoading] = useState(false)
  const { openWalletModal, accountId, accounts } = useWallet()
  const router = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleOnSubmit = async (data: User) => {
    if (accountId) {
      data.accountId = accountId
    }
    if (accounts[0].publicKey) {
      data.publicKey = accounts[0].publicKey
    }

    setIsLoading(true)
    const response = await handleSignUp(data)
    setIsLoading(false)

    if (response && !error) {
      router.replace(PATHS.DASHBOARD)
    }
  }

  useEffect(() => {
    if (error) onOpen
  }, [error])

  return (
    <main className='min-h-screen w-screen relative'>
      <div
        className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      >
        <div
          className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <div className='min-h-[90vh] flex py-10 justify-center items-center flex-col w-full gap-5'>
        <p className='text-center text-8xl animate-pulse'> 🦙</p>
        <h2 className='text-center font-bold text-4xl'>Join to Achura</h2>
        {accountId ? (
          <SignUpForm isLoading={isLoading} handleOnSubmit={handleOnSubmit} />
        ) : (
          <Button onPress={openWalletModal} color='primary'>
            Connect your wallet
          </Button>
        )}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Error
              </ModalHeader>
              <ModalBody>
                <p>{error}</p>
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onPress={onClose}>
                  Ok!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  )
}
