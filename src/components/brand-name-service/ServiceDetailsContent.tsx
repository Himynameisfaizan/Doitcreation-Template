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
                  India’s Trusted Brand Naming Experts for Business Identity
                </h2>
                <h4>
                  Your brand name is the first step of your success—build it
                  with confidence.
                </h4>
                <p>
                  At Do It Creation, we deliver brand naming solutions that
                  combine creative strategy with linguistic research and market
                  understanding. We work with structured naming methods, sound
                  psychology, and industry insights to ensure high-impact and
                  memorable names. Our process includes in-depth research,
                  audience alignment, domain considerations, and brand
                  positioning to reduce confusion and enhance recall. From
                  startups to growing businesses, we provide clear, reliable,
                  and result-driven naming solutions that define your identity,
                  strengthen your presence, and support long-term brand growth.
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  We help businesses create strong and meaningful brand
                  identities. Our naming services build recognition, create
                  differentiation, and support long-term success. With
                  strategy-driven processes, we simplify decision-making, reduce
                  risks, and deliver names that truly represent your brand
                  vision.
                </p>
                <ul className="feature-list-item">
                  <li>Brand Name Research & Strategy</li>
                  <li>Creative Name Development</li>
                  <li> Domain & Availability Check</li>
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
                    Understanding your business, audience, competitors, and
                    naming landscape to create a strong and distinctive brand
                    foundation.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>02</span> */}
                  <span>
                    <Image src={Icon2} alt="Name Creation & Development" />
                  </span>
                  <h4>Name Creation & Development</h4>
                  <p>
                    Crafting unique, meaningful, and easy-to-remember brand
                    names aligned with your vision, positioning, and market
                    appeal.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>03</span> */}
                  <span>
                    <Image src={Icon3} alt="Testing & Refinement" />
                  </span>
                  <h4>Testing & Refinement</h4>
                  <p>
                    Evaluating name options for clarity, pronunciation, recall,
                    and audience connection to ensure maximum effectiveness.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>04</span> */}
                  <span>
                    <Image src={Icon4} alt="Finalization & Guidance" />
                  </span>
                  <h4>Finalization & Guidance</h4>
                  <p>
                    Delivering the perfect brand name with usage clarity and
                    support to build a strong and consistent brand identity.
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
