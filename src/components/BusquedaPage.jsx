import React from "react";
import { useState, useEffect } from "react";
import { AnimeContext } from "@/context/AnimeContext";

const BusquedaPage = () => {
  const { search, setSearch } = useContext(AnimeContext);

  //recibir el formulario
  const [busqueda, setBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(busqueda);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};
export default BusquedaPage;
