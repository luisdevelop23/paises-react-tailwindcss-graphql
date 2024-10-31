import { useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { GET_COUNTRIES } from "../graphql/queries";
import { fetchCountryImages } from "../server/fetchCountryImages";

export const CountryContext = createContext([]);

export const CountreProvider = ({ children }) => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [countries, setCountries] = useState([]);
  const [countryImages, setCountryImages] = useState();
  const [country, setCountry] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [continent, setContinent] = useState([]);
  const [ld, setLd] = useState(true);
  const [showDetail, setShowDetail] = useState(false);

  //? Función para obtener imágenes de los países
  const fetchImages = async () => {
    if (data && data.countries) {
      try {
        const imagesObject = await fetchCountryImages(data.countries);
        setCountryImages(imagesObject);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setLd(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [data]);

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
        searchValue,
        setSearchValue,
        continent,
        setContinent,
        countries,
        setCountries,
        data,
        loading,
        error,
        countryImages,
        setCountryImages,
        ld,
        showDetail,
        setShowDetail,
        fetchImages, // Asegúrate de incluir fetchImages aquí
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
