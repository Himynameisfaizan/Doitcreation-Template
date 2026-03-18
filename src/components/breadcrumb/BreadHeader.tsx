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
              <h2 className="do-it-heading">DO IT CREATION</h2>
              <h2 className="do-it-sub-heading">
                One Agency for All Your Business Needs
              </h2>
            </div>
          </div>
          <p className="do-it-para">
            Do It Creation is an innovative business solutions agency offering
            end-to-end services, including branding, logo design, website
            development, trademark registration, and digital marketing. Our
            vision is to be your one-stop agency for all business needs, helping
            brands grow, scale, and succeed through creative strategy, smart
            execution, and result-driven solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
