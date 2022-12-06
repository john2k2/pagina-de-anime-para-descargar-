import React from "react";
import { SearchContext } from "@/context/SearchContext";
import { useContext } from "react";

const BusquedaAnime = () => {
  const { searchAnime, searchAnimeUrl, setSearch, search } =
    useContext(SearchContext);

  const redir = () => {
    window.location.href = `/encontrar/${search} `;
  };

  const ingresarAnime = (e) => {
    setSearch(e.target.value);
  };

  const guardarAnime = (e) => {
    e.preventDefault();
    redir();
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Buscar anime"
          onChange={ingresarAnime}
          value={search}
        ></input>
        <button onClick={guardarAnime} className="text-white">
          buscar
        </button>
      </form>
    </div>
  );
};

export default BusquedaAnime;
