"use client";
import React from "react";
import { NavLink } from "react-router";
import styles from "./DestinationDetailCard.module.css";
import { useParams } from "react-router";
import { obtenerDestinoPorID } from "../firebase/destinos.firebase";
import { imagenesDestinos } from "./imagenesDestino";

function DestinationDetailCard() {
  let params = useParams()

  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const cargarDestinos = async () => {
      try {
        const datos = await obtenerDestinoPorID(params.destino);
        setDetail(datos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    cargarDestinos();
  }, []);
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error cargando datos...</div>
   
  return (
    <section className={styles.detailBox}>
        <div className={styles.detailIzquierdo}>
            <img src={imagenesDestinos[detail.key]} alt={detail.nombre} className={styles.detailImage} />

            <NavLink to={'/destinos/' + params.destino + '/reservar'} className={styles.detailReservar}>

            Reservar
            </NavLink>

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
