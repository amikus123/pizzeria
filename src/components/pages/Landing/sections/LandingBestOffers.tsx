import React from "react";
import Hover from "../../../general/text/Hover";
import StylizedHeading from "../../../general/text/StylizedHeading";
import Card from "../../../general/Card";
import useTranslation from "next-translate/useTranslation";
import { capitalize } from "lodash";

export interface OfferCardData {
  imageUrl: string;
  imageAlt: string;
}

const BestOffers = () => {
  const offerCardData: OfferCardData[] = [
    {
      imageAlt: "wine",
      imageUrl: "/wine.jpg",
    },
    {
      imageAlt: "pizza",
      imageUrl: "/pizza.jpg",
    },
    {
      imageAlt: "olive-oil",
      imageUrl: "/olive-oil.jpg",
    },
  ];
  const { t } = useTranslation("landing");

  return (
    <section
      className="mx-4 flex flex-col items-center justify-center gap-4
    pt-20"
    >
      <StylizedHeading
        tag="h3"
        upperText={t("landing:sections.bestOffers.headingSubText")}
        className="items-center"
      >
        {t("landing:sections.bestOffers.headingText")}
      </StylizedHeading>
      <Hover href="/menu" tag="nextLink">
        {capitalize(t("common:showAllOffers"))}
      </Hover>

      <ul className="my-12 flex flex-wrap justify-center gap-36 pt-20">
        {offerCardData.map(({ imageAlt, imageUrl }, index) => {
          return (
            <li key={index}>
              <Card
                imageAlt={t(`common:${imageAlt}`)}
                imageUrl={imageUrl}
                text={t(`common:cards.card${index + 1}.text`)}
                title={t(`common:cards.card${index + 1}.title`)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BestOffers;
