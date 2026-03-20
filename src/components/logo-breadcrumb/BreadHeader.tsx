import React from "react";
import Link from "next/link";

interface DataType {
  title?: string;
  breadCrumb?: string;
}

const BreadHeader = ({ title, breadCrumb }: DataType) => {
  return (
    <>
      <div
        className={`breadcrumb-area text-center`}
        style={{ backgroundImage: `url(/assets/img/shape/10.jpg)` }}
      >
        <div
          className="light-banner-active bg-gray bg-cover"
          style={{ backgroundImage: "url(/assets/img/shape/6.jpg)" }}
        />

        <div className="container">
          <div className="breadHeader">
            <div className="d-flex flex-column align-items-start first">
              <h2 className="do-it-heading">LOGO DESIGN</h2>
              <h2 className="do-it-sub-heading">
                We Turn Your Ideas Into Brands.
              </h2>
            </div>
          </div>
          <p className="do-it-para">
            Great design goes beyond visuals—it builds your brand identity. With
            8+ years of experience, Do It Creation delivers creative and
            professional logo design services. We focus on trademark safety,
            print compatibility, and long-term usability, so your logo remains
            impactful and relevant for years to come.
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
