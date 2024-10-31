import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { flagNotFound } from "../utils/flagNotFound";
import { CountryContext } from "../context/CountryContext";

const Card = ({ key, country, img }) => {
  const { name, continent } = country;
  const { setCountry, country: sp } = useContext(CountryContext);

  const handleClick = () => {
    setCountry(null);
    setCountry(country.name);
  };

  return (
    <div
      onClick={handleClick}
      key={key}
      className={`flex-col shadow-lg shadow-zinc-400 ${
        sp === name ? "bg-sky-500" : "bg-zinc-100"
      }  rounded-[40px] md:rounded-[50px] mx-2 xl:mx-5`}
    >
      <div className="sm:h-[100px] lg:h-[150px] ">
        <img
          src={img}
          className="w-full h-[100px] lg:h-[150px] object-cover rounded-t-[40px] md:rounded-t-[50px]"
          alt=""
        />
      </div>
      <div className="flex px-4 lg:px-7 ">
        <div className="w-4/12 md:w-3/12  flex items-start justify-center">
          <Icon icon={`${flagNotFound(name)}`} className="text-[60px]" />
        </div>
        <div className="flex w-full flex-col  pl-2">
          <h1
            className={` ${
              sp === name ? "text-zinc-100 " : "text-sky-500"
            }  font-bold text-md lg:text-xl `}
          >
            {name}
          </h1>
          <p className="text-zinc-400 text-md lg:text-xl font-bold">
            {continent.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
