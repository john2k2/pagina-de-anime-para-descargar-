import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import AnimeProvider from "@/context/AnimeContext";
import SearchContext from "@/context/SearchContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchContext>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </SearchContext>
  </BrowserRouter>
);
