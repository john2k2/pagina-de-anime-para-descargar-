import imgLogo from "@/assets/asset 3.png";
import BusquedaAnime from "@/components/BusquedaAnime";
import { useState } from "react";
import { Link } from "react-router-dom";

import imgProfile from "@/assets/pochita.jpeg";
import NavBarHeader from "@/components/NavBarHeader";

const MainHeader = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <header className=" mx-auto flex h-[110px] w-[full]  items-center bg-light-blue px-4">
        <div className=" w-full md:mx-auto  md:flex md:items-center ">
          <div className="flex items-center justify-start py-8 md:p-8 ">
            <Link to="/">
              <img
                className="w-30 md:h-auto md:w-[200px] "
                src={imgLogo}
                alt="logo"
              />
            </Link>
          </div>
          <div className={`${show ? "flex" : "hidden"}  md:flex  `}>
            <NavBarHeader />
          </div>
          <div className=" hidden w-[50%] items-center md:flex ">
            <BusquedaAnime />
          </div>
        </div>
        <button
          onClick={handleShow}
          className="rounded-lg bg-slate-500 px-4 py-2 capitalize text-white hover:bg-slate-700 md:hidden"
        >
          menu
        </button>
        <div></div>
        <div className="hidden h-[100%] w-[30%] items-center justify-center gap-8 md:flex  ">
          <Link to="/login">
            <button className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-slate-700">
              Login
            </button>
          </Link>
          <Link to="/registro">
            <button className="rounded-lg bg-slate-500 px-4 py-2 text-white hover:bg-slate-700">
              Register
            </button>
          </Link>
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
