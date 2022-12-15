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
      <header className=" mx-auto flex h-[110px]   items-center bg-light-blue px-4">
        <div className="mx-auto flex w-[100%] justify-between  md:mx-auto md:flex md:w-[80%] md:items-center ">
          <div className="flex items-center ">
            <Link to="/">
              <img
                className="w-30 md:h-auto md:w-[200px] "
                src={imgLogo}
                alt="logo"
              />
            </Link>
          </div>
          <div
            className={`${
              show ? "flex" : "hidden"
            }   min-[1023px]:hidden lg:flex   `}
          >
            <NavBarHeader />
          </div>
          <div className=" hidden items-center md:hidden  lg:flex lg:w-[100%]  ">
            <BusquedaAnime />
          </div>
          <button
            onClick={handleShow}
            className="rounded-lg bg-slate-500 px-4 py-2 capitalize text-white hover:bg-slate-700 md:flex lg:hidden "
          >
            menu
          </button>
        <div className="hidden h-[100%] w-[30%] items-center justify-center gap-8  md:hidden lg:flex   ">
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
        </div>
      </header>
    </>
  );
};

export default MainHeader;
