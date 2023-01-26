import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Button from "../../../general/text/Button";
import StylizedHeading from "../../../general/text/StylizedHeading";

const SecondHero = () => {
  const { t } = useTranslation("landing");

  return (
    <section className="mt-20 flex flex-col  gap-8 xl:flex-row xl:items-center">
      <div className="z-10 ml-4 max-w-2xl bg-white xl:ml-0 xl:translate-x-56 ">
        <StylizedHeading
          tag="h3"
          upperText={t("landing:sections.aboutRestaurant.headingSubText")}
        >
          {t("landing:sections.aboutRestaurant.headingText")}
        </StylizedHeading>

        <ul className="text- flex flex-col gap-8 py-8 md:text-xl">
          <li>{t("landing:sections.aboutRestaurant.text1")}</li>
          <li>{t("landing:sections.aboutRestaurant.text2")}</li>
          <li>{t("landing:sections.aboutRestaurant.text3")}</li>
        </ul>
        <Button className="md:text-xl" href="/menu">
          {t("common:buttons.checkOurMenu")}
        </Button>
      </div>
      <div className="relative flex h-[384px] md:h-[786px] xl:flex-1 ">
        <Image
          src="/restaurant-big.jpg"
          className="object-cover"
          alt={t("common:restaurant")}
          fill
        />
      </div>
    </section>
  );
};

export default SecondHero;
