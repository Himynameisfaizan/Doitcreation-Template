"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import product1 from "../../../public/assets/img/thumb/Milind Dhage.png";
import product2 from "../../../public/assets/img/thumb/Raj Kishore Mohanty.png";
import product3 from "../../../public/assets/img/thumb/shib Patnaik.png";
import product4 from "../../../public/assets/img/thumb/Rachit Jaiswal.png";
import product5 from "../../../public/assets/img/thumb/Sumanth Mahadeva.png";
import product6 from "../../../public/assets/img/thumb/the indian chhori.png";
import product7 from "../../../public/assets/img/thumb/Tushar Arora.png";
import product8 from "../../../public/assets/img/thumb/Rahul Pareek.png";
import product9 from "../../../public/assets/img/thumb/Rafiq Ahmad Naik.png";
import product10 from "../../../public/assets/img/thumb/Mahfooz Theruvath.png";
import product11 from "../../../public/assets/img/thumb/Swati Ray.png";
import product12 from "../../../public/assets/img/thumb/Deepak Sharma.png";
import product13 from "../../../public/assets/img/thumb/Bhaskar Mishra.png";
import product14 from "../../../public/assets/img/thumb/Avikal singh photography.png";
import product15 from "../../../public/assets/img/thumb/Vishal mishra.png";
import product16 from "../../../public/assets/img/thumb/Rinki 06.png";

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
                    <Image src={product1} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Milind Dhage</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">5 Reviews </p>
                      <p>-</p>
                      <p className="">3 Photo</p>
                    </div>
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
                  <div className="">a month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore
                    text="My experience with you has been very good and I am very happy with your work.You have passion and patience.It would be a great pleasure to work with you in the future and to share your work with everyone. It was a great satisfaction for me. Thank you, as I do. We will work together in the future. Best wishes for the future.Thank you.
Chakme Transolution PVT LTD.
"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product2} alt="" className="" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Raj Kishore Mohanty</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">117 reviews </p>
                      <p>-</p>
                      <p className="">4 Photo</p>
                    </div>
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
                  <div className="">a month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore
                    text="Absolutely Marvelous. Our concept and expectations translated into to a beautiful logo. The delivery period is also very quick. We strongly recommend for Do It Creation.
"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product3} alt="" className="" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-center">
                    <h4>shib Patnaik</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">1 Reviews </p>
                      <p>-</p>
                      <p className="">0 Photo</p>
                    </div>
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
                  <div className="">24 week ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Very good experience end to end support from the team." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product4} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-center">
                    <h4>Rachit Jaiswal</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">2 Reviews </p>
                      <p>-</p>
                      <p className="">3 Photo</p>
                    </div>
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
                  <div className="">27 week ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore
                    text="My experience when them is very good.
"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product15} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-center">
                    <h4>Vishal Sharma</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">1 Reviews </p>
                      <p>-</p>
                      <p className="">0 Photo</p>
                    </div>
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
                  <div className="">8 month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="It was a pleasure working with you. Your service was great. You made a logo that we love. Thanks team for delivering best Logo Thank You From, Nature Avtar Resort." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product16} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-center">
                    <h4>Rinki 06</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">1 Reviews </p>
                      <p>-</p>
                      <p className="">0 Photo</p>
                    </div>
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
                  <div className="">8 month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore
                    text="Do it Creation is the best logo designing company Best service ❣️ I am very happy 😊 with your service thank you so much."
                  />
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
                    <Image src={product5} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Sumanth Mahadeva</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">2 Reviews </p>
                      <p>-</p>
                      <p className="">1 Photo</p>
                    </div>
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
                  <div className="">28 week ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore
                    text="Great place for startups to get their first logos. Very professional people, they offer high flexibility with the changes.
"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product6} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>the indian chhori</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">57 Reviews </p>
                      <p>-</p>
                      <p className="">72 Photo</p>
                    </div>
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
                  <div className="">30 week ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore
                    text="Amazing work by the amazing team. They have delivered exactly what we had envisioned on time. Would definitely recommend them.
"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product7} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Tushar Arora</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">2 Reviews </p>
                      <p>-</p>
                      <p className="">1 Photo</p>
                    </div>
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
                  <div className="">28 week ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Thank you so much for this excellent design... highly recommend for design requirement." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product8} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Rahul Pareek</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">23 Reviews </p>
                      <p>-</p>
                      <p className="">0 Photo</p>
                    </div>
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
                  <div className="">33 week ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="We worked with this Do it Creation to refine our brand identity, and the results exceeded expectations. I worked with the designer Sunny and he took the time to understand our vision and translated it into a clean, modern, and purpose-driven logo that captures who we are. Professional, creative, and easy to work with — highly recommended for any brand or design work." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product14} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Avikal singh photography</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">1 Reviews </p>
                      <p>-</p>
                      <p className="">2 Photo</p>
                    </div>
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
                  <div className="">8 month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Great company for website designing the created our company website Orgamify, and they have done faboulas work, we appreciate the team for development and design process." />
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
                    <Image src={product9} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Rafiq Ahmad Naik</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">1 Reviews </p>
                      <p>-</p>
                      <p className="">0 Photo</p>
                    </div>
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
                  <div className="">35 week ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Great place for exemplary design services" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product10} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Mahfooz Theruvath</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">13 Reviews </p>
                      <p>-</p>
                      <p className="">12 Photo</p>
                    </div>
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
                  <div className="">8 month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Very well executed in time and as per my expectations. Teshu Khan and kushi did well in executing the works." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product11} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Swati Ray</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">1 Reviews </p>
                      <p>-</p>
                      <p className="">0 Photo</p>
                    </div>
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
                  <div className="">8 month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Do it Creation created my logo and also developed the website. I am happy with their services. Special thanks to Mr.summar for your cooperation. I highly recommend them to others for All type of website design and any graphic soutions." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product12} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Deepak Sharma</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">10 Reviews </p>
                      <p>-</p>
                      <p className="">106 Photo</p>
                    </div>
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
                  <div className="">8 month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="Thank you so much for this excellent design... highly recommend for design requirement." />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="client-swiperslide">
              <div className="review-container">
                <div className="review-client-name">
                  <div>
                    <Image src={product13} alt="" className="rounded-circle" />
                  </div>
                  <div className="client-name d-flex flex-column align-items-start">
                    <h4>Bhaskar Mishra</h4>
                    <div className="review-photo d-flex align-items-center gap-2 ">
                      <p className="">5 Reviews </p>
                      <p>-</p>
                      <p className="">1 Photo</p>
                    </div>
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
                  <div className="">8 month ago</div>
                </div>

                <div className="review-para text-white shadow-sm">
                  <Readmore text="We have taken the services, they are punctual and dedicated" />
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
      <p className={`review-para ${expanded ? "expanded" : ""}`}>{text}</p>

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
