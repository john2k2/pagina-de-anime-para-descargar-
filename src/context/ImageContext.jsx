import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [personajes, setPersonajes] = useState([]);
  const [paginas, setPaginas] = useState(1);
  const [search, setSearch] = useState("");
  const [anime, setAnime] = useState([]);

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

  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    const getAnime = async () => {
      const url = `https://gogoanime.consumet.org/anime-details/${id}`;
      const { data } = await axios.get(url);

      setAnime(data);
    };
    getAnime();
  }, [id]);

  return (
    <ImageContext.Provider
      value={{
        personajes,
        paginas,
        setPaginas,
        search,
        setSearch,
        anime,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
