"use client";
import Image from "next/image";
import AsideLinks from "../asidelinks/AsideLinks";
import DashboardHeading from "../dashboardheading/DashboardHeading";
import { useState } from "react";

const AddPortfolioImageVideo = () => {
  return (
    <>
      <section id="dashboard">
        <div className="dashboard-main-container">
          <div className="dashboard-container">
            <AsideLinks />
            <div className="right-side">
              <DashboardHeading />
              <div className="">
                <div className="dashboard-portfolio-container">
                  <FormContainer />
                  
                  <VideoAndImage/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FormContainer = () => {
  const [upload, setUpload] = useState("image");
  return (
    <>
      <form action="" className="video-upload-form">
        <div className="">
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="logo">Logo</option>
            <option value="packaging">Packaging</option>
            <option value="website">Website</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="">Sub-category</label>
          <select name="" id="">
            <option value="">Select Category</option>
          </select>
        </div>
        <div className="">
          <div className="dashboard-upload-video-image">
            <label htmlFor="">Select upload item</label>
            <div>
              <input
                type="radio"
                name="uploadItem"
                value="image"
                checked={upload === "image"}
                onChange={() => setUpload("image")}
              />
              Image
            </div>
            <div>
              <input
                type="radio"
                name="uploadItem"
                value="video"
                checked={upload === "video"}
                onChange={() => setUpload("video")}
              />
              Video
            </div>
          </div>
          <input
            type="file"
            name=""
            id=""
            accept={upload === "image" ? ".jpg, .png, .webp, .jpeg" : ".mp4"}
          />
        </div>
        <div className="">
          <label htmlFor="">
            Tags, Each tag should be comma ( , ) seprated
          </label>
          <textarea name="" id="" rows={1}></textarea>
        </div>
          <button type="submit" className="upload-btn">Add Image/Video</button>
      </form>
    </>
  );
};

const VideoAndImage = () => {
  return (
    <>
      <div className="portfolio-video-image">
        <div className="dashboard-portfolio-video">
          <h3>Videos</h3>

          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.mp4</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>

          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.mp4</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>

          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.mp4</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>

          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.mp4</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>

        </div>

        <div className="dashboard-portfolio-video">
          <h3>Images</h3>

          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.png</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>

          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.png</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>
          
          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.png</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>

          <div className="dashboard-video-detail">
            <div className="">
              <h4>Logo</h4>
              <p className="video-name">New logo.png</p>
              <p>Real state</p>
            </div>
            <span className="tags-and-delete">
              <p className="dashboard-tags">Tags :- Logo, Real state</p>
              <i className="ri-delete-bin-line"></i>
            </span>
          </div>
          <div className="dashboard-divide"></div>

        </div>
      </div>
    </>
  );
};
export default AddPortfolioImageVideo;
