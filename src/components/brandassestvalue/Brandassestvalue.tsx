"use client";

import { useState } from "react";

const Brandassestvalue = () => {
  const assets = [
    {
      title: "Brand Design Bundle",
      desc: `This premium branding bundle offers everything you need. All of the included assets 
      have been designed to be suitable for modern digital brands and businesses.`,
      img: "/assets/img/brandAssest/1.jpeg",
      batch: "All in one",
      amount: 4999,
      data: [
        "50 Visiting Cards Designs",
        "50 Letterhead Designs",
        "50 Brochure Designs",
        "50 Fonts Collections",
        "50 Professional PPTs",
        "50 FB Posts Designs",
        "50 Product Mockups",
        "50 Custom Infographic",
      ],
    },
    {
      title: "Visiting Cards",
      desc: "A premium set of 50 fully editable visiting card designs, crafted for modern businesses to create a strong and professional brand impression.",
      img: "/assets/img/brandAssest/2.jpeg",
      batch: "50 visiting cards",
      amount: 3499,
      data: [
        "50+ Visiting Cards Design Collection",
        "Professional Cards Design",
        "Hight Quality Vector Files",
      ],
    },
    {
      title: "Letterhead Design",
      desc: "Premium letterhead templates with fully editable files, designed for professional and consistent brand communication.",
      img: "/assets/img/brandAssest/3.jpeg",
      batch: "50 Letter Head",
      amount: 3499,
      data: [
        "50+ Letterhead Design Collection",
        "Professional Letterhead Design",
        "Hight Quality Vector Files",
      ],
    },
    {
      title: "Brochure Design",
      desc: "Premium social branding templates",
      img: "/assets/img/brandAssest/4.jpeg",
      batch: "50 Brochure design",
      amount: 3499,
      data: [
        "50+ Brochure Design Collection",
        "Professional Brochure Design",
        "Hight Quality Vector Files",
      ],
    },
    {
      title: "Social Media Posts",
      desc: "High-quality product design assets",
      img: "/assets/img/brandAssest/5.jpeg",
      batch: "50 Posts",
      amount: 3499,
      data: [
        "50+ Social Media Post Design Collection",
        "Professional Post Design",
        "Hight Quality Graphic Files",
      ],
    },
    {
      title: "Logo Intro",
      desc: "Complete digital branding ecosystem",
      img: "/assets/img/brandAssest/6.jpeg",
      batch: "Logo with Animation",
      amount: 3499,
      data: [
        "50+ Logo Animation Collection",
        "Professional Intro Design",
        "Hight Quality Motion Files",
      ],
    },
  ];
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <>
      <section className="brand-section default-padding">
        <div className="brand-header">
          <h1>Brand Assets Collection</h1>
          <p>
            Premium branding resources designed to build powerful brand identity
          </p>
        </div>

        <div className="brand-grid">
          {assets.map((item, index) => (
            <div
              className="brand-card"
              key={index}
              onClick={() => setSelectedItem(item)}
            >
              <div className="brand-img">
                <img src={item.img} alt={item.title} />
                <div className="brand-overlay"></div>
              </div>

              <div className="brand-content">
                <div className="name-batch">
                  <h3>{item.title}</h3>
                  <span>
                    <i className="dot"></i> {item.batch}
                  </span>
                </div>
                <p>{item.desc}</p>
                <a className="buyButton">Buy: ₹{item.amount}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedItem && (
        <div
          className="brandPopUpContainer"
          onClick={() => setSelectedItem(null)}
        >
          <div className="brandDataPop" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.desc}</p>
            <h4>Q. What is in this package?</h4>
            <ul className="itemsData">
              {selectedItem.data.map((item: String, index: any) => (
                <li key={index}>
                  <i className="ri-arrow-right-long-line"></i>
                  {item}
                </li>
              ))}
              <li>
                <i className="ri-arrow-right-long-line"></i>
                Full Editable File
              </li>
              <li>
                <i className="ri-arrow-right-long-line"></i>
                Instant Digital Delivery
              </li>
            </ul>
            <i
              className="ri-close-large-line brandCloseButton"
              onClick={() => setSelectedItem(null)}
            ></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Brandassestvalue;
