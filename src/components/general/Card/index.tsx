import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../text/Button";
import Heading from "../text/Heading";
import type { OfferCardData } from "../../pages/Landing/sections/LandingBestOffers";

const Card = ({ imageAlt, title, imageUrl, text }: OfferCardData) => {
  return (
    <Link href="/menu">
      <section className="relative flex h-[440px] w-80  flex-col items-center gap-4 border-2 p-4 pt-32 shadow transition hover:shadow-xl xl:w-96">
        <div
          className=" absolute right-1/2 -top-[100px] h-[200px] w-[200px] translate-x-1/2 
        overflow-hidden rounded-full "
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            className=" h-[200px] object-cover"
            width={200}
            height={200}
          />
        </div>

        <Heading tag="h3" className="">
          {title}
        </Heading>

        <p className="w-4/5 text-center">{text}</p>

        <Button inverse className="mt-auto mb-4">
          VIEW MENU
        </Button>
      </section>
    </Link>
  );
};

export default Card;
