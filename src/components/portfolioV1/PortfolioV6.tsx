"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PortfolioImage } from "../portfolioImage/PortfolioImage";

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
    <div className="container-fluid default-padding">
      <div className="row">
        <div className="col-lg-9 portfolio-search">
          <div className="input">
            <input type="text" name="" id="" placeholder="Search" />
            <i className="ri-search-line"></i>
          </div>
        </div>
        <div className="col-lg-3 portfolio-contact d-flex align-items-center justify-content-end gap-4 ">
          <div className="d-flex gap-3">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
          </div>
          <a href="/">Conact</a>
        </div>
      </div>

      <div className="row mt-4">
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
      
      <div className="row mt-5">
        <div className="col-lg-12">
          <ul className="masonry ">
            {/* {pic.map((item: any, id) => (
              <li key={id} className="masonry-item animated--fade-in">
                <img src={`https://picsum.photos/id/${id}/500/400`} alt="Demo" className="apiimage" loading="lazy" />  
              </li>
            ))} */}
            {PortfolioImage.map((src, index) => (
              <li key={index} className="masonry-item animated--fade-in">
                <img src={src} alt="demo" className="apiimage show" loading="lazy"/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
