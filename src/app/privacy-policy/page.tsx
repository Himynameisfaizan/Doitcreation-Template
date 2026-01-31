import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV1 from "@/components/header/HeaderV1";
import Privacy from "@/components/policy/Privacy";
import React from "react";

const page = () => {
  return <>
    
    <HeaderV1 />
    <Breadcrumb title="Privacy Policy" breadCrumb="privacy policy"/>
    <Privacy />
    <FooterV1 />
    <DarkClass />
  
  </>;
};

export default page;
