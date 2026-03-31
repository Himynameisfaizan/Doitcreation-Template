import Icon1 from "../../../public/assets/img/icon/1-service.webp";
import Icon2 from "../../../public/assets/img/icon/2-service.webp";
import Icon3 from "../../../public/assets/img/icon/3-service.webp";
import Icon4 from "../../../public/assets/img/icon/4-service.webp";
import Image from "next/image";

export const ServiceDetailsContent = () => {
  return (
    <>
      <div className={`services-details-area default-padding`}>
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  {/* <Image src={banner6} alt="Thumb" /> */}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-7">
                <h2>
                  India’s Premium App Development Experts for Elite Brands
                </h2>
                <p>
                  Your application is more than a product—it is your digital
                  signature. Build it with distinction. At Do It Creation, we
                  deliver app development solutions that blend strategic
                  thinking with advanced technology and refined user experience
                  design. Our approach is driven by structured development
                  frameworks, seamless UI/UX architecture, and deep market
                  understanding to ensure flawless performance and elevated
                  usability. From concept to execution, we focus on intelligent
                  planning, user-centric design, cross-platform compatibility,
                  and scalable infrastructure—ensuring your application stands
                  apart with clarity, sophistication, and purpose. Whether for
                  emerging ventures or established enterprises, we create
                  digital experiences that enhance brand perception, strengthen
                  engagement, and support long-term growth.
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  We partner with brands that value excellence and precision in
                  digital experiences. Our app development services are designed
                  to enhance usability, create distinction, and deliver
                  measurable impact. With a refined, strategy-led approach, we
                  minimize complexity, mitigate risks, and build applications
                  that reflect your brand’s premium positioning.
                </p>
                <ul className="feature-list-item">
                  <li>Strategic App Architecture</li>
                  <li>Luxury UI/UX Design & Development</li>
                  <li>Performance Optimization & Deployment</li>
                </ul>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <div className="process-style-two">
                <div className="process-style-two-item">
                  {/* <span>01</span> */}
                  <span>
                    <Image src={Icon1} alt="Strategic Foundation" />
                  </span>
                  <h4>Strategic Foundation</h4>
                  <p>
                    A deep understanding of your brand, audience, and market
                    landscape to create a strong, future-ready application
                    framework.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>02</span> */}
                  <span>
                    <Image src={Icon2} alt="Design & Development Excellence" />
                  </span>
                  <h4>Design & Development Excellence</h4>
                  <p>
                    Crafting refined, high-performance applications with
                    seamless functionality, intuitive design, and elevated user
                    experience.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>03</span> */}
                  <span>
                    <Image src={Icon3} alt="Precision Testing & Optimization" />
                  </span>
                  <h4>Precision Testing & Optimization</h4>
                  <p>
                    Ensuring stability, speed, and reliability through
                    meticulous testing and performance refinement.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>04</span> */}
                  <span>
                    <Image src={Icon4} alt="Launch & Ongoing Excellence" />
                  </span>
                  <h4>Launch & Ongoing Excellence</h4>
                  <p>
                    Delivering your application with complete guidance and
                    continued support to maintain performance, growth, and
                    digital leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
