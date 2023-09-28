import Image from 'next/image'
import Hero from '../components/landing/Hero'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col gap-10 justify-center items-center'>
     <Hero />
    </main>
  )
}
