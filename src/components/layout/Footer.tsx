import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaPizzaSlice } from "react-icons/fa";
import Button from "../general/text/Button";
import Heading from "../general/text/Heading";
import Hover from "../general/text/Hover";

const Footer = () => {
  return (
    <footer className="mt-12 flex justify-around bg-black px-4 py-4 md:py-8">
      <div className="flex flex-1 flex-col justify-around md:flex-row">
        <Link href="/">
          <FaPizzaSlice className="h-16 w-16 md:h-24 md:w-24" color="white" />
        </Link>
        <div className="md:ml-8">
          <Heading tag="h5" className="py-4 pt-8 text-white  md:mb-4 md:py-0">
            Socials:
          </Heading>
          <div className="flex gap-4">
            <Link href="/">
              <FaFacebook className="h-8 w-8 md:h-12 md:w-12" color="white" />
            </Link>
            <Link href="/">
              <FaInstagram className="h-8 w-8 md:h-12 md:w-12" color="white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-around md:flex-row md:gap-8">
        <ul className="flex flex-col gap-4 text-white md:text-lg ">
          <li>Kazimierza 15, 13-334 Rzeszów</li>
          <li>
            <p>
              Phone:&nbsp;
              <Hover href="tel:1" tag="a">
                123123123
              </Hover>
              &nbsp;
              <Hover href="tel:1" tag="a">
                345345345
              </Hover>
            </p>
          </li>
          <li>
            <p>
              E-mail:&nbsp;
              <Hover href="mailto:asdasd@gmail.com" tag="a">
                pizza@gmail.com
              </Hover>
            </p>
          </li>
        </ul>

        <Button className="mt-4 md:mt-0" href="/menu">
          ORDER ONLINE
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
