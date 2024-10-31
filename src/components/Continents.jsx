import europaImg from "../assets/img/europa.png";
import america from "../assets/img/america.png";
import samerica from "../assets/img/samerica.png";
import asia from "../assets/img/asia.png";
import oceania from "../assets/img/oceania.png";
import africa from "../assets/img/africa.png";
import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
const Continents = () => {
  const { continent, setContinent } = useContext(CountryContext);
  // console.log(continent);

  const handleContinent = (e) => {
    if (continent.includes(e)) {
      setContinent(continent.filter((c) => c !== e));
    } else {
      setContinent([...continent, e]);
    }
  };

  const selectStyle = (e) => {
    return continent.includes(e)
      ? "mx-auto rounded-[30px]  sci"
      : "mx-auto rounded-[30px]  nci";
  };
  return (
    <div className="bg-zinc-100 mt-6 md:w-10/12 lg:w-8/12 rounded-[50px] px-8 pb-6 absolute z-10 ">
      <div className=" flex justify-between items-center py-4">
        <h2 className="font-bold text-zinc-400">Filtrar por Continentes</h2>
        <button
          onClick={() => setContinent([])}
          className="text-sky-500 font-semibold text-[18px]"
        >
          Limpiar
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <button
          onClick={() => handleContinent("EU")}
          className="flex flex-col  justify-center"
        >
          <img className={selectStyle("EU")} src={europaImg} alt="" />
          <h2 className="text-zinc-400 font-semibold pl-3">Europa</h2>
        </button>
        <button
          onClick={() => handleContinent("NA")}
          className="flex flex-col  justify-center"
        >
          <img className={selectStyle("NA")} src={america} alt="" />
          <h2 className="text-zinc-400 font-semibold pl-3">Ameríca</h2>
        </button>
        <button
          onClick={() => handleContinent("AS")}
          className="flex flex-col  justify-center"
        >
          <img className={selectStyle("AS")} src={asia} alt="" />
          <h2 className="text-zinc-400 font-semibold pl-3">Asia</h2>
        </button>
        <button
          onClick={() => handleContinent("OC")}
          className="flex flex-col  justify-center"
        >
          <img className={selectStyle("OC")} src={oceania} alt="" />
          <h2 className="text-zinc-400 font-semibold pl-3">Oceania</h2>
        </button>
        <button
          onClick={() => handleContinent("AF")}
          className="flex flex-col  justify-center"
        >
          <img className={selectStyle("AF")} src={africa} alt="" />
          <h2 className="text-zinc-400 font-semibold pl-3">Africa</h2>
        </button>
        <button
          onClick={() => handleContinent("SA")}
          className="flex flex-col  justify-center"
        >
          <img className={selectStyle("SA")} src={samerica} alt="" />
          <h2 className="text-zinc-400 font-semibold pl-3">Africa</h2>
        </button>
      </div>
    </div>
  );
};

export default Continents;
