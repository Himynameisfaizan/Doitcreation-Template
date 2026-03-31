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
            A strong trademark strategy goes beyond registration, ensuring your
            brand is protected and recognized. With 8+ years of expertise, Do It
            Creation delivers legally sound solutions focused on uniqueness,
            compliance, and approval—helping you secure rights, avoid conflicts,
            and build lasting brand value.
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
