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
    <div
      className="
      h-full
      w-full
      items-center
      justify-center
      md:flex
      md:justify-center
      md:py-4
    "
    >
      <form onSubmit={handleSubmit}>
        <input
          className="h-10
        w-70 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none mr-4
        "
          type="text"
          placeholder="Buscar"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button
          className="h-10
        w-20 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none
          "
          type="submit"
          onClick={redir}
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default BusquedaAnime;
