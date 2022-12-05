import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AnimeContext } from "@/context/AnimeContext";

const animeCard = () => {
  const { personajes } = useContext(AnimeContext);

  return (
    <div className="flex flex-wrap  md:justify-center md:gap-8 md:py-8 ">
      {personajes.map((personaje) => (
        <div
          key={personaje.animeId}
          className="m-4 flex w-full items-center  justify-start  overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-[1.1] md:m-4 md:h-[450px] md:w-[250px] md:flex-col "
        >
          <NavLink to={`/anime/${personaje.animeId}`}>
            <img
              className="h-auto w-[20rem] bg-slate-500  object-cover md:h-[350px] md:w-[250px] "
              src={personaje.animeImg}
              alt={personaje.animeTitle}
            />
          </NavLink>
          <h3 className="w-[20rem] p-4   text-center md:w-[260px] text-white ">
            {personaje.animeTitle}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default animeCard;
