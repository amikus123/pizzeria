import React from "react";
import ButtonLnk from "../../general/ButtonLink";

const Hero = () => {
  return (
    <section className="relative flex flex-col">
      <h1 className="flex flex-col justify-start">
        <span>Get ready for ...</span>
        <span>THE BEST ITALIAN PIZZA</span>
      </h1>
      <div></div>
      <p></p>
      <ButtonLnk href="menu">VIEW MENU</ButtonLnk>
    </section>
  );
};

export default Hero;
