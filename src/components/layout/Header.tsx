import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { FaBars, FaPizzaSlice } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isMobileMenuOpenAtom } from "../../atoms/layout";
import Button from "../general/text/Button";
import Hover from "../general/text/Hover";

interface LinkData {
  text: string;
  href: string;
}

export const links: LinkData[] = [
  { href: "/menu", text: "menu" },
  { href: "/offers", text: "offers" },
  { href: "/delivery", text: "delivery" },
  { href: "/gallery", text: "gallery" },
  { href: "/contact", text: "contact" },
];
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useRecoilState(isMobileMenuOpenAtom);

  const { t } = useTranslation("common");

  return (
    <header className="absolute z-10 flex w-full items-center justify-between px-4  py-4 md:py-8 lg:justify-around ">
      <Link href="/">
        <FaPizzaSlice className="h-16 w-16" color="white" />
      </Link>
      <ul className="hidden  list-none gap-8 md:flex">
        {links.map(({ href, text }, index) => {
          return (
            <li
              key={index}
              className="text-lg capitalize text-white md:text-xl"
            >
              <Hover tag="nextLink" href={href}>
                {t(`common:${text}`)}
              </Hover>
            </li>
          );
        })}
      </ul>
      <div className="flex align-middle md:hidden">
        <button
          onClick={() => {
            setIsMobileMenuOpen(true);
          }}
        >
          {isMobileMenuOpen ? (
            <>
              {/* <RiCloseFill className=" h-6 w-6 sm:h-10 sm:w-10" color="white" /> */}
            </>
          ) : (
            <FaBars className="h-6 w-6 sm:h-10 sm:w-10" color="white" />
          )}
        </button>
      </div>

      <div className="hidden align-middle md:flex ">
        <Button href="/order">{t("common:buttons.orderNow")}</Button>
      </div>
    </header>
  );
};

export default Header;
