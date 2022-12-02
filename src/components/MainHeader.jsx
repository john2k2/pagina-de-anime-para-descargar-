import imgLogo from "@/assets/asset 3.png";
import BusquedaAnime from "@/components/BusquedaAnime";
import { NavLink, Link } from "react-router-dom";

import imgProfile from "@/assets/pochita.jpeg";

const MainHeader = () => {
  return (
    <>
      <header className="flex  h-[120px] w-[full] items-center justify-between bg-light-blue px-4">
        <div className="mr-auto h-[100%] w-[50%] items-center bg-light-blue md:mx-auto md:flex md:h-[100%] md:w-[95%]  ">
          <div className="flex py-8 md:p-8 ">
            <Link to="/">
              <img className="h-14 " src={imgLogo} alt="logo" />
            </Link>
          </div>
          <div className="">
            <div className="hidden  md:flex md:gap-8">
              <Link to="/anime">
                <button className="rounded-lg bg-slate-500 px-4 py-2 text-white">
                  Anime
                </button>
              </Link>
              <Link>
                <button className="rounded-lg bg-slate-500 px-4 py-2 text-white">
                  Emision
                </button>
              </Link>
              <Link>
                <button className="rounded-lg bg-slate-500 px-4 py-2 text-white">
                  Movies
                </button>
              </Link>
              <Link>
                <button className="rounded-lg bg-slate-500 px-4 py-2 text-white">
                  Finalizado
                </button>
              </Link>
            </div>
          </div>
          <div className=" hidden w-[50%] items-center justify-center md:flex ">
            <BusquedaAnime />
          </div>
        </div>
        <button className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-slate-700 md:hidden">
          menu
        </button>
        <div className="hidden h-[100%] w-[30%] items-center justify-center gap-8 md:flex  ">
          <button className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-slate-700">
            Login
          </button>
          <button className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-slate-700">
            Register
          </button>
          <div>
            <button>
              <Link to="/profile">
                <img
                  src={imgProfile}
                  alt="img"
                  className="hidden h-20 w-20 rounded-full md:flex"
                />
              </Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
