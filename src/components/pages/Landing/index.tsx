import React from "react";
import BestOffers from "./sections/BestOffers";
import Cover from "./components/Cover";
import FullGallery from "../../layout/FullGallery";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import SecondHero from "./sections/SecondHero";

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
      <FullGallery />
    </>
  );
};

export default Landing;
