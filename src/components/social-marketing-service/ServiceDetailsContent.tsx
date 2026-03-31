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
                  India’s Leading Social Media Experts for Business Growth
                </h2>
                <h4>
                  If your brand isn’t growing online, you’re already losing. Fix
                  it now.
                </h4>
                <p>
                  At Do It Creation, we don’t just manage social media—we
                  engineer growth. Our approach combines aggressive strategy,
                  deep audience targeting, and platform intelligence to create
                  high-performing campaigns. From content psychology to
                  algorithm-driven execution, we ensure your brand stays
                  visible, relevant, and ahead. Our process includes
                  research-backed planning, precision targeting, high-impact
                  creatives, and continuous optimization—so you don’t just
                  compete, you lead. Whether you’re a startup or scaling
                  business, we deliver powerful strategies that increase reach,
                  boost engagement, and generate measurable results.
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  We help brands win attention and convert it into business. Our
                  social media marketing services are built to dominate feeds,
                  attract the right audience, and drive consistent growth. With
                  performance-first execution, we eliminate guesswork, reduce
                  wasted spend, and deliver content that sells.
                </p>
                <ul className="feature-list-item">
                  <li>High-Converting Social Media Strategy</li>
                  <li>Scroll-Stopping Creative Content</li>
                  <li>Data-Driven Performance Optimization</li>
                </ul>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <div className="process-style-two">
                <div className="process-style-two-item">
                  {/* <span>01</span> */}
                  <span>
                    <Image src={Icon1} alt="Strategy & Market Domination" />
                  </span>
                  <h4>Strategy & Market Domination</h4>
                  <p>
                    Analyzing your brand, audience, and competitors to build a
                    powerful strategy designed to outperform and capture market
                    attention.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>02</span> */}
                  <span>
                    <Image src={Icon2} alt="Content Creation That Sells" />
                  </span>
                  <h4>Content Creation That Sells</h4>
                  <p>
                    Producing bold, engaging, and conversion-focused content
                    that grabs attention, builds trust, and drives action.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>03</span> */}
                  <span>
                    <Image src={Icon3} alt="Performance Tracking & Scaling" />
                  </span>
                  <h4>Performance Tracking & Scaling</h4>
                  <p>
                    Monitoring data, optimizing campaigns, and scaling what
                    works to maximize ROI and accelerate growth.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>04</span> */}
                  <span>
                    <Image src={Icon4} alt="Final Delivery & Protection" />
                  </span>
                  <h4>Reporting & Growth Control</h4>
                  <p>
                    Delivering clear insights, performance metrics, and expert
                    guidance to keep your brand ahead of competition at all
                    times.
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
