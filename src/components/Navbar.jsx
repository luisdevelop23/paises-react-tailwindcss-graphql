import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  // console.log("url", path);

  let actorDesc = (l) => {
    if (l === path) {
      return "font-bold text-zinc-600 py-2 text-left pl-7 rounded bg-zinc-300 w-full";
    }
    return "font-bold text-zinc-300 py-2 text-left pl-7 rounded w-full";
  };

  return (
    <>
      <div
        className={`w-6/12 flex-col items-center bg-zinc-600 px-4 pt-8 md:w-4/12 md:px-8 lg:w-4/12 xl:w-3/12 ${
          showNav ? "absolute" : "hidden"
        } absolute z-20 h-screen transition-all md:relative md:flex`}
      >
        <div className="w-full rounded bg-zinc-300 py-5 font-bold">
          <h1 className="text-center text-xl font-bold text-zinc-600 md:text-4xl">
            Logo
          </h1>
        </div>
        <div className="mt-5 flex w-full flex-col gap-y-4 text-lg md:text-2xl">
          <Link
            onClick={() => setShowNav(!showNav)}
            to="/"
            className={actorDesc("/")}
          >
            Home
          </Link>
          <Link
            onClick={() => setShowNav(!showNav)}
            to="/vista1"
            className={actorDesc("/vista1")}
          >
            Vista 1
          </Link>
          <Link
            onClick={() => setShowNav(!showNav)}
            to="/vista2"
            className={actorDesc("/vista2")}
          >
            Vista 2
          </Link>
        </div>
      </div>

      <button
        onClick={() => setShowNav(!showNav)}
        className="absolute right-2 top-3 z-40 md:hidden"
      >
        {showNav ? (
          <Icon className="text-[30px]" icon="line-md:close" />
        ) : (
          <Icon className="text-[30px]" icon="line-md:menu" />
        )}
      </button>
    </>
  );
};

export default Navbar;
