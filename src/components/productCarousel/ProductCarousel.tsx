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

export const ProductCarousel = () => {
  return (
    <>
      <style jsx global>{`
        .linear-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper linear-swiper"
        style={{ padding: "0 0 60px 0" }}
      >
        {/* Slides content same rahega */}

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product1} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Website Design</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product2} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Packaging</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product3} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Branding Stationory</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product4} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Logo Design</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product5} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>App Development</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product6} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Video Editing</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product1} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Website Design</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product2} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Packaging</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product3} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Branding Stationory</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          // key={index}
          style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
        >
          <div className="">
            <Image src={product4} alt="" className="rounded" />
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px" }}>Logo Design</span>
              <span
                style={{
                  height: "6px",
                  width: "6px",
                  backgroundColor: "aqua",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
            </div>
          </div>
        </SwiperSlide>

        {/* {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        ))} */}
      </Swiper>
    </>
  );
};
