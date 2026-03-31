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
              <h2 className="do-it-heading">SEO SETUP</h2>
              <h2 className="do-it-sub-heading">
                Turn Searches Into Sales With Smart SEO Power
              </h2>
            </div>
          </div>
          <p className="do-it-para">
            A powerful SEO approach goes beyond basic rankings, shaping how your
            brand is discovered, trusted, and chosen online. With 8+ years of
            expertise, Do It Creation delivers data-driven SEO strategies
            focused on visibility, intent, performance, and content, helping
            your website attract the right audience, improve rankings, and
            generate consistent, long-term business growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
