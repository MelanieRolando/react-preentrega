import Navbar from './Navbar';
import styles from './Header.module.css';
import UserIcon from '../assets/UserIcon';
import BagIcon from '../assets/BagIcon';
import { Link } from 'react-router-dom';
import logo from "../assets/bruma-logo.png";

const Header = ({contadorEnCarrito = 5}) => {
  return (
     <header className={styles.header}>
  {/*Barra superior */}
  <div className={styles.topBar}>
    <p>Envíos gratis a partir de $50.000 | Cambios sin cargo</p>
  </div>

  {/* Logo y iconos */}
  <div className={styles.middleBar}>
    {/* <div className={styles.logo}>
      Bruma Store
    </div> */}
    <div className={styles.logo}>
      <img src={logo} alt="Bruma Store logo" />
    </div>
    <div className={styles.iconosContainer}>
      <UserIcon />
      <Link to="/carrito" className={styles.iconoDeCarrito}>
        <BagIcon />
        {contadorEnCarrito > 0 && (
          <span className={styles.contadorDeCarrito}>{contadorEnCarrito}</span>
        )}
      </Link>
    </div>
  </div>

 
  <Navbar />
</header>
  );
};

export default Header;
