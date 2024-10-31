import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../context/CountryContext";
import Card from "./Card";

const ContainerCards = () => {
  const {
    searchValue,
    countryImages,
    loading,
    error,
    data,
    continent,
  } = useContext(CountryContext);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (data && data.countries) {
      let countriesToFilter = data.countries;

      if (continent && continent.length > 0) {
        countriesToFilter = countriesToFilter.filter((c) =>
          continent.includes(c.continent.code)
        );
      }

      if (searchValue) {
        countriesToFilter = countriesToFilter.filter((c) =>
          c.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }

      setFilteredCountries(countriesToFilter);
    }
  }, [data, searchValue, continent]);

  if ( loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <div className="mt-10 relative gap-y-4 px-3 lg:gap-4 xl:px-8 grid pb-8 grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-full overflow-y-auto scroll-container">
      {filteredCountries.map((country) => (
        <Card
          key={country.code}
          country={country}
        />
      ))}
    </div>
  );
};

export default ContainerCards;
