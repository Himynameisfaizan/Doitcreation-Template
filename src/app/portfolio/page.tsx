import React from "react";
import HeaderV1 from "@/components/header/HeaderV1";
import Portfolio from "@/components/portfolioV1/PortfolioV6";
import DarkClass from "@/components/classes/DarkClass";
import FooterV1 from "@/components/footer/FooterV1";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const portfolio = () => {
  return (
    <>
      <div>
        <HeaderV1 />
        <Breadcrumb title="Our Portfolio" breadCrumb="portfolio" />
        <Portfolio/>
        <FooterV1 />
        <DarkClass />
      </div>
    </>
  );
};

export default portfolio;
