"use client";
import arrowRightTwo from "../../../public/assets/img/icon/arrow-right-two.png";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const NewsletterV2 = () => {
  const [form, setForm] = useState({
    email: "",
    source: "Footer Newsletter",
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
      const res = await fetch("/api/footerform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully! ✅");
        setForm({ email: "", source: "" });
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
      <form className="newsletter style-two" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          className="form-control"
          name="email"
          autoComplete="off"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Image src={arrowRightTwo} alt="Image Not Found" />
            </>
          )}
        </button>
      </form>
      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
      )}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </>
  );
};

export default NewsletterV2;
