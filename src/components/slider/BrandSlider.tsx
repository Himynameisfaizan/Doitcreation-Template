"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import image1 from "../../../public/assets/img/logo/Bachat-Daddy.png";
import image2 from "../../../public/assets/img/logo/Discover-resort-logo.png";
import image3 from "../../../public/assets/img/logo/Enernew-Logo.png";
import image4 from "../../../public/assets/img/logo/Hero-Of-Financing.png";
import image5 from "../../../public/assets/img/logo/Holiday-Inn.png";
import image6 from "../../../public/assets/img/logo/KSG-LOGO.png";
import image7 from "../../../public/assets/img/logo/Kavipushp.png";
import image8 from "../../../public/assets/img/logo/LABURNAM-DEVELOPERS.png";
import image9 from "../../../public/assets/img/logo/LPS-SCHOOL.png";
import image10 from "../../../public/assets/img/logo/Meraqui-Logo.png";
import image11 from "../../../public/assets/img/logo/Rapido-LOgo.png";
import image12 from "../../../public/assets/img/logo/Shoebill-Logo.png";
import image13 from "../../../public/assets/img/logo/Vision-IAS.png";
import image14 from "../../../public/assets/img/logo/Saroj.png";
import image15 from "../../../public/assets/img/logo/Govendor-Logo.png";
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
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
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
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="mySwiper linear-swiper"
            
          >

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="">
                <Image src={image1} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="">
                <Image src={image2} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="">
                <Image src={image3} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="">
                <Image src={image4} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image5} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image6} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image7} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image8} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image9} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image10} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image11} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image12} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image13} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image14} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "fit-content"}}
            >
              <div className="d-flex align-items-center">
                <Image src={image15} style={{width:'auto', height:'50px'}} alt="" className="rounded object-fit-cover" />
              </div>
            </SwiperSlide>

   
          </Swiper>

          
        </div>

        <div className="w-100" style={dividerStyle}></div>
      </div>
    </>
  );
};

export default BrandSlider;
