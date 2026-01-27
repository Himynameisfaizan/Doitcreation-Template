import React from "react";

export const HomeContact = () => {
  return (
    <>
      <div className="panel py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="sub-title">Contact form</h4>
            <h2 className="title">Get in Touch!</h2>
          </div>
          <div className="row">
            <div className="col-lg-8" style={{ padding: "0 20px" }}>
              <div className="d-flex flex-column gap-5">
                <div className="">
                  {/* <h4>Feel Free to Connect</h4> */}
                  <div className="" style={{ fontSize: "14px" }}>
                    Do you have question? Feel free to connect with us. We
                    create logo, website, Packaging and many
                    <br />
                    more which help to you expand your business.
                  </div>
                </div>
                <div className="contact-form-parent">
                  <div className="d-flex flex-column">
                    <label htmlFor="">
                      Full Name<span> *</span>
                    </label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="">
                      Email<span> *</span>
                    </label>
                    <input type="email" name="" id="" />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="">
                      Mobile no.<span> *</span>
                    </label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" rows={6}></textarea>
                  </div>
                  <div className="">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 contact-detail bg-gray">
              <div className="">
                <h4>Hii! We are here to help you</h4>
                <div className="d-flex flex-column gap-3">
                  <div className="contact-icon-container ">
                    <i className="ri-mic-fill"></i>
                    <div className="divider-vertical"></div>
                    <div className="icon-info">
                      <div className="">Contact no.</div>
                      <a className="" href="tel:9560237516">
                        +91 9560237516
                      </a>
                    </div>
                  </div>
                  <div className="contact-icon-container ">
                    <i className="ri-mail-fill"></i>
                    <div className="divider-vertical"></div>
                    <div className="icon-info">
                      <div className="">Email</div>
                      <a className="" href="mailto:support@doitcreation.com">
                        support@doitcreation.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-icon-container ">
                    <i className="ri-map-pin-2-fill"></i>
                    <div className="divider-vertical"></div>
                    <div className="icon-info">
                      <div className="">Location</div>
                      <a className="" href="tel:8674563454">
                        C - 1, 132, C Block, Kailash Hills, Nangloi, New Delhi,
                        Delhi 110086
                      </a>
                    </div>
                  </div>
                  <div className="divider-horizontal"></div>
                  <div className="contact-social-icon">
                    <i className="ri-facebook-fill"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-x-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
