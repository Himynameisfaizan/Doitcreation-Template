"use client";
import { useState } from "react";
import AsideLinks from "../asidelinks/AsideLinks";
import DashboardHeading from "../dashboardheading/DashboardHeading";
import product1 from "../../../../public/assets/img/thumb/Milind Dhage.png";
import product2 from "../../../../public/assets/img/thumb/Raj Kishore Mohanty.png";
import Image from "next/image";

const dummyTestimonials = [
  {
    image: product1,
    name: "Milind Dhage",
    reviews: "5",
    photos: 3,
    time: "a month ago",
    para: "My experience with you has been very good and I am very happy with your work.You have passion and patience.It would be a great pleasure to work with you in the future and to share your work with everyone. It was a great satisfaction for me. Thank you, as I do. We will work together in the future. Best wishes for the future.Thank you. Chakme Transolution PVT LTD.",
  },
  {
    image: product2,
    name: "Raj Kishore Mohanty",
    reviews: "117",
    photos: 4,
    time: "a month ago",
    para: "Absolutely Marvelous. Our concept and expectations translated into to a beautiful logo. The delivery period is also very quick. We strongly recommend for Do It Creation.",
  },
  {
    image: product1,
    name: "Milind Dhage",
    reviews: "5",
    photos: 3,
    time: "a month ago",
    para: "My experience with you has been very good and I am very happy with your work.You have passion and patience.It would be a great pleasure to work with you in the future and to share your work with everyone. It was a great satisfaction for me. Thank you, as I do. We will work together in the future. Best wishes for the future.Thank you. Chakme Transolution PVT LTD.",
  },
  {
    image: product2,
    name: "Raj Kishore Mohanty",
    reviews: "117",
    photos: 4,
    time: "a month ago",
    para: "Absolutely Marvelous. Our concept and expectations translated into to a beautiful logo. The delivery period is also very quick. We strongly recommend for Do It Creation.",
  },
];

export const Addtestmonials = () => {
  return (
    <>
      <section id="dashboard">
        <div className="dashboard-main-container">
          <div className="dashboard-container">
            <AsideLinks />
            <div className="right-side">
              <DashboardHeading />

              <TestimonialSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const TestimonialSection = () => {
  const [data, setData] = useState(dummyTestimonials);

  return (
    <div className="add-client-testmonial">
      {/* ===== Add Testimonial Form ===== */}
      <div className="testimonial-form-box">
        <h3>Add Testimonial</h3>
        <form className="testimonial-form">
          <input type="text" placeholder="Client Name" />
          <input type="file" placeholder="User Image" />

          <input type="text" placeholder="Reviews (e.g. 2 Reviews)" />

          <input
            type="text"
            placeholder="Time (e.g. 2 week ago / 1 month ago)"
          />

          <input type="number" placeholder="Photos (0 / 1 / 2)" />

          <textarea rows={3} placeholder="Testimonial Text" />

          <button type="submit" className="upload-btn">
            Add Testimonial
          </button>
        </form>
      </div>

      <div className="testimonial-display-box">
        <h3>Client Testimonials</h3>

        {/* Bottom List Layout */}
        <div className="testimonial-table">
          <div className="testimonial-table-header">
            <span>S.No</span>
            <span>Name</span>
            <span>Text</span>
            <span style={{textAlign:'center'}}>Action</span>
          </div>

          {data.map((item, index) => (
            <div className="testimonial-table-row" key={index}>
              <div className="testmonial-table-main-detail">
                <span>{index + 1}</span>
                <span className="testmonial-table-image-name">
                  <Image
                    src={item.image}
                    alt=""
                    className="testmonial-table-client-image"
                  />
                  <span>{item.name}</span>
                </span>
                <span className="testimonial-row-text">
                  <ClientReview text={item.para} />
                </span>
                <span className="testimonial-actions">
                  <i className="ri-delete-bin-line delete"></i>
                  <i className="ri-edit-2-fill edit"></i>
                </span>
              </div>
              <div className="testmonial-table-other-detail">
                <span>Reviews: {item.reviews},</span>
                <span>Photos: {item.photos},</span>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type ReadmoreProps = {
  text: string;
  limit?: number;
};

const ClientReview = ({ text, limit = 20 }: ReadmoreProps) => {
  const [expanded, setExpanded] = useState(false);

  const words = text.split(" ");
  const showButton = words.length > limit;

  const displayText = expanded ? text : words.slice(0, limit).join(" ") + "...";

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
