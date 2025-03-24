const ReservationList = () => {
  const reservations = [
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
    "Usuario Ruta/Actividad (dd/mm/aa) Guía Pago Contribución",
  ];

  return (
    <div className="reservation-container">
      <textarea
        className="reservation-textarea"
        value={reservations.join("\n")}
        readOnly
      />
      <style jsx>{`
        .reservation-container {
          margin-bottom: 20px;
        }
        .reservation-textarea {
          width: 100%;
          height: 200px;
          border: 4px solid #27034b;
          border-radius: 10px;
          padding: 10px;
          font-size: 16px;
          color: #000;
          resize: none;
          overflow-y: auto;
        }
        .reservation-textarea:focus {
          outline: none;
        }
        @media (max-width: 640px) {
          .reservation-textarea {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ReservationList;