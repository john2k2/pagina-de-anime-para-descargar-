import Paginas from "@/components/Paginas";
import AnimeCard from "@/components/AnimeCard";
import { useContext } from "react";
import { AnimeContext } from "@/context/AnimeContext";

const HeroCaps = () => {
  const { paginas } = useContext(AnimeContext);

  return (
    <section className="container mx-auto w-[100vw] ">
      <div className="flex justify-center my-4">
        <Paginas />
      </div>
      <div className="flex justify-center my-4">
        {paginas == 1 ? (
          <h1 className="text-4xl font-bold text-white">Top Animes</h1>
        ) : (
          <h1 className="text-4xl font-bold text-white">Pagina {paginas}</h1>
        )}
      </div>
      <div>
        <AnimeCard />
      </div>
      <div className="flex justify-center mt-8">
        <Paginas />
      </div>
    </section>
  );
};

export default HeroCaps;
