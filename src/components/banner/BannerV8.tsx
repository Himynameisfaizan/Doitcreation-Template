"use client";
import illustration1 from "../../../public/assets/img/illustration/12.png";
import Image from "next/image";
import Link from "next/link";
import SplitAnimation from "../animation/SplitAnimation";
import Counter from "../counter/Counter";
import BrandSlider from "../slider/BrandSlider";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const BannerV8 = () => {
  const splitName: string = "We create";
  const words = ["Logo", "website", "packaging"];
  const [displayText, setDisplayText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const typingSpeed = 50;
    const deletingSpeed = 100;
    const holdAfterType = 800;

    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[wordIndex.current];

      if (!isDeleting.current) {
        // Typing
        setDisplayText(currentWord.slice(0, charIndex.current + 1));
        charIndex.current++;

        if (charIndex.current === currentWord.length) {
          timeout = setTimeout(() => {
            isDeleting.current = true;
          }, holdAfterType);
        }
      } else {
        // Deleting (backspace)
        setDisplayText(currentWord.slice(0, charIndex.current - 1));
        charIndex.current--;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }

      timeout = setTimeout(
        type,
        isDeleting.current ? deletingSpeed : typingSpeed,
      );
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className="banner-style-eight-area bg-cover"
        style={{ backgroundImage: "url(/assets/img/shape/3.jpg)" }}
      >
        {/* <div
          className="light-banner-active bg-gray bg-cover"
          style={{ backgroundImage: "url(/assets/img/shape/4.jpg)" }}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner-style-eight-heading">
                <div className="banner-title">
                  <SplitAnimation>
                    <h2 className="title-left split-text">
                      {splitName.split("").map((char, index) => (
                        <span key={index}>{char}</span>
                      ))}
                    </h2>
                  </SplitAnimation>
                  <SplitAnimation>
                    <h2 className="text-center split-text changeText" style={{padding: '10px 0'}}>
                      {/* <span className="typing-text">{displayText}</span> */}
                      <span className="typing-text">{displayText}</span>
                    </h2>
                  </SplitAnimation>
                </div>
              </div>
            </div>
            <div className="col-xl-4" style={{ marginTop: "-60px" }}>
              <div className="thumb">
                <Image src={illustration1} alt="Image Not Found"/>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-xl-7">
              <div className="d-grid">
                <h4>Design Agency</h4>
                <div className="right">
                  <p>
                    We are Do It Creation, a creative design agency providing
                    branding, logo, packaging and website design solutions. With
                    over 1500+ clients worldwide, we use powerful visuals,
                    design, and meaningful words to help brands standout and
                    connect.
                  </p>
                  <Link className="btn-animation mt-10" href="/about-us">
                    <i className="fas fa-arrow-right" /> <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1">
              <div className="card-style-one">
                <div className="bottom">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <Counter end={2500} />
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Completed Projects</span>
                    {/* <Link href="/project">
                        <i className="fas fa-long-arrow-right" />
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandSlider />
    </>
  );
};

export default BannerV8;
