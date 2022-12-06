import "./App.css";

//componentes
import MainHeader from "@/components/MainHeader";
import HeroCaps from "@/components/HeroCaps";
import MostrarAnime from "@/components/MostrarAnime";
import { Route, Routes } from "react-router-dom";

//pages
import PerfilPages from "./pages/PerfilPages";
import AnimePages from "@/components/AnimePages";
import PaginaEmision from "./pages/PaginaEmision";
import PaginaFinish from "./pages/PaginaFinish";
import PaginaMovies from "./pages/PaginaMovies";
import PaginaProfile from "./pages/PaginaProfile";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaRegistro from "./pages/PaginaRegistro";
import PaginaEncontrar from "./pages/PaginaEncontrar";

function App() {
  return (
    <div className="App bg-dark-blue">
      <MainHeader />
      <Routes>
        <Route path="/" element={<HeroCaps />} />
        <Route path="/anime/:id" element={<MostrarAnime />} />
        <Route path="/perfil" element={<PerfilPages />} />
        <Route path="/anime" element={<AnimePages />} />
        <Route path="/emision" element={<PaginaEmision />} />
        <Route path="/finalizado" element={<PaginaFinish />} />
        <Route path="/movies" element={<PaginaMovies />} />
        <Route path="/profile" element={<PaginaProfile />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/registro" element={<PaginaRegistro />} />
        <Route path="/encontrar/:search" element={<PaginaEncontrar />} />
      </Routes>
    </div>
  );
}

export default App;
