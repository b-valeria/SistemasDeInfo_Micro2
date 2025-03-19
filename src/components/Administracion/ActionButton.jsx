"use client";
import React, { useState } from "react";

const ActionButton = ({ children, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (children === "Crear") {
      setIsModalOpen(true);
    } else if (onClick) {
      onClick();
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
              <h2>Creacion Actividad</h2>
              <p>Aquí puedes poner cualquier contenido que desees. 
              </p>
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
      `}</style>
    </>
  );
};

export default ActionButton;