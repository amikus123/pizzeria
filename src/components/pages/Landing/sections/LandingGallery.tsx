import useTranslation from "next-translate/useTranslation";
import React from "react";
import StylizedHeading from "../../../general/text/StylizedHeading";
import ImageGallery from "../components/LandingImageGallery";

const Gallery = () => {
  const { t } = useTranslation("landing");

  return (
    <section>
      <StylizedHeading
        tag="h3"
        upperText={t("landing:sections.gallery.headingSubText")}
        className="items-center "
      >
        {t("landing:sections.gallery.headingText")}
      </StylizedHeading>

      <ImageGallery />
    </section>
  );
};

export default Gallery;
