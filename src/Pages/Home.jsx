import React,{use} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home() {
    const cardsData = [
        {
            title: "Raíces Unimetanas",
            text: "En nuestra agencia de excursiones, nos enorgullece contar con un equipo de guías apasionados y altamente capacitados, todos ellos egresados de la Universidad Metropolitana. Gracias a la formación integral que ofrece esta prestigiosa institución, nuestros guías no solo están equipados con conocimientos académicos, sino también con una profunda comprensión del entorno natural y cultural que nos rodea.",
            width: 200,
            height: 100, 
        },
        {
            title: "Nosotros",
            text: "Nos dedicamos a ofrecer experiencias únicas en el Parque Nacional El Ávila, en Caracas. Con años de experiencia en ecoturismo, nuestro objetivo es conectar a los visitantes con la belleza natural y la rica biodiversidad de esta emblemática montaña. Nos comprometemos a brindar excursiones seguras, educativas y memorables, fomentando el respeto por el medio ambiente y la cultura local. ",
            width: 200,
            height: 100,
        },
        {
            title: "Amantes del Ávila",
            text: "El Ávila, también conocido como Waraira Repano, es un emblemático cerro que se alza sobre Caracas, Venezuela. Su historia se remonta a tiempos precolombinos, cuando las comunidades indígenas lo consideraban sagrado. Durante la colonización española, el Ávila fue testigo del crecimiento de la ciudad y se convirtió en un símbolo de identidad para los caraqueños.",
            width: 200,
            height: 100,
        },
    ];
    
    return (
        <>


            <section className='mt-32 flex justify-center items-center flex-col gap-5 '>
                <h1 className='font-bold text-5xl '>Hiking y Diversión en el Ávila </h1>
                <h2 className='italic text-3xl  mt-9'>Conecta con el corazón de Caracas </h2>

                <input type="text" placeholder='Buscar ' className='border p-2 w-1/2 bg-white' />


            </section>



            <section className=' flex gap-6 justify-center items-center mt-10 mb-28'>
            {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} text={card.text} width={card.width} height={card.height} />

                ))}
            </section>
        </>
    );
}

