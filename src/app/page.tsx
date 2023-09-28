import Image from 'next/image'
import Hero from '../components/landing/Hero'
import CustomCard from '../components/landing/Card'
import Faq from '@/components/landing/Faq'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col gap-10 justify-center items-center'>
     <Hero />
     <div className="flex">
     
      <CustomCard
        title="🌾 Mayor Adopción "
        subtitle="nextui.org"
        description="Ayudamos a las ONG para que entren al mundo de la blockchain"
        githubLink="https://github.com/nextui-org/nextui"
      />
    
    <CustomCard
        title="💱 Cripto to fiat "
        subtitle="nextui.org"
        
        description="Cambia de cripto a tu fiat local sin salir de ACHURA"
        githubLink="https://github.com/nextui-org/nextui"
      />
         <CustomCard
        title="🦩 Uso simple"
        subtitle="nextui.org"
        
        description="Solo necesitas tenr una wallet de NEAR "
        githubLink="https://github.com/nextui-org/nextui"
      />


    </div>

<Faq />

 
    </main>
  )
}
