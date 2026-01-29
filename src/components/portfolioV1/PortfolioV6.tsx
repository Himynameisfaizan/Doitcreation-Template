"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=100",
      );
      const res = await data.json();

      setPic(res);
    };
    fetchData();
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <div className="container-full default-padding">
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
          <ul>
            {pic.map((item: any, id) => {
              return <li key={id}>
                
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
