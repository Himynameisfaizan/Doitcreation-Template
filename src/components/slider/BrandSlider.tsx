'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import image1 from "../../../public/assets/img/LOgo-PNG.png"
import image2 from "@/assets/img/banner-img.webp"
import Image from "next/image";

// CSS Imports
import "swiper/css";
const BrandSlider = () => {
  const dividerStyle = {
    height: "2px",
    backgroundColor: "#fecaca",
    opacity: "0.25",
  };
  return (
    <>
       <style jsx global>{`
        .linear-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <div className="slider-section w-100 bg-black">

        <div className="d-flex align-items-center gap-4 w-100">
          <div
            className="flex-shrink-0 d-none d-sm-block"
            style={{ ...dividerStyle, width: "60px" }}
          ></div>

          {/* Center Content: Stars + Text */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            {/* Stars */}
            <div className="d-flex text-warning">
              <i className="ri-star-s-fill small text-primary"></i>
              <i className="ri-star-s-fill small text-primary"></i>
              <i className="ri-star-s-fill small text-primary"></i>
              <i className="ri-star-s-fill small text-primary"></i>
              <i className="ri-star-s-fill small text-primary"></i>
            </div>
            {/* Text */}
            <h2
              className="fw-bold m-0 text-nowrap"
              style={{ fontSize: "12px", color: "#fff", fontWeight: "100" }}
            >
              500+ Brands & Counting
            </h2>
          </div>

          {/* Right Line (fills remaining space) */}
          <div className="flex-grow-1" style={dividerStyle}></div>
        </div>

        {/* --- Swiper Section --- */}
        <div className="w-100 py-3">
            <Swiper
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}
        modules={[Autoplay]}
        className="mySwiper linear-swiper" 
      
      >
        {/* Slides content same rahega */}
        {[1, 2, 3, 4, 5, 6, 7,8,9,10,11].map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ height: "auto", maxWidth: "200px", objectFit: "cover" }}
          >
            <div className="">
              <Image src={image1} alt="" className="rounded" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>

        {/* --- Bottom Line --- */}
        <div className="w-100" style={dividerStyle}></div>
      </div>
    </>
  );
};

export default BrandSlider;
