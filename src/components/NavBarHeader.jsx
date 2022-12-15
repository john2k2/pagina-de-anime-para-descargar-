import React from "react";
import { Link } from "react-router-dom";
import { AnimeContext } from "@/context/AnimeContext";
import { useContext } from "react";

const NavBarHeader = () => {
  const { setPaginas } = useContext(AnimeContext);

  const resetPaginas = () => {
    setPaginas(1);
  };

  return (
    <div
      className="
    top-28 absolute left-0 z-10
    flex h-[100vh]
    w-[100%] flex-col items-center 
    justify-start gap-4
    font-bold text-base
    bg-light-blue
    pt-20
    md:h-[100%]
    md:w-[100%] 
    md:items-center
    md:justify-center
    md:gap-4
    md:pt-0

    lg:h-0
    lg:w-[100%]
    lg:flex-row
    lg:static
    
    lg:items-center
    lg:justify-center
    lg:gap-4
    lg:pt-0
    

    
    "
    >
      <Link to="/anime">
        <button
          onClick={resetPaginas}
          className="rounded-lg bg-slate-500 px-4 py-2 text-white"
        >
          Anime
        </button>
      </Link>
      <Link to="/Emision">
        <button className="rounded-lg bg-slate-500 px-4 py-2 text-white">
          Emision
        </button>
      </Link>
      <Link to="/movies">
        <button className="rounded-lg bg-slate-500 px-4 py-2 text-white">
          Movies
        </button>
      </Link>
      <Link to="/finalizado">
        <button className="rounded-lg bg-slate-500 px-4 py-2 text-white">
          Finalizado
        </button>
      </Link>
    </div>
  );
};

export default NavBarHeader;
