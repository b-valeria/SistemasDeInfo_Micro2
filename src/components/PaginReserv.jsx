"use client";
import React from "react";
import styles from "./PaginReserv.module.css";
import { useParams } from "react-router";
import { obtenerDestinoPorID } from "../firebase/destinos.firebase";



function PaginReserva() {
  let params = useParams()

    const [destino, setDestino] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
      const cargarDestinos = async () => {
        try {
          const datos = await obtenerDestinoPorID(params.destino);
          setDestino(datos);
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


    console.log(destino)

  return (
    <main className={styles.mainContainer}>
      
      <form
        className={styles.cardForm}
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target.elements.ruta.value);
        }}
      >

          <label className = {styles.labelContainer} htmlFor="Fecha">
            {" "}
            Fecha <input name="Fecha" id="Fecha" type="date" />{" "}
          </label>
          <label className = {styles.labelContainer} htmlFor="Hora">
            {" "}
            Hora <input name="Hora" id="Hora" type="time" />{" "}
          </label>

          <div className = {styles.labelContainer}>
            <p>
              Selecciona una ruta: 
            </p>
            {destino?.rutas?.map((ruta) => (
              <label className = {styles.checkBoxLabel} htmlFor={ruta}>
                {" "}
                {ruta} <input name="ruta" type="radio" id={ruta} value={ruta} />{" "}
              </label>
            ))}
          </div>

          <label className = {styles.labelContainer} htmlFor="Actividades">
            {" "}
            Actividades{" "}
            <select  name="Actividades" id="Actividades">
            
              {destino?.actividades_disponibles?.map((actividad) => (
                <option className = {styles.selectOption} value={actividad}> {actividad} </option>
              ))}
              
            </select>{" "}
          </label>
        

        <input type="submit" value={"reservar"} />
      </form>
    </main>
  );
}

export default PaginReserva;
