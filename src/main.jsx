import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ImageProvider from "@/context/ImageContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ImageProvider>
      <App />
    </ImageProvider>
  </BrowserRouter>
);