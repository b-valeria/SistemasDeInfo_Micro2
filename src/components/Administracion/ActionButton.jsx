"use client";
import React, { useState } from "react";

const ActionButton = ({ children, section }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (children === "Crear" && (section === "gestion-guias" || section === "actividades")) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="action-button" onClick={handleOpenModal}>
        {children}
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <div className="modal-content">
              <h2>{section === "gestion-guias" ? "Gestión de Guías" : "Actividades"}</h2>
              <form>
                {section === "gestion-guias" ? (
                  <>
                    <input type="text" placeholder="Nombre del Guía" className="form-input" />
                    <input type="text" placeholder="Correo eléctronico" className="form-input" />
                    <input type="text" placeholder="Contraseña" className="form-input" />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Nombre de la Actividad" className="form-input" />
                    <input type="text" placeholder="Descripción" className="form-input" />
                    <input type="date" placeholder="Fecha" className="form-input" />
                    <input type="text" placeholder="Lugar" className="form-input" />
                    <input type="text" placeholder="Duración" className="form-input" />
                    <input type="text" placeholder="Costo" className="form-input" />
                  </>
                )}
                <button type="submit" className="accept-button">Aceptar</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .action-button {
          border-radius: 20px;
          border: 10px solid #27034b;
          color: #27034b;
          text-align: center;
          font-size: 24px;
          padding: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: #fff;
          width: 100%;
          font-family: inherit;
        }
        .action-button:hover {
          background-color: #27034b;
          color: #fff;
        }
        @media (max-width: 640px) {
          .action-button {
            font-size: 20px;
            border-width: 5px;
          }
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          position: relative;
          width: 80%;
          max-width: 500px;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-content {
          /* Add any additional styles for the modal content here */
        }
        .form-input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 2px solid #27034b;
          border-radius: 5px;
        }
        .accept-button {
          background-color: #fff;
          color: #27034b;
          border: 2px solid #27034b;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .accept-button:hover {
          background-color: #27034b;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default ActionButton;