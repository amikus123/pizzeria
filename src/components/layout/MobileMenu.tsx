import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isMobileMenuOpenAtom } from "../../atoms/layout";
import { links } from "./Header";
import { VscChromeClose } from "react-icons/vsc";
import Hover from "../general/text/Hover";
import clsx from "clsx";
import { useScrollbarWidth } from "../../hooks/useScrollbarWidth";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useRecoilState(isMobileMenuOpenAtom);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const width = useScrollbarWidth();
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  useEffect(() => {
    setScrollbarWidth(width);
  }, [width]);

  return (
    <>
      <div
        className={clsx([
          "invisible fixed top-0 left-0 right-0 z-40  flex h-full justify-end",
          isMobileMenuOpen && "!visible",
        ])}
      >
        <div
          className={clsx([
            "absolute right-0 left-0 top-0 bottom-0 flex-1  bg-black opacity-50",
          ])}
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
        ></div>
        <aside
          className={clsx(
            "relative flex w-48 translate-x-48 flex-col transition duration-500 ",
            isMobileMenuOpen && " translate-x-0"
          )}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="h-24 w-full bg-orange-700 pr-[15px]">
            <button>
              <VscChromeClose
                className={clsx([
                  `fixed top-8 right-[calc(16px+${scrollbarWidth}px)] z-50 h-6 w-6 cursor-pointer`,
                ])}
                color="white"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
              />
            </button>
          </div>
          <nav className="h-full w-full bg-orange-600">
            <ul className="flex flex-col items-center gap-6 py-4">
              {links.map(({ href, text }, index) => {
                return (
                  <li
                    key={index}
                    className="text-2xl text-white "
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Hover tag="nextLink" href={href} colorChange={false}>
                      {text}
                    </Hover>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default MobileMenu;
