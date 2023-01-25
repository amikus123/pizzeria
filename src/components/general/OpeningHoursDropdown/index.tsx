import clsx from "clsx";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const daysOfWeek = [
  { day: "Monday", text: "12:00 - 23:00" },
  { day: "Tuesday", text: "Closed" },
  { day: "Wednesday", text: "12:00 - 23:00" },
  { day: "Thursday", text: "12:00 - 23:00 " },
  { day: "Friday", text: "12:00 - 00:00" },
  { day: "Saturday", text: "12:00 - 00:00" },
  { day: "Sunday", text: "12:00 - 22:00" },
];

const OpeningHoursDropdown = () => {
  const dayNumber = new Date().getDay();
  const dayNumberInArray = dayNumber === 0 ? 6 : dayNumber - 1;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-start">
      <div className="flex max-w-[11rem] flex-1 flex-col">
        <div className="flex justify-between pb-1">
          <span className=" ">Today:</span>{" "}
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
              <li key={index} className="flex justify-between gap-0">
                <span> {item.day}:</span> <span>{item.text}</span>
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
