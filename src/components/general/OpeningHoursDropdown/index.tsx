import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const daysOfWeek = [
  { day: "monday", text: "12:00 - 23:00" },
  { day: "tuesday", text: "Closed" },
  { day: "wednesday", text: "12:00 - 23:00" },
  { day: "thursday", text: "12:00 - 23:00 " },
  { day: "friday", text: "12:00 - 00:00" },
  { day: "saturday", text: "12:00 - 00:00" },
  { day: "sunday", text: "12:00 - 22:00" },
];

const OpeningHoursDropdown = () => {
  const dayNumber = new Date().getDay();
  const dayNumberInArray = dayNumber === 0 ? 6 : dayNumber - 1;
  const { t } = useTranslation("common");

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-start">
      <div className="flex max-w-[11rem] flex-1 flex-col">
        <div className="flex justify-between pb-1">
          <span className=" capitalize">{t(`common:days.today`)}:</span>
          <span>{daysOfWeek[dayNumberInArray]?.text}</span>
        </div>
        <ul
          className={clsx([
            open ? "max-h-52" : "max-h-0",
            "flex flex-col gap-1 overflow-hidden transition-[max-height] duration-500 ",
          ])}
        >
          {daysOfWeek.map((item, index) => {
            return (
              <li key={index} className="flex justify-between gap-0 capitalize">
                <span className="">{t(`common:days.${item.day}`)}: </span>
                <span className="ml-4">
                  {item.text === "Closed" ? t("common:closed") : item.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className=" flex h-6  cursor-pointer items-center  justify-center pl-4"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <FaArrowUp /> : <FaArrowDown />}
      </div>
    </div>
  );
};

export default OpeningHoursDropdown;
