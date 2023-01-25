import React from "react";
import Hover from "../../../general/text/Hover";
import StylizedHeading from "../../../general/text/StylizedHeading";
import Card from "../../../general/Card";

export interface OfferCardData {
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
}

const BestOffers = () => {
  const offerCardData: OfferCardData[] = [
    {
      imageAlt: "Wine",
      imageUrl: "/wine.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium velit autem optio eius quibusdam sed ipsum aliquid similique? Molestias sunt ullam labore provident!",
      title: "BEST WINES",
    },
    {
      imageAlt: "Pizza",
      imageUrl: "/pizza.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque delectus optio tempora architecto assumenda, vero omnis ",
      title: "OUTSTANDING QUALITY",
    },
    {
      imageAlt: "Olive oil",
      imageUrl: "/olive-oil.jpg",
      text: "illo sapiente deleniti quidem voluptatem quia aliquid accusamus placeat quasi dolorum eveniet consectetur.",
      title: "PIZZA SAUCES",
    },
  ];
  return (
    <section
      className="mx-4 flex flex-col items-center justify-center gap-4
    pt-20"
    >
      <StylizedHeading tag="h3" upperText="Check out" className="items-center">
        BEST OFFERS
      </StylizedHeading>
      <Hover href="/menu" tag="nextLink">
        SHOW ALL OFFERS
      </Hover>

      <ul className="my-12 flex flex-wrap justify-center gap-36 pt-20">
        {offerCardData.map(({ imageAlt, imageUrl, text, title }, index) => {
          return (
            <li key={index}>
              <Card
                imageAlt={imageAlt}
                imageUrl={imageUrl}
                text={text}
                title={title}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BestOffers;
