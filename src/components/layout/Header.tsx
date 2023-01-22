import Link from "next/link";
import React from "react";
import { FaBars, FaPizzaSlice } from "react-icons/fa";
import Button from "../general/text/Button";
import Hover from "../general/text/Hover";

interface LinkData {
  text: string;
  href: string;
}
const Header = () => {
  const links: LinkData[] = [
    { href: "/menu", text: "Menu" },
    { href: "", text: "Offers" },
    { href: "", text: "Delivery" },
    { href: "", text: "Images" },
    { href: "", text: "Contact" },
  ];

  return (
    <header className="absolute z-10 flex w-full items-center justify-between px-4 py-8 lg:justify-around ">
      <Link href="/">
        <FaPizzaSlice className="h-16 w-16" color="white" />
      </Link>

      <ul className="hidden  list-none gap-8 md:flex">
        {links.map(({ href, text }, index) => {
          return (
            <li key={index} className="text-lg text-white">
              <Hover tag="nextLink" href={href}>
                {text}
              </Hover>
            </li>
          );
        })}
      </ul>
      <div className="flex align-middle md:hidden">
        <button>{<FaBars className="h-10 w-10" color="white" />}</button>
      </div>

      <div className="hidden align-middle md:flex ">
        <Button href="/order">Order now</Button>
      </div>
    </header>
  );
};

export default Header;
