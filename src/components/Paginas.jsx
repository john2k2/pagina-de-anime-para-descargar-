import React from "react";

import { useContext } from "react";
import { ImageContext } from "@/context/ImageContext";

const Paginas = () => {
  const { paginas, setPaginas } = useContext(ImageContext);

  

    

  const paginaNext = () => {
    setPaginas(paginas + 1);
  };

  const paginaPrev = () => {
    if (paginas > 1) {
      setPaginas(paginas - 1);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="rounded-l bg-slate-500 py-2 px-4 font-bold text-white hover:bg-slate-700"
        onClick={paginaPrev}
      >
        Prev
      </button>
      <button
        className="rounded-r bg-slate-500 py-2 px-4 font-bold text-white hover:bg-slate-700"
        onClick={paginaNext}
      >
        Next
      </button>
    </div>
  );
};

export default Paginas;
