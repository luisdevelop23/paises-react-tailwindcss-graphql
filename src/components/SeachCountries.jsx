import { useContext, useState } from "react"; // Asegúrate de importar useEffect
import { useNavigate } from "react-router-dom";
import icon from "../assets/img/searchIcon.png";
import { CountryContext } from "../context/CountryContext";
import Continents from "./Continents";

const SeachCountries = () => {
  const { searchValue, setSearchValue, continent } = useContext(CountryContext);
  const [showContinents, setShowContinents] = useState(false);
  const navige = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchValue === "") return;
  //   navige(`/country/${searchValue}`);
  // };

  return (
    <div className="w-10/12 relative">
      <div className="w-full bg-zinc-50 py-2 rounded-full shadow-lg shadow-zinc-500 flex justify-between items-center pr-5 pl-8">
        <div className="w-full pr-10">
          <h2 className="text-zinc-500 text-xl font-bold">País</h2>
          <div className="flex">
            <input
              type="text"
              onChange={handleSearch}
              onClick={() => setShowContinents(!showContinents)}
              value={searchValue}
              placeholder="Escribe el país que desea buscar"
              className="w-full md:w-6/12 outline-none focus:border-b border-zinc-500"
            />
            
          </div>
        </div>
        <button
          // onClick={handleSubmit}
          className="bg-sky-500 text-zinc-50 px-6 gap-x-5 justify-center py-2 rounded-full flex items-center"
        >
          <img src={icon} className="size-[20px] md:w-6 md:h-6" alt="" />
          <span className="text-md hidden md:block md:text-xl">Buscar</span>
        </button>
      </div>

      {showContinents && <Continents />}
    </div>
  );
};

export default SeachCountries;
