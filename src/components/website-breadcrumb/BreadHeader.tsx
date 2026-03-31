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
              <h2 className="do-it-heading">WEBSITE DESIGN</h2>
              <h2 className="do-it-sub-heading">
                Your Growth Starts With a Powerful Website Today.
              </h2>
            </div>
          </div>
          <p className="do-it-para">
            A powerful website is more than just design—it defines how people
            see your brand and influences their decision to connect with you.
            With 8+ years of experience, Do It Creation builds modern, creative,
            and high-performing websites. We focus on user experience,
            responsive layouts, fast speed, and SEO, ensuring your website looks
            impressive, works smoothly, and drives real business growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
