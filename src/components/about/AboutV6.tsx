"use client";
import thumb2 from "../../../public/assets/img/thumb/17.png";
import arrowIcon from "../../../public/assets/img/icon/arrow.png";
import Image from "next/image";
import ServiceListData from "../../../public/assets/jsonData/services/ServiceListData.json";
import ServiceList from "../services/ServiceList";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { useState } from "react";

interface DataType {
  sectionClass?: string;
}

const AboutV6 = ({ sectionClass }: DataType) => {
  const containerRef = useScrollAnimation();

  const [activeServiceId, setActiveServiceId] = useState(
    ServiceListData[0]?.id || null,
  );

  const handleMouseEnter = (id: number) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div
        className={`about-style-six-area default-padding ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="thumb-style-four">
                <Image src={thumb2} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div
                className="about-style-six-info text-scroll-animation"
                ref={containerRef}
              >
                <div className="info">
                  <div className="d-flex">
                    <Link href="/about-us">
                      <Image src={arrowIcon} alt="Image Not Found" />
                    </Link>
                    <h2 className="title text">WE HELP BUILD BRANDS</h2>
                  </div>
                  <p className="text">
                    At Do It Creation, we don’t just design—we build brands that
                    command attention. With 8+ years of experience, we are a
                    results-driven creative design agency delivering high-impact
                    branding, logo design, packaging, print, digital creatives,
                    and website design for businesses worldwide.
                    <br />
                    We work with
                    startups, growing brands, and established companies across
                    Real Estate, Finance, Manufacturing, Food, Medical, IT,
                    Beauty, Fashion, Hospitality, NGO, Sports, and more. Our
                    expertise in pouch, label, and box packaging design strictly
                    follows FSSAI, BIS, and IT Act regulations—no compromises.
                    <br />
                    We believe in original thinking, sharp strategy, and
                    flawless execution. Every project follows a proven process,
                    every design is quality-checked, and everything is delivered
                    under one roof.
                    <br />
                    We are client-focused, growth-obsessed, and serious about results. 
                      At Do It Creation, your brand isn’t just designed—it’s built to lead.
                  </p>
                </div>
                {/* <ul className="service-list">
                  {ServiceListData.map((service) => (
                    <li
                      key={service.id}
                      onMouseEnter={() => handleMouseEnter(service.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href="/services"
                        className={`${activeServiceId === service.id ? "active" : ""}`}
                      >
                        <ServiceList service={service} />
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV6;
