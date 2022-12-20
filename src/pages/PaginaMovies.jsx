import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

const PaginaMovies = () => {
  const [data, setData] = useState([]);

  const url = "https://monoschinos2.com";

  useEffect(() => {
    const getdata = async () => {
      const result = await axios.get(url);
      const $ = cheerio.load(result.data);

      $(".animes").each((i, el) => {
        const card = $(el).html();
        const alt = $(el).find("img").attr("alt");
        const cap = $(el).find("p").text();
        const status = $(el).find("button").text();
        const img = $(el).find("img").attr("data-src");
        const img2 = $(el).find("img").attr("src");
        const title = $(el).find(".animetitles").text();

        setData((data) => [
          ...data,
          { card, alt, cap, status, title, img, img2 },
        ]);
      });
    };
    getdata();
  }, []);

  console.log(data);

  return (
    <div className="mx-auto w-[95vw]">
      <div>
        <h1 className="py-4 text-center text-4xl font-bold text-white">
          Ultimos Animes
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-8 ">
        {data.map((card) => (
          <div
            key={card.alt}
            className="group relative   h-[200px] max-w-[45%]  pb-12 transition  duration-500 ease-in-out hover:scale-105
             md:h-[300px] md:w-[400px] md:pb-0 "
          >
            <img
              className="  h-[90%] w-full rounded-md   object-cover shadow-md "
              src={card.img}
              alt={card.alt}
            />
            <div>
              <p className="absolute top-3 right-3 rounded-md bg-black/50 py-[4px] px-[13px] text-white md:text-xl  ">
                {card.cap}
              </p>
              <button className="absolute bottom-24 left-3 text-xl font-bold text-white md:bottom-16 ">
                {card.status}
              </button>
              <h3 className=" flex items-center justify-center pt-4 text-center text-white group-hover:text-primary-orange ">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PaginaMovies;
