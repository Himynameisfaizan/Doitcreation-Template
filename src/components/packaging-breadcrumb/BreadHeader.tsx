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
              <h2 className="do-it-heading">PACKAGING DESIGN</h2>
              <h2 className="do-it-sub-heading">
                We Turn Your Products Into Shelf-Winning Brands.
              </h2>
            </div>
          </div>
          <p className="do-it-para">
            Great packaging is more than just looks—it shapes how people see
            your product and helps them decide to buy. With 8+ years of
            experience, Do It Creation creates simple, creative, and
            professional packaging designs. We focus on correct guidelines,
            accurate printing, and brand consistency, so your packaging looks
            good, works well, and is ready for the market.
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
