import React from 'react';
import styles from '../components/MainContainer.module.css';

function Novedades() {
    return (
        <main className={styles.mainContainer} style={{ backgroundImage: `url(/ruta/a/tu/imagen.jpg)` }}>
            <h1 className="text-white text-4xl font-bold text-center mt-20">Novedades</h1>
            <p className="text-white text-center mt-4">Aquí encontrarás las últimas novedades sobre nuestras excursiones.</p>
        </main>
    );
}

export default Novedades;

