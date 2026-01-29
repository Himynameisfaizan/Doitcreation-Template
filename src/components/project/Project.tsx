"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import product1 from "../../../public/assets/img/portfolio/AArna-Farms-Logo.jpeg";
import product2 from "../../../public/assets/img/portfolio/Bill-BOard.jpeg";
import product3 from "../../../public/assets/img//portfolio/Discover-Resort.jpeg";
import product4 from "../../../public/assets/img/portfolio/Ladylink-Logo.jpeg";
import product5 from "../../../public/assets/img/portfolio/News-Paper-Ad.png";
import product6 from "../../../public/assets/img/portfolio/Standee-Design-2.jpeg";
import product7 from "../../../public/assets/img/portfolio/Standee-Design.jpeg";
import product8 from "../../../public/assets/img/portfolio/Trigo-Bake-LOgo.jpeg";
import product9 from "../../../public/assets/img/portfolio/Wick-Logo.jpeg";

const Project = () => {
  return (
    <>
      <div>
        <div className="expertise-area text-center">
          <div className="container p-5">
            <h4 className="sub-title">Our Portfolio</h4>
            <h2 className="title pt-2 fw-bold">Recent Projects</h2>
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
            style={{
              padding: "0 0 30px 0",
              // maskImage:
              //   "linear-gradient(to right, transparent 0%, #000000ce 25%, #0000008c 85%, transparent 100%)",
            }}
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
                <Image src={product7} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product8} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product9} alt="" className="rounded" />
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
            style={{
              padding: "0 0 60px 0",
              // maskImage:
              //   "linear-gradient(to right, transparent 0%, #000000ce 25%, #0000008c 85%, transparent 100%)",
            }}
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
                <Image src={product7} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product8} alt="" className="rounded" />
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ height: "auto", maxWidth: "300px", objectFit: "cover" }}
            >
              <div className="">
                <Image src={product9} alt="" className="rounded" />
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </>
  );
};

export default Project;
