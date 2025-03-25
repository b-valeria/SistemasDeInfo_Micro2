import React from "react";
import styles from "./Destinos.module.css";


// Importar las imágenes

import { obtenerDestinos } from "../firebase/destinos.firebase";
import { imagenesDestinos } from "./imagenesDestino";
import { NavLink } from "react-router";


function Destinos() {
    
  const [destinos, setDestinos] = React.useState([]);
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(null);

React.useEffect(() => {
  const cargarDestinos = async () => {
    try {
      const datos = await obtenerDestinos();
      setDestinos(datos);
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
 console.log(destinos)

  return (
    <div className={styles.container}>
      <h1>Destinos</h1>
      <div className={styles.largeCard}>
      <div className={styles.cardsContainer}>
        {destinos.map((destino)=><NavLink className={styles.card} key = {destino.key} to = {'/destinos/'+ destino.id}>

            <div className={styles.cardContent}>
              <img src={imagenesDestinos[destino.key]} alt={destino.nombre} />
              <h2>{destino.nombre}</h2>
            </div>

          </NavLink>)}
  
        </div>
      </div>
    </div>
  );
}

export default Destinos;



