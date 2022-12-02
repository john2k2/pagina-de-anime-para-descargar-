import "./App.css";

//componentes
import MainHeader from "@/components/MainHeader";
import HeroCaps from "@/components/HeroCaps";
import MostrarAnime from "@/components/MostrarAnime";
import { Route, Routes } from "react-router-dom";

//pages
import PerfilPages from "./pages/PerfilPages";
import AnimePages from "@/components/AnimePages";
import PaginaEncontrar from "./pages/PaginaEncontrar";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<HeroCaps />} />
        <Route path="/anime/:id" element={<MostrarAnime />} />
        <Route path="/perfil" element={<PerfilPages />} />
        <Route path="/anime" element={<AnimePages />} />
        <Route path="/busqueda" element={<PaginaEncontrar />} />
      </Routes>
    </div>
  );
}

export default App;
