"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import product1 from "../../../public/assets/img/thumb/WebsiteDesign.png";
import product2 from "../../../public/assets/img/thumb/Packaging.png";
import product3 from "../../../public/assets/img/thumb/Branding-and-Stationory.png";
import product4 from "../../../public/assets/img/thumb/LogoDesign.png";
import product5 from "../../../public/assets/img/thumb/App.png";
import product6 from "../../../public/assets/img/thumb/Video-Editing.png";
import product7 from "../../../public/assets/img/thumb/BrandName.png";
import product8 from "../../../public/assets/img/thumb/seo.png";
import product9 from "../../../public/assets/img/thumb/SocialMedia.png";
import product10 from "../../../public/assets/img/thumb/LogoTrademark.png";

const images = [
  { title: "Website Design", img: product1 },
  { title: "Packaging", img: product2 },
  { title: "Branding Stationery", img: product3 },
  { title: "Logo Design", img: product4 },
  { title: "App Development", img: product5 },
  { title: "Video Editing", img: product6 },
  { title: "Brand Name Research", img: product7 },
  { title: "SEO", img: product8 },
  { title: "Social Media", img: product9 },
  { title: "Logo Trademark", img: product10 },
];

export const ProductCarousel = () => {
  const img = [...images, ...images];

  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        speed={4000}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper linear-swiper"
        style={{ padding: "0 0 60px 0", transitionTimingFunction: "linear" }}
      >
        {img.map((img) => (
          <SwiperSlide
            style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
          >
            <div className="">
              <Image src={img.img} alt="" className="rounded" />
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: "14px" }}>{img.title}</span>
                <span
                  style={{
                    height: "6px",
                    width: "6px",
                    backgroundColor: "#E4202A",
                    display: "inline-block",
                    borderRadius: "2px",
                  }}
                ></span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="d-flex justify-content-center align-items-center gap-10">
        <div
          ref={trackRef}
          style={{
            height: "auto",
            maxWidth: "300px",
            objectFit: "cover",
            display: "flex",
            gap:'20px'
          }}
        >
          {img.map((item, i) => (
            <div key={i} className="" style={{ flexShrink: "0" }}>
              <Image
                src={item.img}
                alt="image"
                style={{ height: "300px", width: "auto" }}
                className="rounded"
              />
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: "14px" }}>{item.title}</span>
                <span
                  style={{
                    height: "6px",
                    width: "6px",
                    backgroundColor: "#E4202A",
                    display: "inline-block",
                    borderRadius: "2px",
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};
