import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isMobileMenuOpenAtom } from "../../atoms/layout";
import { links } from "./Header";
import { RiCloseFill } from "react-icons/ri";
import Hover from "../general/text/Hover";

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

  return (
    <>
      {isMobileMenuOpen && (
        <div className=" fixed top-0 left-0 right-0 z-40 flex   h-full ">
          <div
            className="flex flex-1  bg-black opacity-50"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          ></div>
          <aside
            className="flex w-48 flex-col"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="h-24 w-full bg-orange-700">
              <button>
                <RiCloseFill
                  className="visible fixed right-8 top-8 z-50 h-8 w-8 cursor-pointer"
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
      )}
    </>
  );
};

export default MobileMenu;
