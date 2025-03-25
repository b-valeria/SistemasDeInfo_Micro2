"use client";
import React, {use} from "react"; 
import styles from "./PaginReserv.module.css";
import { useParams } from "react-router";
import { obtenerDestinoPorID } from "../firebase/destinos.firebase";
import { UserContext } from "../Context/UserContext";
import { crearReserva } from "../firebase/reserv.firebase";


function PaginReserva() {
  let params = useParams();

    const {user}=use(UserContext)
    console.log(user)

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
  if (error) return <div>Error cargando datos...</div>;

  console.log(destino);

  return (
    <main className={styles.mainContainer}>
      <form
        className={styles.cardForm}
        onSubmit={(event) => {
          const userUID = user?.uid 
          if (!userUID){
            alert ("Debes inisiar sesion para reservar")
          }
          const formData = {
            fecha: event.target.elements.fecha.value,
            hora: event.target.elements.hora.value,
            ruta: event.target.elements.ruta.value,
            actividad: event.target.elements.actividad.value,
            destino: params.destino,
            user: userUID,
            fechaDeCreacion: new Date()
          };
          event.preventDefault();


          if (
            !formData.fecha ||
            !formData.hora ||
            !formData.ruta ||
            !formData.actividad
          ) {
            alert("Completa los campos del formulario");

            return;
          }
          crearReserva(formData)
            alert("Reserva creada con exito")
        }}
      >
        <label className={styles.labelContainer} htmlFor="fecha">
          {" "}
          Fecha <input name="fecha" id="fecha" type="date" />{" "}
        </label>
        <label className={styles.labelContainer} htmlFor="hora">
          {" "}
          Hora <input name="hora" id="hora" type="time" />{" "}
        </label>

        <div className={styles.labelContainer}>
          <p>Selecciona una ruta:</p>
          {destino?.rutas?.map((ruta) => (
            <label className={styles.checkBoxLabel} htmlFor={ruta}>
              {" "}
              {ruta} <input name="ruta" type="radio" id={ruta} value={ruta} />{" "}
            </label>
          ))}
        </div>

        <label className={styles.labelContainer} htmlFor="actividad">
          {" "}
          Actividades{" "}
          <select name="actividad" id="actividad">
            {destino?.actividades_disponibles?.map((actividad) => (
              <option className={styles.selectOption} value={actividad}>
                {" "}
                {actividad}{" "}
              </option>
            ))}
          </select>{" "}
        </label>

        <input type="submit" value={"reservar"} />
      </form>
    </main>
  );
}

export default PaginReserva;
