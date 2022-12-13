import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

const PaginaMovies = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);

  const url = "https://monoschinos2.com";

  useEffect(() => {
    const getdata = async () => {
      const result = await axios.get(url);
      const $ = cheerio.load(result.data);

      $(".animeimgdiv").each((i, el) => {
        const card = $(el).html();
        const alt = $(el).find("img").attr("alt");
        const cap = $(el).find("p").text();
        const button = $(el).find("button").text();
        const img = $(el).find("img").attr("data-src");
        const status = $(el).find("img").attr("data-status");
        const title = $(el).find(".animetitles").text();

        setData((data) => [
          ...data,
          { card, alt, cap, button, title, img, status },
        ]);
      });
    };
    getdata();
  }, []);

  return (
    <div>
      <div className="mx-auto w-[80vw] ">
        <div className="flex flex-wrap gap-8">
          {data.map((card) => (
            <div
              className="relative mx-auto max-w-[200px] transition-all duration-300 ease-in-out hover:scale-[1.05] "
              key={card.id}
            >
              <img
                className=" w-full rounded-md  object-cover shadow-md "
                src={card.img}
                alt={card.alt}
              />
              <h3 className="w-full text-center text-white">{card.title}</h3>
              <p className=" absolute top-4 right-4 text-white">{card.cap}</p>
              <button className="absolute bottom-[4.5rem] left-4 text-white ">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PaginaMovies;
