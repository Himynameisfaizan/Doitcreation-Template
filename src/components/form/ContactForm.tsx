"use client";

import React, { useState } from "react";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    source: "From -> Contact page",
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
      const res = await fetch("/api/homeform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully! ✅");
        setForm({ name: "", email: "", phone: "", message: "", source: "" });
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
      <form className="contact-form contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name*"
                type="text"
                required
                autoComplete="off"
                value={form.name}
                onChange={handleChange}
              />
              <span className="alert-error" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                required
                autoComplete="off"
                value={form.email}
                onChange={handleChange}
              />
              <span className="alert-error" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control no-arrows"
                id="phone"
                name="phone"
                placeholder="Phone"
                type="number"
                required
                autoComplete="off"
                value={form.phone}
                onChange={handleChange}
              />
              <span className="alert-error" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="comments"
                name="message"
                placeholder="Tell Us About Project *"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <i className="fa fa-paper-plane" /> Get in Touch
                </>
              )}
            </button>

          </div>
            {success && (
              <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
            )}
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
        </div>

        {/* Alert Message */}
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
