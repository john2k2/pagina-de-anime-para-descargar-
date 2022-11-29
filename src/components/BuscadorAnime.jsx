import { useContext } from "react";
import { ImageContext } from "@/context/ImageContext";

const BuscadorAnime = () => {
  const { search, setSearch, personajes, paginas, setPaginas } =
    useContext(ImageContext);

  //buscador de anime sino que vuelva a pagina 1

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      setSearch(e.target.value);
    } else if (e.target.value === "") {
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="h-[50px] w-[350px] rounded-lg border-2 border-slate-500 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-500"
        type="text"
        placeholder="Buscar Anime"
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default BuscadorAnime;
