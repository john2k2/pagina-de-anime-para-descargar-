import "./App.css";

//componentes
import MainHeader from "@/components/MainHeader";
import HeroCaps from "@/components/HeroCaps";
import MostrarAnime from "@/components/MostrarAnime";
import { Routes, Route } from "react-router-dom";

//pages
import PerfilPages from "./pages/PerfilPages";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <div>
        <Routes>
          <Route path="/" element={<HeroCaps />} />
          <Route path="/anime/:id" element={<MostrarAnime />} />
          <Route path="Perfil" element={<PerfilPages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
