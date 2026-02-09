"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// Slider first
import product1 from "../../../public/assets/img/portfolio/1A2-Desi-Ghee.jpg";
import product2 from "../../../public/assets/img/portfolio/2Discover-Resort.jpg";
import product3 from "../../../public/assets/img//portfolio/3Advaya-Resort.jpg";
import product4 from "../../../public/assets/img/portfolio/4Bill-BOard.jpg";
import product5 from "../../../public/assets/img/portfolio/5Oil.jpg";
import product6 from "../../../public/assets/img/portfolio/6Manviya-tech-solutions-llp.jpg";
import product7 from "../../../public/assets/img/portfolio/7Discover-Resort-Menu-Design.jpg";
import product8 from "../../../public/assets/img/portfolio/8News-Paper-Ad.png";
import product9 from "../../../public/assets/img/portfolio/9Rapido-Ad-1.jpg";
import product10 from "../../../public/assets/img/portfolio/10Standee-Design.jpg";
import product11 from "../../../public/assets/img/portfolio/11-Excellience-Logo.jpg";
import product12 from "../../../public/assets/img/portfolio/12Vermi-COmpost.jpg";
import product13 from "../../../public/assets/img/portfolio/13Meraki-2.jpg";
import product14 from "../../../public/assets/img/portfolio/14Rapido-Ad-2.jpg";
import product15 from "../../../public/assets/img/portfolio/15Ladylink-Logo.jpg";

//Slider secound
import productimg1 from "../../../public/assets/img/portfolio/1RApido-Ad-4.jpg";
import productimg2 from "../../../public/assets/img/portfolio/2Mustard-Oil.jpg";
import productimg3 from "../../../public/assets/img/portfolio/3Trigo-Bake-LOgo.jpg";
import productimg4 from "../../../public/assets/img/portfolio/4Coffee.jpg";
import productimg5 from "../../../public/assets/img/portfolio/5Daring-Devis-BOok-Cover.jpg";
import productimg6 from "../../../public/assets/img/portfolio/6Discover-Resort--Catologue.jpg";
import productimg7 from "../../../public/assets/img/portfolio/7Wick-Logo.jpg";
import productimg8 from "../../../public/assets/img/portfolio/8Darkmont-1.jpg";
import productimg9 from "../../../public/assets/img/portfolio/9Ninja-Pasta.jpg";
import productimg10 from "../../../public/assets/img/portfolio/10-Poshyam-Logo.jpg";
import productimg11 from "../../../public/assets/img/portfolio/11A2-Desi-Ghee-2.jpg";
import productimg12 from "../../../public/assets/img/portfolio/12RApido-5.jpg";
import productimg13 from "../../../public/assets/img/portfolio/13Notebook-Design.jpg";
import productimg14 from "../../../public/assets/img/portfolio/14AArna-Farms-Logo.jpg";
import productimg15 from "../../../public/assets/img/portfolio/15Standee-Design-2.jpg";

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
];

const productimg = [
  productimg1,
  productimg2,
  productimg3,
  productimg4,
  productimg5,
  productimg6,
  productimg7,
  productimg8,
  productimg9,
  productimg10,
  productimg11,
  productimg12,
  productimg13,
  productimg14,
  productimg15,
];

gsap.registerPlugin(Draggable);

const Project = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const totalWidth = track.scrollWidth / 2;

    const tl = gsap.to(track, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });

    // 🔹 INSTANT hover pause / resume
    wrapper.addEventListener("mouseenter", () => tl.pause());
    wrapper.addEventListener("mouseleave", () => tl.resume());

    // 🔹 Draggable synced with timeline
    Draggable.create(track, {
      type: "x",
      inertia: true,
      // onPress: () => tl.pause(),
      onDrag: function () {
        gsap.set(track, { x: this.x });
      },
      onThrowUpdate: function () {
        gsap.set(track, { x: this.x });
      },
      // onRelease: () => tl.resume(),
    });

    return () => {
      tl.kill();
    };
  }, []);


  const wrapperRef1 = useRef<HTMLDivElement>(null);
  const trackRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track1 = trackRef1.current;
    const wrapper1 = wrapperRef1.current;
    if (!track1 || !wrapper1) return;

    const totalWidth = track1.scrollWidth / 2;

    const tl = gsap.fromTo(track1, 
      {x: -totalWidth},
      {
      x: 0,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });

    // 🔹 INSTANT hover pause / resume
    wrapper1.addEventListener("mouseenter", () => tl.pause());
    wrapper1.addEventListener("mouseleave", () => tl.resume());

    // 🔹 Draggable synced with timeline
    Draggable.create(track1, {
      type: "x",
      inertia: true,
      // onPress: () => tl.pause(),
      onDrag: function () {
        gsap.set(track1, { x: this.x });
      },
      onThrowUpdate: function () {
        gsap.set(track1, { x: this.x });
      },
      // onRelease: () => tl.resume(),
    });

    return () => {
      tl.kill();
    };
  }, []);

  const copyImage = [...products, ...products];

  const copyImage1 = [...productimg, ...productimg]

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
          {/* <Swiper
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
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                style={{
                  height: "auto",
                  maxWidth: "300px",
                  objectFit: "cover",
                }}
              >
                <Image
                  src={product}
                  alt={`Project ${index + 1}`}
                  className="rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}

          <div
            ref={wrapperRef}
            style={{
              overflow: "hidden",
              width: "100%",
              padding: "0px 0",
            }}
          >
            <div
              ref={trackRef}
              style={{
                display: "flex",
                gap: "20px",
                width: "max-content",
              }}
            >
              {copyImage.map((item, i) => (
                <div key={i} style={{ flexShrink: 0 }}>
                  <Image
                    src={item}
                    alt="img"
                    style={{ height: "300px", width: "auto" }}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            ref={wrapperRef1}
            style={{
              overflow: "hidden",
              width: "100%",
              padding: "25px 0",
            }}
          >
            <div
              ref={trackRef1}
              style={{
                display: "flex",
                gap: "20px",
                width: "max-content",
              }}
            >
              {copyImage1.map((item, i) => (
                <div key={i} style={{ flexShrink: 0 }}>
                  <Image
                    src={item}
                    alt="img"
                    style={{ height: "300px", width: "auto" }}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* <Swiper
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
            {productimg.map((product, index) => (
              <SwiperSlide
                key={index}
                style={{
                  height: "auto",
                  maxWidth: "300px",
                  objectFit: "cover",
                }}
              >
                <Image
                  src={product}
                  alt={`Project ${index + 1}`}
                  className="rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default Project;
