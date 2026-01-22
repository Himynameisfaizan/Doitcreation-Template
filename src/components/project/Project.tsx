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

const Project = () => {
  return (
    <>
      <div>
        <div className="expertise-area text-center">
          <div className="container p-5">
            <h4 className="sub-title">Our Portfolio</h4>
            <h2 className="title pt-2 fw-bold">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <div
                style={{ height: "1px", width: "1px", padding: "2px" }}
                className="bg-white rounded-pill"
              ></div>
              <div
                style={{ height: "1px", width: "1px", padding: "2px" }}
                className="bg-white rounded-pill"
              ></div>
              <div
                style={{ height: "1px", width: "1px", padding: "2px" }}
                className="bg-white rounded-pill"
              ></div>
              <div
                style={{ height: "1px", width: "120px", padding: "2px" }}
                className="bg-white rounded-pill"
              ></div>
            </div>
          </div>
        </div>
        <div className="image-slider">
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
            style={{ padding: "0 0 30px 0" }}
          >
            {/* Slides content same rahega */}

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product1} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product2} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product3} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product4} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product5} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product6} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product1} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product2} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product3} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product4} alt="" className="rounded" />
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            dir="rtl"
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

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product1} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product2} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product3} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product4} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product5} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product6} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product1} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product2} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product3} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product4} alt="" className="rounded" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project;
