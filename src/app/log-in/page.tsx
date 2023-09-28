import React from 'react';
import Image from 'next/image'

const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  //TODO: implementar lógica de submit
  // axios.post('/api/user' ...)
};

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
             <a href='#'><p className='text-9xl animate-bounce justify-center items-center text-center'>🦙</p></a>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-withe">
           Log In ACHURA
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
  
            <div >
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-8 py-6 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
               Conecta tu Near Wallet
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          👛 Aun no tienes{' '} 
            <a href="https://www.mynearwallet.com/" target='_blank'  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             Near Wallet de Near?
            </a>
          </p>
        </div>
      </div>
    </>
  )
}