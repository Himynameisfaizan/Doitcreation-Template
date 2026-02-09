import AboutV6 from "@/components/about/AboutV6";
import BannerV8 from "@/components/banner/BannerV8";
import DarkClass from "@/components/classes/DarkClass";
import ExpertiseV1 from "@/components/expertise/ExpertiseV1";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV1 from "@/components/header/HeaderV1";
import { HomeContact } from "@/components/homeContact/HomeContact";
import { ProductCarousel } from "@/components/productCarousel/ProductCarousel";
import Project from "@/components/project/Project";
import ThemeDark from "@/components/switcher/ThemeDark";
import { ClientTestimonials } from "@/components/testimonials/ClientTestimonials";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";

export const metadata = {
  title: "Dixor - Creative Digital Agency",
};

const Home1 = () => {
  return (
    <>
      <div className="smooth-scroll-container bg-black">
        <HeaderV1 />
        <BannerV8 />
        <AboutV6 />
        <div style={{paddingBottom: '40px'}}>
          <ProductCarousel />
        </div>
        <div className="py-4">
          <ExpertiseV1 />
        </div>
        <Project />
        <ClientTestimonials />
        <div className="py-4">
          <WhyChooseV1 />
        </div>
        <HomeContact />
        <FooterV1 />
        <DarkClass />
      </div>
    </>
  );
};

export default Home1;
