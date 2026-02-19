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
                A Full-Service Digital & Web Solution Company
              </h2>
            </div>
          </div>
          <p className="do-it-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
            delectus quibusdam ex atque quisquam suscipit, mollitia facilis
            impedit ipsum, officiis dicta. Doloribus possimus architecto quam
            similique vitae nihil quaerat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
            delectus quibusdam ex atque quisquam suscipit, mollitia facilis
            impedit ipsum, officiis dicta. Doloribus possimus architecto quam
            similique vitae nihil quaerat?
          </p>
        </div>
      </div>
    </>
  );
};

export default BreadHeader;
