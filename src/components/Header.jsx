<<<<<<< HEAD
import React,{use} from "react";
import styles from "./MainContainer.module.css";
import { Link } from "react-router";

function Header() {


  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5ced3c35b122040f4ac92ba7f1b1e9a1a8bb6d"
        alt="Logo"
        className={styles.logo}
      />
      <nav className={styles.navLinks}>
        <a href="#" className={styles.navItem}>
          Home
        </a>
        <a href="#" className={styles.navItem}>
          Destinos
        </a>
        <a href="#" className={styles.navItem}>
          Novedades
        </a>
        <a href="#" className={styles.navItem}>
          Contacto
        </a>  
        
        
    


  
      </nav>
    </header>
  );
}

=======
import React,{use} from "react";
import styles from "./MainContainer.module.css";
import { Link } from "react-router";

function Header() {


  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5ced3c35b122040f4ac92ba7f1b1e9a1a8bb6d"
        alt="Logo"
        className={styles.logo}
      />
      <nav className={styles.navLinks}>
        <a href="#" className={styles.navItem}>
          Home
        </a>
        <a href="#" className={styles.navItem}>
          Destinos
        </a>
        <a href="#" className={styles.navItem}>
          Novedades
        </a>
        <a href="#" className={styles.navItem}>
          Contacto
        </a>  
        
        
    


  
      </nav>
    </header>
  );
}

>>>>>>> 639656033b863ed7ed0a5e70a72598ed6ad06146
export default Header;