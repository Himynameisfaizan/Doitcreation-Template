'use client'
import Image from "next/image";
import logo from "../../../public/assets/img/LOgo-PNG.png";
import Link from "next/link";
import product2 from "../../../public/assets/img/thumb/Swati Ray.png";
import { useState } from "react";

const AdminHome = () => {
  return (
    <>
      <section id="dashboard">
        <div className="dashboard-main-container">
          <div className="dashboard-container">
            <aside className="left-side">
              <div className="">
                <Link href="/">
                  <Image
                    src={logo}
                    style={{
                      width: "330px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    className="logo logo-display"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="dashboard-li-links">
                <ul>
                  <li>
                    <i className="ri-home-4-line"></i> Home
                  </li>
                  <li>
                    <i className="ri-gallery-view"></i> Portfolio
                  </li>
                  <li>
                    <i className="ri-feedback-line"></i> Testmonials
                  </li>
                  <li>
                    <i className="ri-star-line"></i> Brand Logo
                  </li>
                  <li>
                    <i className="ri-user-3-line"></i> Users
                  </li>
                </ul>
              </div>
            </aside>
            <div className="right-side">
              <div className="dashboard-heading">
                <div className="">
                  <h2>Dashboard</h2>
                  <p>Check your website overview and manage it.</p>
                </div>
                <div className="admin-image">
                  <Image
                    src={product2}
                    alt="admin-image"
                    className="do-it-image"
                  />
                  <div className="">
                    <p>Do it creation</p>
                    <a href="/">Signout</a>
                  </div>
                </div>
              </div>
              <div className="dashboard-stats">
                <div className="stats-container">
                  <div className="stats-div total-portfolio-image-video">
                    <h5 className="">
                      <span>Video and Image</span>
                      <i className="ri-gallery-line"></i>
                    </h5>
                    <h2 className="">80</h2>
                    <div className="">
                      <p className="go-add">
                        <span></span>
                        <a href="">Go to add</a>
                      </p>  
                      <p className="go-delete">
                        <span></span>
                        <a href="">Go to delete</a>
                      </p>
                    </div>
                  </div>
                  <div className="stats-div total-videos">
                    <h5 className="">
                      <span>Total Video</span>
                      <i className="ri-file-video-line"></i>
                    </h5>
                    <h2 className="">30</h2>
                    <div className="">
                      <p className="go-add">
                        <span></span>
                        <a href="">Go to add</a>
                      </p>
                      <p className="go-delete">
                        <span></span>
                        <a href="">Go to delete</a>
                      </p>
                    </div>
                  </div>
                  <div className="stats-div total-images">
                    <h5 className="">
                      <span>Total images</span>
                      <i className="ri-file-image-line"></i>
                    </h5>
                    <h2 className="">30</h2>
                    <div className="">
                      <p className="go-add">
                        <span></span>
                        <a href="">Go to add</a>
                      </p>
                      <p className="go-delete">
                        <span></span>
                        <a href="">Go to delete</a>
                      </p>
                    </div>
                  </div>
                  <div className="stats-div total-brand-logos">
                    <h5 className="">
                      <span>Brand logos</span>
                      <i className="ri-star-line"></i>
                    </h5>
                    <h2 className="">20</h2>
                    <div className="">
                      <p className="go-add">
                        <span></span>
                        <a href="">Go to add</a>
                      </p>
                      <p className="go-delete">
                        <span></span>
                        <a href="">Go to delete</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboardTestmonial-clients">
                <div className="dashboard-testmonial">
                    <div className="dashboard-testmonial-container">
                      <h3>Client's review</h3>

                      <div className="">
                        <Image
                          src={product2}
                          alt="admin-image"
                          className="client-image"
                        />
                        
                          <ClientReview text="My experience with you has been very good and I am very happy with your work.
                          You have passion and patience.It would be a great pleasure to work with you in the 
                          future and to share your work with everyone. It was a great satisfaction for me. 
                          Thank you, as I do. We will work together in the future. 
                          Best wishes for the future.Thank you. Chakme Transolution PVT LTD."/>
                      </div>
                      <div className="dashboard-divide"></div>
                      <div className="">
                        <Image
                          src={product2}
                          alt="admin-image"
                          className="client-image"
                        />
                        
                          <ClientReview text="My experience with you has been very good and I am very happy with your work.
                          You have passion and patience.It would be a great pleasure to work with you in the 
                          future and to share your work with everyone. It was a great satisfaction for me. 
                          Thank you, as I do. We will work together in the future. 
                          Best wishes for the future.Thank you. Chakme Transolution PVT LTD."/>
                      </div>
                      <div className="dashboard-divide"></div>

                      <div className="">
                        <Image
                          src={product2}
                          alt="admin-image"
                          className="client-image"
                        />
                        
                          <ClientReview text="My experience with you has been very good and I am very happy with your work.
                          You have passion and patience.It would be a great pleasure to work with you in the 
                          future and to share your work with everyone. It was a great satisfaction for me. 
                          Thank you, as I do. We will work together in the future. 
                          Best wishes for the future.Thank you. Chakme Transolution PVT LTD."/>
                      </div>
                      <div className="dashboard-divide"></div>

                      <div className="">
                        <Image
                          src={product2}
                          alt="admin-image"
                          className="client-image"
                        />
                        
                          <ClientReview text="My experience with you has been very good and I am very happy with your work.
                          You have passion and patience.It would be a great pleasure to work with you in the 
                          future and to share your work with everyone. It was a great satisfaction for me. 
                          Thank you, as I do. We will work together in the future. 
                          Best wishes for the future.Thank you. Chakme Transolution PVT LTD."/>
                      </div>
                      <div className="dashboard-divide"></div>

                      <div className="">
                        <Image
                          src={product2}
                          alt="admin-image"
                          className="client-image"
                        />
                        
                          <ClientReview text="My experience with you has been very good and I am very happy with your work.
                          You have passion and patience.It would be a great pleasure to work with you in the 
                          future and to share your work with everyone. It was a great satisfaction for me. 
                          Thank you, as I do. We will work together in the future. 
                          Best wishes for the future.Thank you. Chakme Transolution PVT LTD."/>
                      </div>
                      <div className="dashboard-divide"></div>
                      
                    </div>
                </div>
                <div className="dashboard-clients">
                  <div className="client-testmonial-container">
                    <h3>Users</h3>
                    <div className="dashboard-user-detail">
                      <div className="">
                        <h4>Faizan</h4>
                        <a href="">faizansheikh@gmail.com</a>
                        <a href="">9099568908</a>
                      </div>
                      <p>I want to design webste</p>
                    </div>
                    <div className="dashboard-divide"></div>

                    <div className="dashboard-user-detail">
                      <div className="">
                        <h4>Faizan</h4>
                        <a href="">faizansheikh@gmail.com</a>
                        <a href="">9099568908</a>
                      </div>
                      <p>I want to design webste</p>
                    </div>
                    <div className="dashboard-divide"></div>

                    <div className="dashboard-user-detail">
                      <div className="">
                        <h4>Faizan</h4>
                        <a href="">faizansheikh@gmail.com</a>
                        <a href="">9099568908</a>
                      </div>
                      <p>I want to design webste</p>
                    </div>
                    <div className="dashboard-divide"></div>

                    <div className="dashboard-user-detail">
                      <div className="">
                        <h4>Faizan</h4>
                        <a href="">faizansheikh@gmail.com</a>
                        <a href="">9099568908</a>
                      </div>
                      <p>I want to design webste</p>
                    </div>
                    <div className="dashboard-divide"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type ReadmoreProps = {
  text: string;
  limit?: number;
};

const ClientReview = ({ text, limit = 50 }: ReadmoreProps) => {
  const [expanded, setExpanded] = useState(false);

  const words = text.split(" ");
  const showButton = words.length > limit;

  const displayText = expanded
    ? text
    : words.slice(0, limit).join(" ") + "...";

  return (
    <div>
      <p className="dashboard-review-para">{displayText}</p>

      {showButton && (
        <span
          onClick={() => setExpanded(!expanded)}
          style={{
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {expanded ? "Read less" : "Read more"}
        </span>
      )}
    </div>
  );
};
export default AdminHome;
