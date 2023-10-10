import Hero from '@/components/landing/Hero'
import CustomCard from '../components/landing/Card'
import Faq from '@/components/landing/Faq'
import Aliadxs from '@/components/landing/Aliadxs'

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col gap-10 justify-center items-center'>
      <Hero />
      <h2 className='text-center text-4xl font-semibold leading-8 text-gray-900 pt-20 pb-10'>
        Que nos diferencia?
      </h2>
      <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row'>
        <CustomCard
          title='🌾 Mayor Adopción '
          subtitle='Achura.co'
          description='Ayudamos a las mayores ONGs para que crezcan gracias a la tecnología blockchain'
          githubLink='https://github.com/cypherplatxs/Achura'
        />

        <CustomCard
          title='💱 Cripto to fiat '
          subtitle='Achura.co'
          description='Cambia de cripto a tu Fiat local sin salir de ACHURA'
          githubLink='https://github.com/cypherplatxs/Achura'
        />
        <CustomCard
          title='🦩 Uso simple'
          subtitle='Achura.co'
          description='Solo necesitas tener una wallet de NEAR '
          githubLink='https://github.com/cypherplatxs/Achura'
        />
      </div>
      <Aliadxs />
      <div className='w-6/12 pb-20'>
        <h1 className='text-center text-4xl font-bold pb-6'>FAQS</h1>
        <Faq /></div>
      
    </main>
  )
}
