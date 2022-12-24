import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerios from "cheerio";

const HeroCaps = () => {
  const [recientes, setRecientes] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const cambioResolucion = () => {
    if (width <= 767) {
      setIsMobile(true);
      setStart(0);
      setEnd(1);
    } else if (width < 1024) {
      setIsMobile(false);
      setStart(0);
      setEnd(2);
    } else if (width < 1440) {
      setIsMobile(false);
      setStart(0);
      setEnd(4);
    } else {
      setIsMobile(false);
      setStart(0);
      setEnd(5);
    }
  };

  useEffect(() => {
    cambioResolucion();
  }, [width]);

  const siguiente = () => {
    if (end < recientes.length) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  const anterior = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };

  return (
    <div>
      <div>
        <h1
          className="
         bg-gradient-to-r from-blue-500 to-blue-700 py-4 text-center  text-4xl font-bold text-white "
        >
          Ultimos Animes
        </h1>
      </div>
      <div className="mx-auto flex h-52 w-[95%] items-center justify-center ">
        <button
          className="rounded-lg bg-slate-300 py-2 px-2 text-4xl font-bold text-black  "
          onClick={() => {
            anterior();
          }}
        >
          >
        </button>
        <div className=" flex gap-4  ">
          {recientes.slice(start, end).map((reciente) => (
            <div className="relative mx-4" key={reciente.title}>
              <img
                className="h-auto w-full rounded-lg object-contain shadow-lg md:w-72"
                src={reciente.img}
                alt={reciente.title}
              />
              <span
                className=" absolute
                bottom-0 left-0 h-full w-full bg-gradient-to-b  from-transparent to-black/20 rounded-md
                "
              ></span>
              <div className=" absolute bottom-0  flex w-full flex-col items-center justify-center text-center ">
                <h1 className="max-text-xl w-[90%] text-center font-bold text-primary-orange  ">
                  {reciente.nombreAnime}
                </h1>
                <h1 className="text-center text-lg font-bold text-white">
                  {reciente.button}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <button
          className="rounded-lg bg-slate-300 py-2 px-2 text-4xl font-bold text-black  "
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
