import React, { useEffect, useState } from "react";

function Categoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/categorias")
      .then((response) => response.json())
      .then((data) => setCategorias(data));
  }, []);

  return (
    <div>
      <h2>Lista de Categorias</h2>
      {categorias.map((categoria) => (
        <ul>
          <li key={categoria.id}>Nombre: {categoria.nombre}</li>
          <li key={categoria.id}>Estado: {categoria.estado}</li>
        </ul>
      ))}
    </div>
  );
}

export default Categoria;
