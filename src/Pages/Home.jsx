import React,{use} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home() {

    
    return (
        <>


            <section className='mt-32 flex justify-center items-center flex-col gap-5 '>
                <h1 className='font-bold text-5xl '>Hiking y Diversion en el Avila </h1>
                <h2 className='italic text-3xl  mt-9'>Conecta con el corazon de Caracas </h2>

                <input type="text" placeholder='Buscar ' className='border p-2 w-1/2 bg-white' />


            </section>



            <section className=' flex gap-6 justify-center items-center mt-10 mb-28'>



                <Card />
                <Card />
                <Card />

            </section>

        </>
    )
}
