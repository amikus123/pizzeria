import React from "react";
import StylizedHeading from "../../general/text/StylizedHeading";
import ImageGallery from "./components/ImageGallery";

const Gallery = () => {
  return (
    <section>
      <StylizedHeading tag="h3" upperText="See our">
        DISHES AND RESTAURANTS
      </StylizedHeading>

      <ImageGallery />
    </section>
  );
};

export default Gallery;
