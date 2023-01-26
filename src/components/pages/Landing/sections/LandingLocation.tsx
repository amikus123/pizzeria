import clsx from "clsx";
import React from "react";
import Heading from "../../../general/text/Heading";
import Hover from "../../../general/text/Hover";
import OpeningHoursDropdown from "../../../general/OpeningHoursDropdown";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import Button from "../../../general/text/Button";
import useTranslation from "next-translate/useTranslation";
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
          className="mr-8 hidden h-16 w-16 fill-orange-600 xl:flex"
        />
      )}
      <div className="flex flex-col">
        <Heading tag="h2" className="pb-2 uppercase">
          {text}
        </Heading>
        {children}
      </div>
    </li>
  );
};

const Location = () => {
  // TODO add big icons for desktop
  const { t } = useTranslation("common");
  return (
    <section className="flex pt-20">
      <ul className="flex flex-wrap justify-around gap-4   xl:mx-auto">
        <LocationElement icon="geo" text={t("common:ourAddress")}>
          <ul className="flex flex-col gap-1">
            <li>{t("common:address.firstLine")}</li>
            <li>{t("common:address.secondLine")}</li>
            <li>{t("common:address.thirdLine")}</li>
          </ul>
        </LocationElement>
        <LocationElement icon="phone" text={t("common:callUs")}>
          <div className="flex flex-col gap-1">
            <Hover href="tel:1" tag="a">
              123123123
            </Hover>
            <Hover href="tel:1" tag="a">
              345345345
            </Hover>
          </div>
        </LocationElement>
        <LocationElement
          icon="clock"
          text={t("common:openingHours")}
          className="xl:mr-8"
        >
          <OpeningHoursDropdown />
        </LocationElement>
        <LocationElement text="ORDER ONLINE" className="xl:w-32">
          <Button className="whitespace-nowrap" href="menu">
            {t("common:buttons.viewMenu")}
          </Button>
        </LocationElement>
      </ul>
    </section>
  );
};

export default Location;
