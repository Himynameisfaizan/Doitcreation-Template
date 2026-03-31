import React from "react";
import Link from "next/link";

interface DataType {
  title?: string;
  description?: string;
}

const BreadHeader = ({ title, description }: DataType) => {
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
              <h2 className="do-it-heading">{title}</h2>
              <h2 className="do-it-sub-heading">{description}</h2>
            </div>
          </div>
          <p className="do-it-para">
            Most brands post. We make brands dominate. Social media today is not
            about presence—it’s about performance. With 8+ years of expertise,
            Do It Creation delivers result-focused strategies built for
            attention, engagement, and conversion—helping you outperform
            competitors, capture audiences, and drive real business growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
