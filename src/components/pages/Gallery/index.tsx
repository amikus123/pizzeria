import React from "react";
import FullGallery from "../../layout/FullGallery";
import Cover from "../../layout/Cover";
import BestOffers from "../Landing/sections/BestOffers";
import Gallery from "../Landing/sections/Gallery";
import Hero from "../Landing/sections/Hero";
import Location from "../Landing/sections/Location";
import SecondHero from "../Landing/sections/SecondHero";

const GalleryPage = () => {
  return (
    <>
      <div>
        <Hero />
        <Cover url="/pizza-menu.jpg" alt="Pizza" />
      </div>
      <div
        className="flex flex-col 
      "
      ></div>
    </>
  );
};

export default GalleryPage;
