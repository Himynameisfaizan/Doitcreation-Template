"use client";
import AsideLinks from "../asidelinks/AsideLinks";
import DashboardHeading from "../dashboardheading/DashboardHeading";
import React, { useState } from "react";
import Image from "next/image";
import image2 from "../../../../public/assets/img/logo/Discover-resort-logo.png";
import image5 from "../../../../public/assets/img/logo/Holiday-Inn.png";


const dummyLogos = [
  image2,
  image5,
  image2,
  image5,
  image2,
  image5,
];

const img = [...dummyLogos, ...dummyLogos];

const AddBrandLogo = () => {
  return (
    <>
      <section id="dashboard">
        <div className="dashboard-main-container">
          <div className="dashboard-container">
            <AsideLinks />
            <div className="right-side">
              <DashboardHeading />

              <BrandLogoSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const BrandLogoSection = () => {

  return (
    <div className="dashboard-brand-logo-container">
      <div className="brandlogo-upload-section">
        <h3>Add Brand Logo</h3>
        <form className="brandlogo-form">
          <div className="form-group">
            <label>Upload Logo Image</label>
            <input type="file" accept="image/*" />
          </div>

          <button type="submit" className="upload-btn">
            Add Brand logo
          </button>
        </form>
      </div>

      <div className="brandlogo-display-column">
        <h3>Brand Logos</h3>

        {img.map((item, id) => (
          <div className="brandlogo-image-box" key={id}>
            <Image
                style={{objectFit:'contain'}}
              src={item}
              alt="brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBrandLogo;
