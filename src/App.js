import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import AcercaDe from "./AcercaDe";
import Contacto from "./Contacto";
import Usuarios from "./Usuario";
import Autores from "./Autor";
import Categorias from "./Categoria";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/usuario">Usuarios</Link>
          </li>
          <li>
            <Link to="/autor">Autores</Link>
          </li>
          <li>
            <Link to="/categoria">Categorias</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<AcercaDe />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/usuario" element={<Usuarios />} />
        <Route path="/autor" element={<Autores />} />
        <Route path="/categoria" element={<Categorias />} />
      </Routes>
    </Router>
  );
}

export default App;
