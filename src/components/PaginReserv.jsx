"use client";
import React from "react";
import styles from "./PaginReserv.module.css";

function PaginReserva() {
  let rutas = ["Sabas-Nieves", "Pico-Naiguata"];
  let actividades = ["Senderismo", "Fotografia"];
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
            {rutas.map((ruta) => (
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
            
              {actividades.map((actividad) => (
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
