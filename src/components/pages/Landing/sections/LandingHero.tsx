import React from "react";
import Button from "../../../general/text/Button";
import useTranslation from "next-translate/useTranslation";

const Hero = () => {
  const { t } = useTranslation("landing");

  return (
    <section className="pointer-events-none absolute  z-10 w-full px-4 pt-56  text-white  ">
      <div className=" pointer-events-auto  flex w-full max-w-sm flex-col md:mx-auto md:max-w-sm">
        <h1 className="flex  flex-col justify-start  md:justify-center ">
          <span className="pb-2 font-serif text-2xl text-orange-500 sm:text-3xl md:text-4xl">
            {t("landing:sections.hero.headingSubText")}
          </span>
          <span className="text-shadow-orange-500 max-w-xs text-3xl font-bold sm:text-5xl md:max-w-none  md:text-6xl">
            {t("landing:sections.hero.headingText")}
          </span>
        </h1>
        <div className="mt-2 h-2 w-8 bg-orange-600 sm:w-12  md:w-20"></div>
        <p className="py-4 text-lg sm:text-xl md:text-xl">
          {t("landing:sections.hero.text")}
        </p>
        <Button className="" href="menu">
          {t("common:buttons.viewMenu")}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
