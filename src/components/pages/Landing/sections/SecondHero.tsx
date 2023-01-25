import Image from "next/image";
import React from "react";
import Button from "../../../general/text/Button";
import StylizedHeading from "../../../general/text/StylizedHeading";

const SecondHero = () => {
  return (
    <section className="mt-20 flex flex-col  gap-8 xl:flex-row xl:items-center">
      <div className="z-10 ml-4 max-w-2xl bg-white xl:ml-0 xl:translate-x-56 ">
        <StylizedHeading tag="h3" upperText="Learn more">
          ABOUT OUR RESTAURANT
        </StylizedHeading>

        <ul className="text- flex flex-col gap-8 py-8 md:text-xl">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            magnam officiis temporibus ipsam hic reiciendis id voluptatibus
            quisquam placeat, saepe tempora sequi. Dolorum consequatur, est
            aperiam beatae voluptas laudantium exercitationem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in
            aliquam voluptatibus, odio illo dolore. Voluptas adipisci dolores
            similique consequatur delectus error ullam ratione porro aspernatur!
            Eveniet in consectetur ratione?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero
            nulla pariatur velit doloremque saepe.
          </li>
        </ul>
        <Button className="md:text-xl" href="/menu">
          CHECK OUR MENU
        </Button>
      </div>
      <div className="relative flex h-[384px] md:h-[786px] xl:flex-1 ">
        <Image
          src="/restaurant-big.jpg"
          className="object-cover"
          alt="restaurant"
          fill
        />
      </div>
    </section>
  );
};

export default SecondHero;
