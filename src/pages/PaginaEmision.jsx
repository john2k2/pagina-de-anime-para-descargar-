import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

const PaginaEmision = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://monoschinos2.com");
      const $ = cheerio.load(result.data);

      // Aquí puedes usar cheerio para analizar y manipular el HTML de la página web
      // y extraer los datos que necesitas
      const data = $(".animes").html(); // <--- Aquí extraigo el HTML de la clase animeimgdiv

      const img = $(".animeimgdiv").find("img").attr("data-src"); // <--- Aquí extraigo el src de la imagen

      const title = $(".animeimgdiv").find("img").attr("alt"); // <--- Aquí extraigo el alt de la imagen

      const status = $(".animeimgdiv").find("img").attr("data-status"); // <--- Aquí extraigo el status de la imagen

      const cap = $(
        "body > section:nth-child(4) > div > div > div.row.row-cols-5 > div:nth-child(2) > a > div > div > div > div > p"
      ).text(); // <--- Aquí extraigo el texto de la clase overdiv

      const button = $(
        "body > section:nth-child(4) > div > div > div.row.row-cols-5 > div:nth-child(2) > a > div > div > div > div > button"
      ).text(); // <--- Aquí extraigo el texto del botón "Ver más

      const nombreAnime = $(
        "body > section:nth-child(4) > div > div > div.row.row-cols-5 > div:nth-child(2) > a > div > h2"
      ).text(); // <--- Aquí extraigo el texto del botón title

      setData([...data, { img, title, status, cap, button, nombreAnime }]);

      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((card) => (
        <div
          className="relative mx-auto max-w-[200px] transition-all duration-300 ease-in-out hover:scale-[1.05]"
          key={card.id}
        >
          <img
            className=" w-full rounded-md  object-cover shadow-md "
            src={card.img}
            alt={card.title}
          />
          <p className=" absolute top-4 right-4 text-white">{card.cap}</p>
          <h3 className="text-white">{card.nombreAnime}</h3>
        </div>
      ))}
    </div>
  );
};

export default PaginaEmision;
