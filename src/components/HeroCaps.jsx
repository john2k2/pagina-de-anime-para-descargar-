import { useContext } from "react";
import { ImageContext } from "@/context/ImageContext";
import { NavLink } from "react-router-dom";
import Paginas from "@/components/Paginas";

const HeroCaps = () => {
  const { personajes } = useContext(ImageContext);

  

  return (
    <section className="container mx-auto w-[90%] ">
      <div className="flex flex-wrap justify-center gap-8 py-8 ">
        {personajes.map((personaje) => (
          <div key={personaje.animeId}>
            <NavLink to={`/anime/${personaje.animeId}`}>
              <img
                className=" relative h-[350px] w-[250px] bg-slate-500 object-cover transition-all hover:scale-[1.1]  "
                src={personaje.animeImg}
                alt={personaje.animeTitle}
              />
            </NavLink>
            <h3 className="w-[250px] p-4 text-center ">
              {personaje.animeTitle}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Paginas />
      </div>
    </section>
  );
};

export default HeroCaps;
