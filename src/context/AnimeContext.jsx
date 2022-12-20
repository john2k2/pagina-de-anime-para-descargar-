import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [paginas, setPaginas] = useState(1);

  useEffect(() => {
    const getPersonajes = async () => {
      const url = `https://gogoanime.consumet.org/popular?type=1&page=${paginas}`;
      const { data } = await axios.get(url);

      setPersonajes(data);
    };
    getPersonajes();
  }, [paginas]);


  return (
    <AnimeContext.Provider
      value={{
        personajes,
        setPersonajes,
        paginas,
        setPaginas,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeProvider;
