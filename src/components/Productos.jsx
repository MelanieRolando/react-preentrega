import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import styles from './Productos.module.css';

const Productos = () => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      .catch((error) => setError('Error al cargar productos'))
      .finally(() => setCargando(false))
  },[]);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

  return(
   <div className={styles.productosWrapper}>
     <h2 className={styles.titulo}>Todos los productos</h2>
       <div className={styles.productosGrid}>
         {productos.map((producto) => (
           <div className={styles.cardProducto} key={producto.id}>
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>${producto.price}</p>
      <div className={styles.botones}>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
      <Link to={`/productos/${producto.id}`}>Detalles</Link>
      </div>
    </div>
  ))}
</div>
</div>

  );
};

export default Productos;
