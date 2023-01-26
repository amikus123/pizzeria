import React from "react";
import Heading from "./Heading";
import Slugs from "./Slugs";

interface PageHeadingProps {
  children: React.ReactNode;
}
const PageHeading = ({ children }: PageHeadingProps) => {
  return (
    <section className=" absolute z-10  mx-auto mt-40 flex w-full flex-col items-center justify-center px-4  text-white  ">
      <Heading
        tag="h1"
        className="shadow-text  text-shadow-orange-500  drop-s mb-4  text-4xl  lg:text-5xl"
      >
        {children}
      </Heading>
      <Slugs />
    </section>
  );
};

export default PageHeading;
