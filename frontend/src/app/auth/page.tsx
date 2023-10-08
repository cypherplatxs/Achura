'use client'
import React, { useContext } from 'react'
import { useState } from 'react'
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/react'
import { useWallet, useSignUp } from '@/hooks'
import { User } from '@/types'
import { UserContext } from '@/context/userContext'

export default function Page() {
  const [role, setRole] = useState<string>()
  const { handleSignUp, error } = useSignUp()
  const [isLoading, setIsLoading] = useState(false)
  const { openWalletModal, accountId, disconnectWallet, accounts } = useWallet()
  const userIsLogged = useContext(UserContext)

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // console.debug(accounts)

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    data.append('accountId', accountId as string)
    data.append('publicKey', (accounts[0].publicKey || 0).toString())
    const object = Object.fromEntries(data.entries())
    const userObject = object as unknown as User;
    if (!accountId) {
      onOpen()
      return
    }
    setIsLoading(true)

    await handleSignUp(userObject)

    setIsLoading(false)
  }

  console.debug('userIsLogged', userIsLogged)
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

      <div className='min-h-[90vh] flex py-10 justify-center items-center flex-col w-full'>
        <form
          onSubmit={handleOnSubmit}
          className='px-5 lg:px-0 lg:w-1/2 flex flex-col gap-5'
        >
          <p className='text-center text-8xl animate-pulse'> 🦙</p>
          <h2 className='text-center font-bold text-4xl'>Join to Achura</h2>
          {!userIsLogged && accountId && (
            <>
              <div className='grid lg:grid-cols-2 gap-5'>
                <Select
                  onSelectionChange={(e: any) => setRole(e.currentKey)}
                  isRequired
                  name='type'
                  label='Select your role'
                >
                  <SelectItem key={'founder'} value={'founder'}>
                    Founder
                  </SelectItem>
                  <SelectItem key={'organization'} value={'organization'}>
                    Organization
                  </SelectItem>
                </Select>
                <Input
                  isRequired
                  inputMode='text'
                  label='Representative name'
                  placeholder='John Doe'
                  name='representativeName'
                />
                <Input
                  isRequired
                  inputMode='numeric'
                  label='ID number'
                  type='number'
                  placeholder='922991...'
                  name='representativeIdentificationNumber'
                />
                <Input
                  isRequired
                  inputMode='email'
                  label='Email'
                  placeholder='john.doe@example.com'
                  name='representativeEmail'
                />
                <Input
                  isRequired
                  inputMode='text'
                  label='Legal entity name'
                  placeholder='XYZ Company'
                  name='legalEntityName'
                />
                <Input
                  isRequired
                  inputMode='numeric'
                  label='Legal description'
                  placeholder='892702'
                  name='legalDescription'
                />
                <Input
                  isRequired
                  inputMode='email'
                  label='Legal Entity Email'
                  placeholder='info@xyzcompany.com'
                  name='legalEntityEmail'
                />
                <Input
                  isRequired
                  inputMode='text'
                  label='Legal Entity address'
                  placeholder='1234 Elm St, City, Country'
                  name='legalEntityAddress'
                />
                <Input
                  isRequired
                  inputMode='numeric'
                  label='Legal Entity tax registration number'
                  placeholder='89809289'
                  name='legalEntityTaxRegistrationNumber'
                />
                <Input
                  isRequired
                  inputMode='text'
                  label='Legal Entity country'
                  placeholder='CountryABC'
                  name='legalEntityCountry'
                />
                <Textarea
                  className='lg:col-span-2'
                  isRequired
                  inputMode='text'
                  label='Description'
                  placeholder='Some description'
                />
              </div>
              <Divider />
            </>
          )}
          {error && <p className='text-center'>{error}</p>}
          {isLoading && <p className='text-center'>Loading...</p>}
          {accountId && !userIsLogged ? (
            <Button
              isDisabled={isLoading || !role}
              color='primary'
              type='submit'
            >
              Authenticate
            </Button>
          ) : (
            <Button onPress={openWalletModal} color='primary'>
              Connect your wallet
            </Button>
          )}
        </form>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Remember
              </ModalHeader>
              <ModalBody>
                <p>You must connect your wallet to sign-up in the DApp</p>
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onPress={onClose}>
                  Sure!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  )
}
