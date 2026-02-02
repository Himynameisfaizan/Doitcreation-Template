"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

// Images (Apne path check kar lena)
import product1 from "../../../public/assets/img/thumb/WebsiteDesign.png";
import DarkClass from "@/components/classes/DarkClass";

const page = () => {
  const items = [
    { id: 1, img: product1, title: "Website Design" },
    { id: 2, img: product1, title: "Packaging" },
    { id: 3, img: product1, title: "Branding" },
    { id: 4, img: product1, title: "Logo Design" },
    { id: 5, img: product1, title: "App Dev" },
  ];

  // Infinite loop ke liye items ko triple kar rahe hain
  const allItems = [...items, ...items, ...items];
  
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  // Animation Start karne ke liye
  const startAnimation = async () => {
    await controls.start({
      x: "-33.33%", // Kyunki humne triple items liye hain
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <>
    <div className="carousel-container">
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
          width: 100%;
          padding: 40px 0;
          cursor: grab;
        }
        .carousel-container:active {
          cursor: grabbing;
        }
        .item-box {
          width: 300px;
          flex-shrink: 0;
          user-select: none;
        }
        .dot {
          height: 6px;
          width: 6px;
          background-color: #e4202a;
          border-radius: 2px;
        }
      `}</style>

      <motion.div
        className="d-flex gap-4"
        animate={controls}
        drag="x"
        // Jab drag shuru ho toh animation stop kar do
        onDragStart={() => controls.stop()}
        // Jab drag khatam ho toh wapas start karo
        onDragEnd={() => startAnimation()}
        // Hover par pause
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => !isPaused && startAnimation()}
        style={{ width: "max-content" }}
      >
        {allItems.map((item, index) => (
          <div key={index} className="item-box">
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={200}
              className="rounded"
              draggable="false" // Image drag default band
            />
            <div className="d-flex align-items-center gap-2 mt-2">
              <span style={{ fontSize: "14px" }}>{item.title}</span>
              <span className="dot"></span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
<DarkClass />
    </>
  );
};

export default page