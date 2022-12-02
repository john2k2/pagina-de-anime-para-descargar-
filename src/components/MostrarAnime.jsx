import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MostrarAnime = () => {
  const [anime, setAnime] = useState([]);
  const { id } = useParams();
  const ids = id;

  useEffect(() => {
    const getAnime = async () => {
      const url = `https://gogoanime.consumet.org/anime-details/${id}`;
      const { data } = await axios.get(url);

      setAnime(data);
    };
    getAnime();
  }, [id]);

  return (
    <div className="flex flex-col">
      <div className="flex h-[50vh] w-[100vw] items-center justify-center bg-slate-100 ">
        <div className="flex w-[30vw] justify-center">
          <img
            className="h-[350px] w-[250px] bg-slate-500 object-cover transition-all hover:scale-[1.1]  "
            src={anime.animeImg}
            alt={anime.animeTitle}
          />
        </div>
        <div className="flex w-[50vw] flex-col ">
          <h3 className="w-[550px] p-4 text-left ">
            {anime.animeTitle}
            {anime.status}
            {anime.synopsis}
          </h3>
          <div className="text-center">
            {anime.genres?.map((genre) => (
              <a
                key={anime.animeId}
                className="px-2 text-sm text-gray-500"
                href={`https://gogoanime.consumet.org/search?genre=${genre}`}
              >
                {genre}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[35vh] bg-slate-400 ">
        <h1 className="text-white">Episodios</h1>
        <div className="flex w-[100%] flex-wrap bg-white ">
          {anime.episodesList?.map((episode) => (
            <div
              key={episode.episodeTitle}
              className="flex flex-col items-center justify-center"
            >
              <a className="text-black" href={episode.episodeUrl}>
                {episode.episodeTitle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostrarAnime;
