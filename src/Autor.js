import React, { useEffect, useState } from "react";

function Autor() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/autores")
      .then((response) => response.json())
      .then((data) => setAutores(data));
  }, []);

  return (
    <div>
      <h2>Lista de Autores</h2>
      <p>Nro Nombre Pais Estado</p>
      <ol>
        {autores.map((autor) => (
          <li key={autor.id}>
            {autor.nombres} {autor.apellidos} {autor.pais}
            {autor.estado}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Autor;
