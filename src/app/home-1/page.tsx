import AboutV6 from "@/components/about/AboutV6";
import BannerV8 from "@/components/banner/BannerV8";
import DarkClass from "@/components/classes/DarkClass";
import ExpertiseV1 from "@/components/expertise/ExpertiseV1";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV1 from "@/components/header/HeaderV1";
import { ProductCarousel } from "@/components/productCarousel/ProductCarousel";
import ThemeDark from "@/components/switcher/ThemeDark";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
  title: "Dixor - Creative Digital Agency",
};

const Home1 = () => {
  return (
    <>
      <div className="smooth-scroll-container">
        <HeaderV1 />
        <BannerV8 />
        <AboutV6 />
        <ProductCarousel />
        <div className="panel bg-gray">
          <ExpertiseV1 />
        </div>
         <div className="panel bg-gray">
          <WhyChooseV1 />
        </div>
        <FooterV1 />
        <DarkClass />
        <ThemeDark />
      </div>
    </>
  );
};

export default Home1;
