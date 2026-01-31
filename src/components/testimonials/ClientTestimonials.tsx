"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import product1 from "../../../public/assets/img/thumb/WebsiteDesign.png";
import product2 from "../../../public/assets/img/thumb/Packaging.png";
import product3 from "../../../public/assets/img/thumb/Branding-and-Stationory.png";
import product4 from "../../../public/assets/img/thumb/LogoDesign.png";
import product5 from "../../../public/assets/img/thumb/App.png";
import product6 from "../../../public/assets/img/thumb/Video-Editing.png";

export const ClientTestimonials = () => {
  return (
    <>
      <div className="" style={{ marginBottom: "100px" }}>
        <div className="expertise-area text-center">
          <div className="container p-5"> 
            <h4 className="sub-title">Client Review</h4>
            <h2 className="title pt-2 fw-bold">Our Happy Clients</h2>
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
        <div
          className="container"
          style={{
            overflow: "hidden",
            display: "flex",
            gap: '20px',
          }}
        >
          <Swiper
            direction="vertical"
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper linear-swiper"
            style={{
              maxHeight: "700px",
              padding: "0 0 60px 0",
              height: "100%",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000000ce 25%, #0000008c 85%, transparent 100%)",
            }}
          >
            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

          </Swiper>

          <Swiper
            direction="vertical"
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            //   reverseDirection: false,
            }}
            speed={6000}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper linear-swiper"
            style={{
              maxHeight: "700px",
              padding: "0 0 60px 0",
              height: "100%",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000000ce 25%, #0000008c 85%, transparent 100%)",
            }}
          >
            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <Swiper
            direction="vertical"
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={6000}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper linear-swiper"
            style={{
              maxHeight: "700px",
              padding: "0 0 60px 0",
              height: "100%",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000000ce 25%, #0000008c 85%, transparent 100%)",
            }}
          >
            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{
                height: "auto",
                maxWidth: "500px",
                objectFit: "cover",
                backgroundColor: "#2c2c2cc4",
                borderRadius: "10px",
                border: "1px solid #303030",
                boxShadow: "0 1px 8px 0px #3030306c",
              }}
            >
              <div
                className=""
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div style={{ maxWidth: "60px", height: "auto" }}>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div
                    className=""
                    style={{ fontSize: "18px", color: "#f1f1f1" }}
                  >
                    <div>Vineet kumar</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: 'center' }}>
                  <div className="" style={{ display: "flex", gap: "2px", fontSize: '14px' }}>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                    <i
                      className="ri-star-fill"
                      style={{ color: "#ffff00" }}
                    ></i>
                  </div>
                  <div className="" style={{ color: "#949494", fontSize: '14px' }}>
                    10 min ago
                  </div>
                </div>
                <div className="text-white shadow-sm fs-5," style={{lineHeight: '26px',}}>
                  Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
