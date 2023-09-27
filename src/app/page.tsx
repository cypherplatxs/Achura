import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-8xl font-bold' >Achura</h1>
        <p className='text-9xl animate-bounce'>🦙</p>
        <h2 className='text-4xl font-bold'>Empowering NGO's </h2>
    </main>
  )
}
