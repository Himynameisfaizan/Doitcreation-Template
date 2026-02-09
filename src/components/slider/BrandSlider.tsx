"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

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

gsap.registerPlugin(Draggable);

const BrandSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  const img = [...images, ...images];

  const dividerStyle = {
    height: "2px",
    backgroundColor: "#fecaca",
    opacity: "0.25",
  };
  // const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.children;
    // const totalItems = items.length / 2;
    // gsap.set(track, { xPercent: -40 });
    const tl = gsap.to(track, {
      xPercent: -50,
      duration: 50,
      ease: "linear",
      repeat: Infinity,
    });

    track.addEventListener("mouseenter", () => tl.pause());
    track.addEventListener("mouseleave", () => tl.resume());
    Draggable.create(track, {
      type: "x",
      inertia: true
     
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="slider-section w-100 bg-black">
        <div className="d-flex align-items-center gap-4 w-100">
          <div
            className="flex-shrink-0 d-none d-sm-block"
            style={{ ...dividerStyle, width: "60px" }}
          ></div>

          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <div className="d-flex text-warning">
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
              <i className="ri-star-s-fill small text-warning"></i>
            </div>
            <h2
              className="fw-bold m-0 text-nowrap"
              style={{ fontSize: "12px", color: "#fff", fontWeight: "100" }}
            >
              500+ Brands & Counting
            </h2>
          </div>

          <div className="flex-grow-1" style={dividerStyle}></div>
        </div>

        <div className="slider-section bg-black" style={{ overflow: "hidden" }}>
          <div
            ref={trackRef}
            className="d-flex align-items-center gap-5 py-3"
            style={{
              width: "max-content",
            }}
          >
            {img.map((imgs, i) => (
              <div key={i} style={{ flexShrink: 0 }}>
                <Image
                  src={imgs}
                  alt="icon"
                  style={{ height: "50px", width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-100" style={dividerStyle}></div>
      </div>
    </>
  );
};

export default BrandSlider;
