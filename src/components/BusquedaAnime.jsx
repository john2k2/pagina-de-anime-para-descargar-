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
    <div className="flex w-full  justify-center lg:justify-end lg:text-right  ">
      <form>
        <input
          className="lg:w-92  h-10 w-52 rounded-lg border-2 border-solid  border-orange-600  px-3 py-2   text-white  "
          type="text"
          placeholder="Buscar anime"
          onChange={ingresarAnime}
          value={search}
        ></input>
      </form>
    </div>
  );
};

export default BusquedaAnime;
