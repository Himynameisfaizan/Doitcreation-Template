"use client";
import React, { useState } from "react";

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
            gap: "20px",
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
            className="mySwiper linear-swiper swiper-client"
          >
            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm ">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation."/>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>
                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>
                <div className="review-para text-white shadow-sm ">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm ">
                 <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
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
              reverseDirection: false,
            }}
            speed={6000}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper linear-swiper swiper-client"
          >
            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                 <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
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
            className="mySwiper linear-swiper swiper-client"
          >
            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                 <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Absolutely Marvelous. Our concept and expectations translated
                  into to a beautiful logo. The delivery period is also very
                  quick.We strongly recommend for Do It Creation." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="rounded-circle" />
                  </div>
                  <div className="">
                    Vineet kumar
                  </div>
                </div>

                <div className="review-star-container">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <div className="">10 min ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
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

type ReadmoreProps = {
  text: string;
  limit?: number;
};

const Readmore = ({ text, limit = 120 }: ReadmoreProps) => {
  const [expanded, setExpanded] = useState(false);

  const showButton = text.length > limit;

  return (
    <div>
      <p
        className={`review-para ${expanded ? "expanded" : ""}`}
      >
        {text}
      </p>

      {showButton && (
        <span
          onClick={() => setExpanded(!expanded)}
          style={{
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {expanded ? "Read less" : "Read more"}
        </span>
      )}
    </div>
  );
};