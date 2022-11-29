import { ImageContext } from "@/context/ImageContext";
import { useContext } from "react";

const MostrarAnime = () => {
  const { anime } = useContext(ImageContext);

  console.log(anime);

  return (
    <>
      <div className="mx-auto flex h-[50vh] w-[90vw]  items-center bg-gray-400 p-20 ">
        <div className="w-[40%] ">
          <img
            className=" w-[350px]border-1 aspect-auto h-[550px] rounded-lg object-cover "
            src={anime.animeImg}
            alt={anime.animeTitle}
          />
        </div>
        <div className="flex w-[50%] flex-col gap-8">
          <h1 className="text-4xl font-bold ">Titulo: {anime.animeTitle}</h1>
          <h2>Descripcion: {anime.synopsis}</h2>
          <h3>Generos: {anime.genres}</h3>
        </div>
      </div>
    </>
  );
};

export default MostrarAnime;
