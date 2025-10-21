import styles from './Footer.module.css';

const Footer = () => {
  
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerNav}>
        <li>
          <a href="#" className={styles.footerLink}>Acerca de nosotros</a>
        </li>
        <li>
          <a href="#" className={styles.footerLink}>Términos y Condiciones</a>
        </li>
      </ul>
      <p className={styles.copyright}>
        © {anioActual} Bruma Store. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;