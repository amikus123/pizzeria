import clsx from "clsx";
import React from "react";
import Heading from "../../general/text/Heading";
import Hover from "../../general/text/Hover";
import OpeningHoursDropdown from "../../general/OpeningHoursDropdown/OpeningHoursDropdown";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import Button from "../../general/text/Button";
interface LocationElementProps {
  children: React.ReactNode;
  text: string;
  className?: string;
  icon?: "phone" | "geo" | "clock";
}
const LocationElement = ({
  children,
  text,
  className,
  icon,
}: LocationElementProps) => {
  const Tag =
    icon === "phone"
      ? FaPhone
      : icon === "clock"
      ? FaClock
      : icon === "geo"
      ? FaMapMarkerAlt
      : null;
  return (
    <li
      className={clsx([
        "md:2-[48%] flex w-[40%]  xl:w-80 ",
        className,
        icon === undefined && "xl:w-fit",
      ])}
    >
      {Tag && (
        <Tag
          color=""
          className="mr-4 hidden h-16 w-16 fill-orange-600 xl:flex"
        />
      )}
      <div className="flex flex-col">
        <Heading tag="h2" className="pb-2">
          {text}
        </Heading>
        {children}
      </div>
    </li>
  );
};

const Location = () => {
  // TODO add big icons for desktop
  return (
    <section className="flex pt-20">
      <ul className="flex flex-wrap justify-around gap-4   xl:mx-auto">
        <LocationElement icon="geo" text="OUR ADRESS">
          <ul className="flex flex-col gap-1">
            <li>PIZZA RESTAURANT</li>
            <li>Kazimierza 15</li>
            <li>13-334 Rzeszów</li>
          </ul>
        </LocationElement>
        <LocationElement icon="phone" text="CALL US">
          <div className="flex flex-col gap-1">
            <Hover href="tel:1" tag="a">
              123123123
            </Hover>
            <Hover href="tel:1" tag="a">
              345345345
            </Hover>
          </div>
        </LocationElement>
        <LocationElement icon="clock" text="OPEN HOURS" className="xl:mr-8">
          <OpeningHoursDropdown />
        </LocationElement>
        <LocationElement text="ORDER ONLINE" className="xl:w-32">
          <Button href="menu">VIEW MENU</Button>
        </LocationElement>
      </ul>
    </section>
  );
};

export default Location;
