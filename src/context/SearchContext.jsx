import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const searchAnimeUrl = search.replace(/ /g, "-").toLowerCase();
  const [searchAnime, setSearchAnime] = useState([]);

  useEffect(()  => { 
    axios 
      .get(`https://gogoanime.consumet.org/search?keyw=${searchAnimeUrl}`)
      .then((res) => {
        setSearchAnime(res.data);
        setSearchAnime(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchAnimeUrl]);

  

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchAnime,
        setSearchAnime,
        searchAnimeUrl,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
