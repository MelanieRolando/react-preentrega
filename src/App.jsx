import { useState } from "react";
import Carrito from "./components/Carrito";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Moda from "./pages/Moda";
import { Routes, Route } from "react-router-dom";
import ProductoDetalle from "./pages/ProductoDetalle";
import Footer from "./components/Footer";
import Tecnologia from "./pages/Tecnologia";

function App() {
  const [estaAutenticado, setEstaAutenticado] = useState(true);
  // Renderizado y Estructura

  return (
    <>
      <Header />

    {/*Rutas de inicio con bienvenida y navegación */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
