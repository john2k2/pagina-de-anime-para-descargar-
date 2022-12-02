import React from "react";
import { useState } from "react";
import { AnimeContext } from "@/context/AnimeContext";
import { useContext } from "react";

const BusquedaAnime = () => {
  const { search, setSearch } = useContext(AnimeContext);

  const [busqueda, setBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(busqueda);
  };

  let redir = () => {
    window.location.href = `/busqueda/${busqueda}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit" onClick={redir}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default BusquedaAnime;
