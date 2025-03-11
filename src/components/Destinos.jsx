import React from "react";
import styles from "./Destinos.module.css";

// Importar las imágenes
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.webp";
import backgroundImage from "../images/arteavila.png";

function Destinos() {
  return (
    <div className={styles.container} style = {{backgroundImage: `url(${backgroundImage})`}}>
      <h1>Destinos</h1>
      <div className={styles.largeCard}>
        <div className={styles.cardsContainer}>
          <button className={styles.card}>
            <div className={styles.cardContent}>
              <img src={image1} alt="Sabas Nieves" />
              <h2>Sabas Nieves</h2>
            </div>
          </button>
          <button className={styles.card}>
            <div className={styles.cardContent}>
              <img src={image2} alt="Lagunazo" />
              <h2>Lagunazo</h2>
            </div>
          </button>
          <button className={styles.card}>
            <div className={styles.cardContent}>
              <img src={image3} alt="Pico Oriental" />
              <h2>Pico Oriental</h2>
            </div>
          </button>
          <button className={styles.card}>
            <div className={styles.cardContent}>
              <img src={image4} alt="Pico Naiguatá" />
              <h2>Pico Naiguatá</h2>
            </div>
          </button>
          <button className={styles.card}>
            <div className={styles.cardContent}>
              <img src={image5} alt="El Banquito" />
              <h2>El Banquito</h2>
            </div>
          </button>
          <button className={styles.card}>
            <div className={styles.cardContent}>
              <img src={image6} alt="Piedra Indio" />
              <h2>Piedra Indio</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destinos;