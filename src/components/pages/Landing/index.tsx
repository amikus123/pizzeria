import React from "react";
import BestOffers from "./sections/BestOffers";
import Cover from "../../layout/Cover";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import SecondHero from "./sections/SecondHero";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Cover url="/pizza-bg.jpg" alt="Pizza" isLanding />
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
