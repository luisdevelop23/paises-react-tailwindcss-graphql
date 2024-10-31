import { useQuery } from "@apollo/client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useContext, useEffect, useState } from "react";
import { GET_COUNTRY_DETAILS } from "../graphql/queries";
import { fetchCountryImages } from "../server/fetchCountryImages";
import { flagNotFound } from "../utils/flagNotFound";
import { CountryContext } from "../context/CountryContext";

const CountryDetail = () => {
  const { country, setCountry } = useContext(CountryContext);
  const [countryImages, setCountryImages] = useState([]);
  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    variables: {
      name: country,
    },
  });

  useEffect(() => {
    fetchImages();
  });
  const fetchImages = async () => {
    if (data && data.countries) {
      try {
        const imagesObject = await fetchCountryImages(data.countries);
        setCountryImages(imagesObject);
      } catch (error) {
        return ""
      }
    }
  };

  const { code, name, continent, capital, languages, currencies, states } =
    data?.countries[0] || {};

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div></div>;
  }

  return (
    <div className="absolute lg:w-7/12 xl:w-4/12   right-0 bottom-0  pl-10 ">
      <button
        onClick={() => setCountry(null)}
        className="absolute top-2 text-3xl right-2"
      >
        <Icon icon="carbon:close"></Icon>
      </button>
      <div className="flex flex-col  bg-zinc-100 px-10 py-6">
        <img
          className="w-full h-[140px] md:h-[230px] object-cover mx-auto pb-4  md:rounded-[50px] "
          src={countryImages[code]}
          alt={name}
        />
        <div className=" flex">
          <Icon
            icon={`${flagNotFound(name)}`}
            className="text-[60px] text-sky-500"
          />
          <div className="flex flex-col pl-4">
            <h2 className="text-mc md:text-lg lg:text-xl  font-bold text-sky-500 ">{name}</h2>
            <p className="text-mc md:text-lg lg:text-xl  font-semibold text-zinc-400">
              {continent.name}
            </p>
          </div>
        </div>
        <div className="flex py-2">
          <h2 className="text-mc md:text-lg lg:text-xl  font-bold text-sky-500">Capital:</h2>
          <p className="text-mc md:text-lg lg:text-xl  font-semibold text-zinc-400 pl-4">{capital}</p>
        </div>
        <div className="flex py-2">
          <h2 className="text-mc md:text-lg lg:text-xl  font-bold text-sky-500">Languaje:</h2>
          <p className="text-mc md:text-lg lg:text-xl  font-semibold text-zinc-400 pl-4">
            {languages[0].name}
          </p>
        </div>
        <div className="flex py-2">
          <h2 className="text-mc md:text-lg lg:text-xl  font-bold text-sky-500">Population:</h2>
          <p className="text-mc md:text-lg lg:text-xl  font-semibold text-zinc-400 pl-4"></p>
        </div>
        <div className="flex py-2">
          <h2 className="text-mc md:text-lg lg:text-xl  font-bold text-sky-500">Currency:</h2>
          <p className="text-mc md:text-lg lg:text-xl  font-semibold text-zinc-400 pl-4">
            {currencies[0]}
          </p>
        </div>
        <h2 className="text-mc md:text-lg lg:text-xl  font-bold text-sky-500">Region</h2>
        <div className="flex p-2">
          <div className="flex flex-col p-3 gap-x-2 border-2 overflow-y-auto h-[16vh] section border-zinc-300 rounded-[10px] slr w-full">
            {states.map((r, i) => (
              <p className="text-md font-semibold text-zinc-400" key={i}>
                {r.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
