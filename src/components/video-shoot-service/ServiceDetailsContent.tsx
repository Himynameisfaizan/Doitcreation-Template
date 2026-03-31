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
                  India’s Trusted Video Production Experts for Brand Growth
                </h2>
                <h4>
                  Your visual content is the face of your brand—build it with
                  confidence.
                </h4>
                <p>
                  At Do It Creation, we deliver video editing and shoot
                  solutions that combine creative direction with technical
                  precision and market understanding. We work with structured
                  production methods, visual psychology, and industry trends to
                  ensure high-impact and engaging content. Our process includes
                  concept planning, audience alignment, shoot execution, and
                  post-production refinement to reduce gaps and enhance
                  storytelling. From startups to growing businesses, we provide
                  clear, reliable, and result-driven video solutions that define
                  your identity, strengthen your presence, and support long-term
                  brand growth.
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  We help businesses create powerful and meaningful visual
                  identities. Our video services build engagement, create
                  differentiation, and support long-term success. With
                  strategy-driven processes, we simplify execution, reduce
                  risks, and deliver content that truly represents your brand
                  vision.
                </p>
                <ul className="feature-list-item">
                  <li>Video Shoot Planning & Direction</li>
                  <li>Professional Video Editing</li>
                  <li>Concept, Script & Post-Production</li>
                </ul>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <div className="process-style-two">
                <div className="process-style-two-item">
                  {/* <span>01</span> */}
                  <span>
                    <Image src={Icon1} alt="Strategic Planning" />
                  </span>
                  <h4>Strategic & Planning</h4>
                  <p>
                    Understanding your brand, audience, content goals, and
                    creative direction to build a strong and impactful visual
                    foundation.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>02</span> */}
                  <span>
                    <Image src={Icon2} alt="Shoot & Production" />
                  </span>
                  <h4>Shoot & Production</h4>
                  <p>
                    Executing high-quality shoots with the right angles,
                    lighting, and storytelling approach aligned with your vision
                    and brand positioning.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>03</span> */}
                  <span>
                    <Image src={Icon3} alt="Editing & Enhancement" />
                  </span>
                  <h4>Editing & Enhancement</h4>
                  <p>
                    Crafting polished videos with seamless cuts, color grading,
                    sound design, and effects to ensure maximum engagement and
                    clarity.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>04</span> */}
                  <span>
                    <Image src={Icon4} alt="Final Delivery & Support" />
                  </span>
                  <h4>Final Delivery & Support</h4>
                  <p>
                    Delivering high-quality video outputs with platform-ready
                    formats and guidance to maintain a strong and consistent
                    brand presence
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
