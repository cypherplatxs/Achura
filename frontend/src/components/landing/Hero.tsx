'use client'
import Link from 'next/link'

export default function Hero () {

  return (
    <div >
      <div className="relative isolate px-6 pt-5 lg:pt-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-black opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto text-center max-w-2xl flex flex-col gap-10 ">
          <p className='text-8xl animate-pulse'>🦙</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            ACHURA
          </h1>
          <p className="text-base leading-8 text-withe">
            Achura conecta ONGs al rededor del mundo mediente un servicio de transferencia de recursos por medio de la red NEAR.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <Link
              href="/auth"
              className="rounded-md bg-indigo-600 w-full h-full py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Inicia la app
            </Link>
          </div>
          <div className="relative rounded-full px-3 py-5 lg:py-10 text-sm leading-6 text-withe ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Revisa nuestra documentación .
            <Link href="https://platohedro.org/" className="font-semibold text-indigo-600">
              <span className="absolute inset-0 " aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>


        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>


      </div>
    </div>
  )
}