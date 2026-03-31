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
      product: "Mega_bundle",
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
      product: "Visiting_cards",
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
      product: "Letter_head",
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
      product: "Brochure_design",
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
      product: "Social_post",
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
      product: "Logo_animation",
      data: [
        "50+ Logo Animation Collection",
        "Professional Intro Design",
        "Hight Quality Motion Files",
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [paymentItem, setPaymentItem] = useState<any>(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const transaction = async (
    price: number,
    product: string,
    userId: number,
    email: string,
  ) => {
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price, product, userId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error("Payment init failed");

      //  Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Do It Creation",
        description: product,
        order_id: data.orderId,

        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                user_id: userId,
                email: email,
              }),
            });

            const data = await verifyRes.json();

            if (data.success) {
              alert("Payment successful");
            } else {
              alert("Payment verification failed");
            }
          } catch (err) {
            console.error(err);
            alert("Unable to get data");
          }
        },
        theme: {
          color: "#000000",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

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
            <div className="brand-card" key={index}>
              <div
                className="brand-img"
                onClick={() => setSelectedItem(item)}
                style={{ cursor: "pointer" }}
              >
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
                <div className="priceContainer">
                  <button
                    className="buyButton"
                    onClick={() => {
                      setPaymentItem(item);
                      setShowForm(true);
                    }}
                  >
                    Buy Now
                  </button>

                  <div className="priceBox">
                    <span className="oldPrice">₹6999</span>
                    <span className="newPrice">₹{item.amount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div className="brandDetailPopBack" onClick={() => setShowForm(false)}>
          <div
            className="brandDetailPopForm"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginBottom: "15px" }}>Enter Details to Continue</h3>
            <p>Fill carefully! Drive link will be send on provided mail</p>

            <input
              className="confirm-detail"
              type="text"
              placeholder="Your Name"
              required
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />

            <input
              className="confirm-detail"
              type="email"
              placeholder="example@mail.com"
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <input
              className="confirm-detail"
              type="text"
              placeholder="+91"
              required
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#000",
                color: "#fefefe",
                border: "none",
                cursor: "pointer",
              }}
              onClick={async () => {
                if (!userData.name || !userData.email) {
                  alert("Please fill all fields");
                  return;
                }

                //  user check
                const res = await fetch("/api/user-check", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                });
                const data = await res.json();

                if (!data.success) {
                  alert("User error");
                  return;
                }

                setUserData({
                  name: "",
                  email: "",
                  phone: "",
                });
                //  close popup
                setShowForm(false);

                // start payment
                await transaction(
                  paymentItem.amount,
                  paymentItem.product,
                  data.userId,
                  data.email,
                );
              }}
            >
              Continue to Pay
            </button>
          </div>
        </div>
      )}

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
