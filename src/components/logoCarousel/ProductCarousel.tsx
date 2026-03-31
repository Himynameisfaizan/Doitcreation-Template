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

import product1 from "../../../public/assets/img/logo_images/10.jpg";
import product2 from "../../../public/assets/img/logo_images/10Poshyam.jpg";
import product3 from "../../../public/assets/img/logo_images/11.jpg";
import product4 from "../../../public/assets/img/logo_images/12.jpg";
import product5 from "../../../public/assets/img/logo_images/14arna.jpg";
import product6 from "../../../public/assets/img/logo_images/15Ladylink.jpg";
import product7 from "../../../public/assets/img/logo_images/3Trigo.jpg";
import product8 from "../../../public/assets/img/logo_images/6.jpg";
import product9 from "../../../public/assets/img/logo_images/6Manviya.jpg";
import product10 from "../../../public/assets/img/logo_images/7.jpg";
import product11 from "../../../public/assets/img/logo_images/8.jpg";
import product12 from "../../../public/assets/img/logo_images/9.jpg";

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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
