import React from "react";
import HeaderV1 from "@/components/header/HeaderV1";
import Portfolio from "@/components/portfolioV1/PortfolioV6";
import DarkClass from "@/components/classes/DarkClass";
import FooterV1 from "@/components/footer/FooterV1";
import AboutV6 from "@/components/about/AboutV6";

const portfolio = () => {
  return (
    <>
      <div>
        <HeaderV1 />
        <Portfolio/>
        <FooterV1 />
        <DarkClass />
      </div>
    </>
  );
};

export default portfolio;
