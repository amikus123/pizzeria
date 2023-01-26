import React from "react";
import StylizedHeading from "../../../general/text/StylizedHeading";
import ImageGallery from "../components/LandingImageGallery";

const Gallery = () => {
  return (
    <section>
      <StylizedHeading tag="h3" upperText="See our" className="items-center ">
        DISHES AND RESTAURANTS
      </StylizedHeading>

      <ImageGallery />
    </section>
  );
};

export default Gallery;
