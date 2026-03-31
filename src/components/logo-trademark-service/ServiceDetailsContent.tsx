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
                <h2>India’s Trusted Trademark Experts for Brand Protection</h2>
                <h4>
                  Your brand identity is the foundation of your business—secure
                  it with confidence.
                </h4>
                <p>
                  At Do It Creation, we provide trademark solutions that combine
                  expert legal guidance with a streamlined filing process and
                  future-ready protection strategies. We work with detailed
                  trademark research, accurate class selection, and proven
                  filing methods to ensure higher approval success. Our process
                  includes in-depth availability checks, documentation support,
                  legal accuracy, and objection handling to eliminate risks.
                  From startups to established businesses, we deliver
                  transparent, reliable, and result-driven trademark services
                  that protect your identity, strengthen your brand, and ensure
                  long-term ownership rights.
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  We help businesses secure and protect their brand identity.
                  Our trademark services build trust, ensure exclusivity, and
                  support long-term growth. With expert-driven processes, we
                  simplify registration, reduce risks, and ensure complete
                  ownership of your brand assets.
                </p>
                <ul className="feature-list-item">
                  <li>Trademark Search & Analysis</li>
                  <li>Application Filing & Legal Support</li>
                  <li>Objection Handling & Registration</li>
                </ul>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <div className="process-style-two">
                <div className="process-style-two-item">
                  {/* <span>01</span> */}
                  <span>
                    <Image src={Icon1} alt="Strategy & Research" />
                  </span>
                  <h4>Strategy & Research</h4>
                  <p>
                    Understanding your brand, industry, competitors, and
                    trademark availability to build a strong and legally secure
                    foundation
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>02</span> */}
                  <span>
                    <Image src={Icon2} alt="Filing & Documentation" />
                  </span>
                  <h4>Filing & Documentation</h4>
                  <p>
                    Executing accurate trademark filing with proper
                    classification, documentation, and legal compliance for
                    smooth processing.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>03</span> */}
                  <span>
                    <Image src={Icon3} alt="Review & Approval Process" />
                  </span>
                  <h4>Review & Approval Process</h4>
                  <p>
                    Monitoring application status, handling objections, and
                    ensuring your trademark moves successfully toward approval.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>04</span> */}
                  <span>
                    <Image src={Icon4} alt="Protection & Support" />
                  </span>
                  <h4>Protection & Support</h4>
                  <p>
                    Providing continuous support, updates, and guidance to
                    maintain and protect your trademark for long-term brand
                    security.
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
