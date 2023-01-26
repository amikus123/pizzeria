import React from "react";
import Heading from "./Heading";
import Slugs from "./Slugs";

const PageHeading = () => {
  return (
    <section className="pointer-events-non absolute z-10  mx-auto flex w-full flex-col items-center justify-center px-4 pt-40  text-white  ">
      <Heading tag="h1" className="mb-4 text-4xl  lg:text-5xl">
        Menu
      </Heading>
      <Slugs />
    </section>
  );
};

export default PageHeading;
