import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [paginas, setPaginas] = useState(1);
  const [search, setSearch] = useState("");

  

  useEffect(() => {
    const getPersonajes = async () => {
      const url = `https://gogoanime.consumet.org/popular?type=1&page=${paginas}`;
      const { data } = await axios.get(url);

      setPersonajes(data);
    };
    getPersonajes();
  }, [paginas]);

  useEffect(() => {
    const setSearch = async () => {
      const url = `https://gogoanime.consumet.org/search?keyw=${search}`;
      const { data } = await axios.get(url);

      setPersonajes(data);
    };
    setSearch();
  }, [search]);

  return (
    <AnimeContext.Provider
      value={{
        personajes,
        paginas,
        setPaginas,
        search,
        setSearch,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeProvider;
