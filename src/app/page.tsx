import Image from 'next/image'
import Hero from '../components/landing/Hero'
import CustomCard from '../components/landing/Card'
import Faq from '@/components/landing/Faq'
import Nav from '@/components/landing/NavBar'
import Footer from '@/components/landing/Footer'
import Aliadxs from '@/components/landing/Aliadxs'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col gap-10 justify-center items-center'>
     
     <Nav />
     <Hero /> 
     <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900 pt-20 pb-10">
          Que nos diferencia?
        </h2>
     <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row">
     
      <CustomCard
        title="🌾 Mayor Adopción "
        subtitle="nextui.org"
        description="Ayudamos a las mayores ONGs para que crezcan gracias a la tecnología blockchain"
        githubLink="https://github.com/nextui-org/nextui"
      />
    
    <CustomCard
        title="💱 Cripto to fiat "
        subtitle="nextui.org"
        
        description="Cambia de cripto a tu Fiat local sin salir de ACHURA"
        githubLink="https://github.com/nextui-org/nextui"
      />
         <CustomCard
        title="🦩 Uso simple"
        subtitle="nextui.org"
        
        description="Solo necesitas tener una wallet de NEAR "
        githubLink="https://github.com/nextui-org/nextui"
      />


    </div>


    <Aliadxs />
<Faq />


<Footer />
    </main>
  )
}
