"use client";
import React from "react";
import ActionButton from "./ActionButton";
import DashboardSection from "./DashboardSection";
import SearchBar from "./SearchBar";
import ReservationList from "./ReservationList";

const AdminDashboard = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Italiana&display=swap"
        rel="stylesheet"
      />
      <main className="dashboard">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e19e1f0e01b56eaf49e1d9264072079df764bb0"
          alt="LAX Logo"
          className="logo"
        />
        <h1 className="dashboard-title">Bienvenido Administrador</h1>

        <div className="dashboard-grid">
          <DashboardSection title="TIPOS">
            <ActionButton>Visualizar</ActionButton>
            <ActionButton>Actualizar</ActionButton>
            <ActionButton section="tipos">Crear</ActionButton>
            <ActionButton>Eliminar</ActionButton>
          </DashboardSection>

          <DashboardSection title="Actividades">
            <ActionButton>Visualizar</ActionButton>
            <ActionButton>Actualizar</ActionButton>
            <ActionButton section="actividades">Crear</ActionButton>
            <ActionButton>Eliminar</ActionButton>
          </DashboardSection>

          <DashboardSection title="Gestión de Guías">
            <ActionButton section="gestion-guias">Crear</ActionButton>
            <ActionButton>Pagar</ActionButton>
            <ActionButton>Asignar</ActionButton>
            <ActionButton>Eliminar</ActionButton>
            <ActionButton>Consultar Perfiles</ActionButton>
          </DashboardSection>

          <section className="reservations-section">
            <h2 className="section-title">Ver Reservas</h2>
            <ReservationList />
            <SearchBar onSearch={(value) => console.log("Search:", value)} />
          </section>
        </div>

        <style jsx>{`
          .dashboard {
            position: relative;
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
            padding: 20px;
            font-family: "Montserrat", sans-serif;
            background-color: #fff;
          }
          .logo {
            width: 243px;
            height: 243px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .dashboard-title {
            color: #27034b;
            text-align: center;
            font-family: "Italiana", serif;
            font-size: 96px;
            font-weight: 400;
            margin-bottom: 40px;
          }
          .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            padding: 0 20px;
          }
          .reservations-section {
            border-radius: 20px;
            border: 10px solid #27034b;
            padding: 20px;
            margin-bottom: 30px;
            background-color: #fff;
          }
          .section-title {
            color: #27034b;
            text-align: center;
            font-size: 36px;
            font-weight: 800;
            margin-bottom: 30px;
          }
          @media (max-width: 991px) {
            .dashboard-title {
              font-size: 72px;
            }
            .dashboard-grid {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 640px) {
            .logo {
              width: 150px;
              height: 150px;
            }
            .dashboard-title {
              font-size: 48px;
            }
            .reservations-section {
              border-width: 5px;
              padding: 15px;
            }
            .section-title {
              font-size: 28px;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default AdminDashboard;