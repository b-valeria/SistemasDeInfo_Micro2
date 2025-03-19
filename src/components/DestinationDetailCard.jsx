"use client";
import React from "react";
import styles from "./DestinationDetailCard.module.css";
import Header from "./Header";
import { useParams } from "react-router";
import { destinos } from "./destino";


function DestinationDetailCard() {
  let params = useParams()

    let detail = destinos.find((destino)=>destino.key==params.destino)
    console.log(detail)
    // recorre el array del destino buscando el destino con la misma ruta

  console.log(params)
  return (
    <section className={styles.detailBox}>
        <div className={styles.detailIzquierdo}>
            <img src="/Foto_Avila.webp" className={styles.detailImage}/>


            <button className={styles.detailReservar}>
                Reservar
            </button>

        </div>
        <div className={styles.detailDerecho}>
            <h1 className={styles.detailTitle}>
                {detail.nombre}
            </h1>
            <h2 className={styles.detailText}>
                {detail.description}
            </h2>
            <ul>
                {detail.caracteristicas.map((caracteristica)=><li className={styles.detailText}>{caracteristica}</li>)} 
                {/* //Permite recorrer cada careacteristica convertir string a html */}
            </ul>
            <p className={styles.detailText}>
                <span className={styles.detailTextSombreado}>
                    Dificultad:
                </span>
                    {detail.dificultad}
            </p>
            <p className={styles.detailText}>
                <span className={styles.detailTextSombreado}>
                    Actividades Disponibles:
                </span>
                  {detail.actividades_disponibles}
            </p>
            <p className={styles.detailText}>
                <span className={styles.detailTextSombreado}>
                    Puntos de Interes:
                </span>
                 {detail.puntos_de_interes}
            </p>
            <p className={styles.detailText}>
                <span className={styles.detailTextSombreado}>
                    Duración:
                </span>
                 {detail.duracion}
            </p>
        </div>
    </section>
  );
}

export default DestinationDetailCard;
