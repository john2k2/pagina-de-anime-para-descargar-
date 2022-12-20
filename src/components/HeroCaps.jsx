import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerios from "cheerio";

const HeroCaps = () => {
  const [recientes, setRecientes] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  useEffect(() => {
    const getRecientes = async () => {
      const url = "https://monoschinos2.com";
      const { data } = await axios.get(url);
      const $ = cheerios.load(data);

      $(".animes").each((i, el) => {
        const img = $(el).find("img").attr("data-src");
        const title = $(el).find("img").attr("alt");
        const status = $(el).find("img").attr("data-status");
        const cap = $(el).find("p").text();
        const button = $(el).find("button").text();
        const nombreAnime = $(el).find("h2").text();

        setRecientes((recientes) => [
          ...recientes,
          { img, title, status, cap, button, nombreAnime },
        ]);
      });
    };

    getRecientes();
  }, []);

  const siguiente = () => {
    if (end < 10) {
      setStart(start + 1);
      setEnd(end + 1);
    } else if (end === 10) {
      setStart(0);
      setEnd(4);
    }
  };
  const anterior = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    } else if (start === 0) {
      setStart(6);
      setEnd(10);
    }
  };

  return (
    <div>
      <div>
        <h1
          className="
        mb-8 bg-gradient-to-r from-blue-500 to-blue-700 py-4 text-center  text-4xl font-bold text-white "
        >
          Ultimos Animes
        </h1>
      </div>
      <div className=" mx-auto flex items-center justify-center md:w-[70%] lg:w-[75%]  ">
        <button
          className="mx-4 rounded-l-md bg-slate-500 px-4 py-2
          text-white hover:bg-slate-700"
          onClick={() => {
            anterior();
          }}
        >
          >
        </button>
        <div className=" flex w-full justify-center ">
          {recientes.slice(start, end).map((anime) => (
            <div
              key={anime.title}
              className="hover:scale-104 transition-duration-500 transition-timing-ease-in-out group  relative  h-[100%] w-[400px]
              cursor-pointer px-4 pb-12  hover:z-50 
              "
            >
              <img
                src={anime.img}
                alt={anime.title}
                className="h-[200px]  w-[400px] transform rounded-md object-cover
                  shadow-md transition
                  duration-500 ease-in-out  group-hover:scale-105 
                  "
              />
              <span
                className="
              absolute inset-0 mx-auto h-[207px] w-[97%] items-end justify-center  overflow-hidden bg-gradient-to-t from-black  to-transparent opacity-0   transition duration-500 ease-in-out group-hover:opacity-90
              "
              ></span>

              <div className="absolute inset-0 mx-auto flex h-[75%] w-[85%] items-end justify-center">
                <div className="text-center">
                  <h2 className="min-text-5xl font-semibold text-white group-hover:text-primary-orange ">
                    {anime.nombreAnime}
                  </h2>
                  <p className=" text-sm font-medium text-white group-hover:text-primary-orange">
                    {anime.button}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mx-4 rounded-r-md bg-slate-500 px-4 py-2
          text-white  duration-700 ease-in-out hover:bg-slate-700  
        "
          onClick={() => {
            siguiente();
          }}
        >
          >
        </button>
      </div>
    </div>
  );
};

export default HeroCaps;
