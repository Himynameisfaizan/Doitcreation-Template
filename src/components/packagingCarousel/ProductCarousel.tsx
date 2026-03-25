"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import gsap from "gsap";
import Draggable from "gsap/Draggable";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import product1 from "../../../public/assets/img/packaging_images/1A2-Desi-Ghee.webp";
import product2 from "../../../public/assets/img/packaging_images/2Mustard-Oil.webp";
import product3 from "../../../public/assets/img/packaging_images/5Oil.webp";
import product4 from "../../../public/assets/img/packaging_images/8Darkmont.webp";
import product5 from "../../../public/assets/img/packaging_images/9Ninja-Pasta.webp";
import product6 from "../../../public/assets/img/packaging_images/12Vermi.webp";

const images = [
  { title: "Website Design", img: product1 },
  { title: "Packaging", img: product2 },
  { title: "Branding Stationery", img: product3 },
  { title: "Logo Design", img: product4 },
  { title: "App Development", img: product5 },
  { title: "Video Editing", img: product6 },
];

gsap.registerPlugin(Draggable);

export const ProductCarousel = () => {
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

  const duplicatedImages = [...images, ...images, ...images];
  return (
    <>
      {/* <Swiper
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
          {duplicatedImages.map((item, i) => (
            <div key={i} style={{ flexShrink: 0 }}>
              <Image
                src={item.img}
                alt={item.title}
                style={{ height: "300px", width: "auto" }}
                className="rounded"
              />
              {/* <div className="d-flex align-items-center gap-2 mt-2">
                <span style={{ fontSize: "14px" }}>{item.title}</span>
                <span
                  style={{
                    height: "6px",
                    width: "6px",
                    backgroundColor: "#E4202A",
                    display: "inline-block",
                    borderRadius: "2px",
                  }}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
