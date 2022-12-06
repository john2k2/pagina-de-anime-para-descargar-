import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";

const PaginaEncontrar = () => {
  const { setSearch, search, searchAnime } = useContext(SearchContext);


  return (
    <div>
      <h1 className="text-white">Encontrar</h1>
      <h2>{search}</h2>
      <div>
        {searchAnime.map((anime) => (
          <div key={anime.id}>
            <img src={anime.animeImg} alt={anime.animeTitle} />
            <h3>{anime.animeTitle}</h3>
            <p>{anime.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaEncontrar;
