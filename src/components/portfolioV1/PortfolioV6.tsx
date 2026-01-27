import React from "react";

const Portfolio = () => {
  return (
    <div className="container-full default-padding">
      <div className="row">
        <div className="col-lg-9 portfolio-search">
          <div className="input">
            <input type="text" name="" id="" placeholder="Search" />
            <i className="ri-search-line"></i>
          </div>
        </div>
        <div className="col-lg-3 portfolio-contact d-flex align-items-center justify-content-end gap-4 ">
          <div className="d-flex gap-3">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
          </div>
          <a href="/">Conact</a>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-9">
          <div className="">
            <select name="" id="">
              <option value="">Select Category</option>
              <option value="">Logo</option>
              <option value="">Packaging</option>
              <option value="">Website</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-end">
          <div className="">Showing items: 1290</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
