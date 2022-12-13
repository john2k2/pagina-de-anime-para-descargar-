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
      const data = $(
        "body > section:nth-child(4) > div > div > div.row.row-cols-5"
      ).html(); // <--- Aquí extraigo el HTML de la clase animeimgdiv

      const img = $(".animeimgdiv").find("img").attr("data-src"); // <--- Aquí extraigo el src de la imagen

      const title = $(".animeimgdiv").find("img").attr("alt"); // <--- Aquí extraigo el alt de la imagen

      const status = $(".animeimgdiv").find("img").attr("data-status"); // <--- Aquí extraigo el status de la imagen

      const cap = $(
        "body > section:nth-child(4) > div > div > div.row.row-cols-5 > div:nth-child(2) > a > div > div > div > div > p"
      ).text(); // <--- Aquí extraigo el texto de la clase overdiv

      const button = $(
        "body > section:nth-child(4) > div > div > div.row.row-cols-5 > div:nth-child(2) > a > div > div > div > div > button"
      ).text(); // <--- Aquí extraigo el texto del botón "Ver más

      setData({ data, img, title, cap, status, button });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-white">Encontrar</h1>
      <h2 className="text-white">{data.title}</h2>
      <div>
        <div>
          <img src={data.img} alt={data.title} />
          <h3 className="text-white">{data.title}</h3>
          <p className="text-white">{data.cap}</p>
          <button className="text-white ">{data.button}</button>
        </div>
      </div>
    </div>
  );
};
export default PaginaEmision;
