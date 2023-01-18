import Image from "next/image";
import React from "react";
import ButtonLink from "../../general/ButtonLink";

const SecondHero = () => {
  return (
    <section className="mt-20 flex flex-col  gap-8 xl:flex-row xl:items-center">
      <div className="z-10 ml-4 max-w-2xl bg-white xl:ml-0 xl:translate-x-56 ">
        <h3 className="flex flex-col">
          <span className="pb-2 font-serif text-2xl text-orange-500 sm:text-3xl md:text-4xl">
            Learn more
          </span>
          <span className="pb-2 text-3xl font-bold sm:text-5xl  md:max-w-none md:text-6xl">
            ABOUT OUR RESTAURANT
          </span>
          <div className="h-2 w-8 bg-orange-600"></div>
        </h3>
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
        <ButtonLink className="md:text-xl" href="/menu">
          CHECK OUR MENU
        </ButtonLink>
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
