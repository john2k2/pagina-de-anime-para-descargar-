import Paginas from "@/components/Paginas";
import AnimeCard from "@/components/AnimeCard";

const HeroCaps = () => {
  return (
    <section className="container mx-auto w-[90%] ">
      <div>
        <AnimeCard />
      </div>
      <div className="flex justify-center">
        <Paginas />
      </div>
    </section>
  );
};

export default HeroCaps;
