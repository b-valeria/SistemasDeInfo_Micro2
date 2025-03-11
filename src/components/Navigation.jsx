"use client";
import { NavLink } from "react-router";
import React, { useState } from "react";
import styles from "./MainContainer2.module.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navStyle = {
    ...(isMenuOpen && { transform: "translate(0)" }),
  };

  return (
    <>
      {/* Mobile menu toggle button - only visible on small screens */}
      {!isMenuOpen && (
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Open navigation menu"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 10,
            display: "none",
            "@media (max-width: 991px)": {
              display: "block",
            },
          }}
        >
          ☰
        </button>
      )}

      <nav className={styles.navigation} style={navStyle}>
        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            aria-label="Close navigation menu"
            style={{
              alignSelf: "flex-end",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              display: "none",
              "@media (max-width: 991px)": {
                display: "block",
              },
            }}
          >
            ✕
          </button>
        )}

        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink href="#" className={styles.navLink}>
          Destinos
        </NavLink>
        <NavLink href="#" className={styles.navLink}>
          Novedades
        </NavLink>
        <NavLink href="#" className={styles.navLink}>
          Contacto
        </NavLink>
        <NavLink to={"/login"} className={styles.loginButton}>
          Login
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation;