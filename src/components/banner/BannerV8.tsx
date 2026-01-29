import illustration1 from "../../../public/assets/img/illustration/12.png";
import Image from "next/image";
import Link from "next/link";
import SplitAnimation from "../animation/SplitAnimation";
import Counter from "../counter/Counter";
import BrandSlider from "../slider/BrandSlider";

const BannerV8 = () => {
  const splitName: string = "We Design";
  const splitName2: string = "for satisfaction!";

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
        <div className="container-full">
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
                    <h2 className="text-left split-text changeText">
                      {splitName2.split("").map((char, index) => (
                        <span key={index}>{char}</span>
                      ))}
                    </h2>
                    {/* <h2 className="title-right split-text">Creative</h2> */}
                  </SplitAnimation>
                </div>
              </div>
            </div>
            <div className="col-xl-4" style={{marginTop: '-40px'}}>
              <div className="thumb">
                <Image src={illustration1} alt="Image Not Found" />
              </div>
            </div>
          </div>
          <div className="row bannerSecoundColumn">
            <div className="col-xl-7">
              <div className="d-grid">
                <h4>Design Agency</h4>
                <div className="right">
                  <p>
                    We are Do It Creation, a creative design agency providing branding, logo, 
                    packaging and website design solutions. With over 1500+ clients worldwide, 
                    we use powerful visuals, design, and meaningful words to help brands standout and connect.
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
