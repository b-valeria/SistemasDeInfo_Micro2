"use client";
import React from "react";
import styles from "./MainContainer.module.css";



function PaginReserva() {



  let rutas = ['Sabas-Nieves','Pico-Naiguata']
  return (
    <main className={styles.mainContainer}>
      


      <form onSubmit={(event) => {event.preventDefault(); console.log(event.target.elements.ruta.value)}}>
          <div>
            <p>
              Seleccionar una ruta 
            </p>
            <div>
              {rutas.map((ruta)=><label htmlFor = {ruta}> {ruta}  <input name = "ruta" type="radio" id = {ruta} value = {ruta} />  </label>)}
            </div>

          </div>
          <input type = "submit" value = {"reservar"}/>
            
          

      </form>

    </main>
  );
}

export default PaginReserva;

