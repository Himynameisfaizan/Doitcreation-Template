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
                <h2>India’s Trusted SEO Experts for Scalable Growth</h2>
                <h4>
                  Brand search presence is the foundation of your online
                  growth—make it strong.
                </h4>
                <p>
                  At Do It Creation, we build SEO solutions that combine smart
                  planning with performance-driven execution and future-ready
                  strategies. We work with evolving algorithms, targeted keyword
                  research, and proven optimization techniques to boost your
                  visibility across all major platforms. Our process includes
                  structured website architecture, faster loading speed,
                  technical improvements, and content refinement to remove
                  ranking obstacles. From startups to established brands, we
                  deliver ethical, transparent, and result-focused SEO services
                  that build authority, expand reach, and ensure long-term
                  business success online.
                </p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>
                  We partner with businesses aiming to dominate search results.
                  Our SEO builds trust, boosts visibility, and drives long-term
                  growth. With performance-focused strategies, we increase
                  traffic, improve engagement, and convert visitors into
                  valuable customers.
                </p>
                <ul className="feature-list-item">
                  <li>Keyword Research & Strategy</li>
                  <li>Technical SEO Optimization</li>
                  <li>On-Page & Off-Page SEO</li>
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
                    search behavior to build a strong, data-driven SEO
                    foundation.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>02</span> */}
                  <span>
                    <Image src={Icon2} alt="Optimization & Implementation" />
                  </span>
                  <h4>Optimization & Implementation</h4>
                  <p>
                    Executing advanced SEO strategies including on-page
                    improvements, technical fixes, and content optimization for
                    better rankings.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>03</span> */}
                  <span>
                    <Image src={Icon3} alt="Performance & Analysis" />
                  </span>
                  <h4>Performance & Analysis</h4>
                  <p>
                    Monitoring rankings, traffic, and user behavior to improve
                    performance, fix gaps, and maximize results continuously.
                  </p>
                </div>
                <div className="process-style-two-item">
                  {/* <span>04</span> */}
                  <span>
                    <Image src={Icon4} alt="Growth & Support" />
                  </span>
                  <h4>Growth & Support</h4>
                  <p>
                    Delivering consistent SEO improvements with ongoing
                    optimization, updates, and strategies to ensure long-term
                    digital growth.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row mt-80 mt-xs-50 gallery-two-columns">
                            <div className="col-md-6">
                                <Image src={portfolio45} alt="Image Not Found" />
                            </div>
                            <div className="col-md-6">
                                <Image src={portfolio46} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="d-grid colums-2 mt-50">
                            <div className="item">
                                <div className="faq-style-one faq-style-two">
                                    <h2 className="mb-30">Any questions find here.</h2>
                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Business Innovation
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments are off under folly death.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Search Engine Optimization
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Regularity appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments are off under folly death.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Thinking Differently
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Permanent appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments are off under folly death.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h2>What we do?</h2>
                                <p>
                                    Regular libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.
                                </p>
                                <p>
                                    Momnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.
                                </p>
                            </div>
                        </div> */}
            {/* <div className="services-more mt-100 mt-xs-30">
                            <h2 className="mb-20">Most popular services</h2>
                            <div className="row">
                                {ServicesV1Data.slice(0, 3).map(service =>
                                    <div className="col-lg-4 col-md-6" key={service.id}>
                                        <div className="item">
                                            <Image className="regular-img" src={`/assets/img/icon/${service.icon}`} alt="Image Not Found" width={75} height={60} />
                                            <Image className="light-img" src={`/assets/img/icon/${service.iconLight}`} alt="Image Not Found" width={75} height={60} />
                                            <h4><Link href={`/service-details/${service.id}`}>{service.title}</Link></h4>
                                            <p>{service.text}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
