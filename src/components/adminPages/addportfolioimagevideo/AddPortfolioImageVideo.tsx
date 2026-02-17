import Image from "next/image";
import AsideLinks from "../asidelinks/AsideLinks";
import DashboardHeading from "../dashboardheading/DashboardHeading";

const AddPortfolioImageVideo = () => {
  return (
    <>
      <section id="dashboard">
        <div className="dashboard-main-container">
          <div className="dashboard-container">
            <AsideLinks />
            <div className="right-side">
              <DashboardHeading />
              <div className="dashboard-portfolio-video">
                <div className="dashboard-portfolio-container">
                  <form action="" className="video-upload-form">
                    <div className="">
                      <label htmlFor="">Upload video</label>
                      <input type="file" name="" id="" accept="video/**" />
                    </div>
                    <div className="">
                      <label htmlFor="">Upload image</label>
                      <input type="file" name="" id="" accept="" />
                    </div>
                  </form>
                  <div className="portfolio-video-image">
                    <div className="dashboard-portfolio-video">
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
                    
                    <div className="dashboard-portfolio-image">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPortfolioImageVideo;
