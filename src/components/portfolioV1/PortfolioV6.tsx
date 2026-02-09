"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PortfolioImage } from "../portfolioImage/PortfolioImage";

interface DataType {
  title?: string;
  breadCrumb?: string;
}

const Portfolio = () => {
  // const [pic, setPic] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(
  //       "https://picsum.photos/v2/list?page=8&limit=90",
  //     );
  //     const res = await data.json();
  //     setPic(res);
  //   };
  //   setTimeout(() => {
  //     fetchData();
  //   }, 2000);
  // }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <div
        className={`breadcrumb-area text-center`}
        style={{ backgroundImage: `url(/assets/img/shape/10.jpg)` }}
      >
        <div
          className="light-banner-active bg-gray bg-cover"
          style={{ backgroundImage: "url(/assets/img/shape/6.jpg)" }}
        />

        <div className="container">
          <div className="breadcrumb-item">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1>Our Portfolio</h1>
                <p className="text-white lh-sm fs-5 mt-2">
                  Crafting unique visual identities that tell your brand's{" "}
                  <br />
                  story
                </p>
              </div>
              <div className="portfolio-search  d-flex align-items-center justify-content-center">
                <div className="input">
                  <input type="text" name="" id="" placeholder="Search" />
                  <i className="ri-search-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        {/* <div className="row">
          <div className="col-lg-3 portfolio-contact d-flex align-items-center justify-content-end gap-4 ">
            <div className="d-flex gap-3">
              <i className="ri-facebook-fill"></i>
              <i className="ri-instagram-line"></i>
            </div>
            <a href="/">Conact</a>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-9">
            <div
              className="portfolio-category-dropdown"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <span className="dropdown-title">
                Select Category <i className="ri-arrow-down-s-line"></i>
              </span>

              {open && (
                <ul className="dropdown-menu-custom">
                  <li>
                    <Link href="#">Logo</Link>
                  </li>
                  <li>
                    <Link href="#">Packaging</Link>
                  </li>
                  <li>
                    <Link href="#">Website</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <div className="">Showing items: 1290</div>
          </div>
        </div>

        <div className="my-4">
          <ul className="masonry">
            {/* {pic.map((item: any, id) => (
              <li key={id} className="masonry-item animated--fade-in">
                <img src={`https://picsum.photos/id/${id}/500/400`} alt="Demo" className="apiimage" loading="lazy" />  
              </li>
            ))} */}
            {PortfolioImage.map((item, index) => (
              <li key={index} className="masonry-item">
                {item.type === "img" ? (
                  <img
                    src={item.src}
                    alt="portfolio"
                    className="apiimage show"
                    loading="lazy"
                  />
                ) : (
                  <video
                    className="apiimage show"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
