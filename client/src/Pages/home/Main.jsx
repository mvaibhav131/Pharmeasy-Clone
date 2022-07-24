import { AppDownload } from "./AppDownload";
import { ChooseUs } from "./ChooseUs";
import { Customer } from "./Customer";
import { DealsOfDay } from "./DealsOfDay";
import { FeaturedBrand } from "./FeaturedBrand";
import { HealthArticles } from "./HealthArticles";
import { JustOffer } from "./JustOffer";
import { LabTest } from "./LabTest";
import { OfferCards } from "./OfferCards";
import { PharmEasyPlus } from "./PharmEasyPlus";
import { QAns } from "./QAns";
import { TopSlider } from "./TopSlider";

const Main = () => {
  return (
    <>
      <TopSlider />
      <OfferCards />
      <PharmEasyPlus />
      <JustOffer />
      <LabTest />
      <FeaturedBrand />
      <DealsOfDay />
      <HealthArticles />
      <ChooseUs />
      <Customer />
      <AppDownload />
      <QAns />
    </>
  );
};

export { Main };
