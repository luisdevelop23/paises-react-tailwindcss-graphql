import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import SeachCountries from "../components/SeachCountries";
import ContainerCards from "../components/ContainerCards";
import CountryDetail from "../components/CountryDetail";
import { CountryContext } from "../context/CountryContext";

const Home = () => {
  const { country } = useContext(CountryContext);

  return (
    <div className="relative w-full md:w-8/12 xl:w-9/12 bg-fr flex flex-col items-center pt-8 lg:px-4 xl:px-16 h-screen ">
      <SeachCountries />
      <ContainerCards />
      {country ? <CountryDetail /> : null}
    </div>
  );
};

export default Home;
