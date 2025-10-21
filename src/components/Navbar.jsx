import { Link } from "react-router-dom";
import styles from './Navbar.module.css'; 
const Navbar = () => {
  return(
    <nav className={styles.navbar}>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>Inicio</Link>
          <Link to="/tecnologia" className={styles.link}>Tecnologia</Link>
          <Link to="/moda" className={styles.link}>Moda</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;