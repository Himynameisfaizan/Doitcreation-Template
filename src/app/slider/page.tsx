"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

import icon1 from "../../../public/assets/img/icon/20+ Contry.png";
import icon2 from "../../../public/assets/img/icon/Expert Team.png";
import icon3 from "../../../public/assets/img/icon/8+ Years.png";
import icon4 from "../../../public/assets/img/icon/2500+ Project Done.png";

gsap.registerPlugin(Draggable);
const Page = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.children;
    const totalItems = items.length / 2;
    // gsap.set(track, { xPercent: -40 });
    const tl = gsap.to(track, {
      xPercent: -50,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    track.addEventListener("mouseenter", () => tl.pause());
    track.addEventListener("mouseleave", () => tl.resume());
    Draggable.create(track, {
      type: "x",
      inertia: true,
      onPress: () => tl.pause(),
      onRelease: () => tl.resume(),
    });

    return () => {
      tl.kill();
    };
  }, []);

  const icons = [icon1, icon2, icon3, icon4, icon1, icon2, icon3, icon4];
  const items = [...icons, ...icons, ...icons]; 

  return (
    <div
      ref={wrapperRef}
      style={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "40px",
          width: "max-content",
          cursor: "grab",
        }}
      >
        {items.map((img, i) => (
          <div key={i} style={{ flexShrink: 0 }}>
            <Image
              src={img}
              alt="icon"
              style={{ height: "120px", width: "120px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
