"use client";
import { useState } from "react";

const BannerForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    source: "Home -> Banner form",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/bannerhomeform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully! ✅");
        setForm({ name: "", email: "", message: "", source: "" });
      } else {
        setError("Failed to send message ❌");
      }
    } catch (err) {
      setError("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="BannerForm">
        <div className="banner-form-main-container">
          <div className="banner-form-container ">
            {/* <h4>Get a personalized quote from Do it creation</h4> */}
            <form action="" onSubmit={handleSubmit}>
              <div className="fullName">
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mobileNo">
                <input
                  type="email"
                  name="email"
                  id=""
                  required
                  placeholder="Email-id"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="message">
                <input
                  type="text"
                  name="message"
                  id=""
                  required
                  placeholder="Describe your requirement"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button>{loading ? "Sending.." : "Submit"}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerForm;
