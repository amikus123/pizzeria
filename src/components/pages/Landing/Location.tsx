import clsx from "clsx";
import React from "react";
import ButtonLink from "../../general/ButtonLink";
import Heading from "../../general/Heading";
import Hover from "../../general/Hover";
import OpeningHoursDropdown from "../../general/OpeningHoursDropdown/OpeningHoursDropdown";

interface LocationElementProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}
const LocationElement = ({
  children,
  text,
  className,
}: LocationElementProps) => {
  return (
    <li
      className={clsx([
        "md:2-[48%] flex w-[40%] flex-col  xl:w-64 ",
        className,
      ])}
    >
      <Heading tag="h2" className="pb-2">
        {text}
      </Heading>
      {children}
    </li>
  );
};

const Location = () => {
  // TODO add big icons for desktop
  return (
    <section className="flex pt-12">
      <ul className="flex flex-wrap justify-around gap-4   xl:mx-auto">
        <LocationElement text="OUR ADRESS">
          <ul className="flex flex-col gap-1">
            <li>PIZZA RESTAURANT</li>
            <li>Rome street</li>
            <li>13-334 Rzeszów</li>
          </ul>
        </LocationElement>
        <LocationElement text="CALL US">
          <div className="flex flex-col gap-1">
            <Hover href="tel:1" tag="a">
              123123123
            </Hover>
            <Hover href="tel:1" tag="a">
              345345345
            </Hover>
          </div>
        </LocationElement>
        <LocationElement text="OPEN HOURS" className="xl:mr-8">
          <OpeningHoursDropdown />
        </LocationElement>
        <LocationElement text="ORDER ONLINE" className="xl:w-32">
          <ButtonLink href="menu">VIEW MENU</ButtonLink>
        </LocationElement>
      </ul>
    </section>
  );
};

export default Location;
