import Image from "next/image";
import React from "react";
import BestOffers from "./BestOffers";
import Cover from "./Cover";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Location from "./Location";
import SecondHero from "./SecondHero";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Cover />
      </div>
      <div
        className="flex flex-col 
      "
      >
        <Location />
        <SecondHero />
        <BestOffers />
        <Gallery />
      </div>
    </>
  );
};

export default Landing;
