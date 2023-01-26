import useTranslation from "next-translate/useTranslation";
import PageHeading from "../components/general/text/PageHeading";
import Cover from "../components/layout/Cover";

const GalleryPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <PageHeading>{t("common:gallery")}</PageHeading>
        <Cover url="/restaurant-big.jpg" alt="Pizza" />
      </div>
      <div
        className="flex flex-col 
      "
      ></div>
    </>
  );
};

export default GalleryPage;
