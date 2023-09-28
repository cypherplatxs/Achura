'use client'
import React from 'react'
import { useState } from 'react'
import Nav from '@/components/landing/NavBar'
import Footer from '@/components/landing/Footer'
import { Button, Divider, Input, Select, SelectItem, Textarea } from '@nextui-org/react'

const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  //TODO: implementar lógica de submit
  // axios.post('/api/create-user' ...)
}

export default function Example () {
  const [role, setRole] = useState<string>()
  console.debug(role)
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

      <div className='min-h-[90vh] flex justify-center items-center flex-col w-full'>
        <form className='w-1/2 flex flex-col gap-5'>

          <p className='text-center text-8xl animate-pulse'> 🦙</p>
          <h2 className='text-center font-bold text-4xl'>Join to Achura</h2>
          <Select
            onSelectionChange={(e: any) => setRole(e.currentKey)}
            isRequired
            label='Select your role'
          >
            <SelectItem key={'founder'} value={'founder'}>
              Founder
            </SelectItem>
            <SelectItem key={'organization'} value={'organization'}>
              Organization
            </SelectItem>
          </Select>
          {role === 'organization' && (
            <div className='grid grid-cols-2 gap-5'>
              <Input
                isRequired
                inputMode='text'
                label='Organization name'
                placeholder='Some Org'
              />
            
                <Input
                isRequired
                inputMode='text'
                label='Country'
                placeholder='Colombia'
              />
                 <Input
                isRequired
                inputMode='text'
                label='Legal representative'
                placeholder='Juan Perez'
              />
                 <Input
                isRequired
                inputMode='numeric'
                label='Tax registry number'
                placeholder='219021...'
              />
                <Textarea
                className='grid col-span-2'
                isRequired
                inputMode='text'
                label='Description'
                placeholder='Some description'
              />
            </div>
          )}
          <Button color='primary'>Conect your wallet</Button>
          <Divider />
          <Button variant='bordered' color='primary' type='submit'>
            Sign-up
          </Button>
        </form>
      </div>
    </main>
  )
}
