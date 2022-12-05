import React from "react";

import { useContext } from "react";
import { AnimeContext } from "@/context/AnimeContext";

const Paginas = () => {
  const { paginas, setPaginas } = useContext(AnimeContext);

  const paginaNext = () => {
    setPaginas(paginas + 1);
  };

  const paginaPrev = () => {
    if (paginas > 1) {
      setPaginas(paginas - 1);
    }
  };

  return (
    <div className="flex justify-center md:m-8">
      <button
        className="rounded-l bg-slate-500 py-2 px-4 font-bold text-white hover:bg-slate-700 mx-4"
        onClick={paginaPrev}
      >
        Prev
      </button>
      <button
        className="rounded-r bg-slate-500 py-2 px-4 font-bold text-white hover:bg-slate-700 mx-4"
        onClick={paginaNext}
      >
        Next
      </button>
    </div>
  );
};

export default Paginas;
