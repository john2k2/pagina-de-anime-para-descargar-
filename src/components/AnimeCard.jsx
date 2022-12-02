import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AnimeContext } from "@/context/AnimeContext";

const animeCard = () => {
  const { personajes } = useContext(AnimeContext);

  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {personajes.map((personaje) => (
        <div
          key={personaje.animeId}
          className="flex flex-col items-center justify-center"
        >
          <NavLink to={`/anime/${personaje.animeId}`}>
            <img
              className="h-[350px] w-[250px] bg-slate-500 object-cover transition-all hover:scale-[1.1]  "
              src={personaje.animeImg}
              alt={personaje.animeTitle}
            />
          </NavLink>
          <h3 className="w-[250px] p-4 text-center ">{personaje.animeTitle}</h3>
        </div>
      ))}
    </div>
  );
};

export default animeCard;
