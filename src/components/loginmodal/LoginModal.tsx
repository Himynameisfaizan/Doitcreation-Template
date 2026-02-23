"use client";

import { useState } from "react";
import { ADMIN_NAME, ADMIN_PASSWORD } from "@/constants/admin";

interface LoginModalProps {
  onSuccess: () => void;
}

export default function LoginModal({ onSuccess }: LoginModalProps) {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (): void => {
    if (name === ADMIN_NAME && password === ADMIN_PASSWORD) {
      onSuccess();
    } else {
      setError("Invalid Admin Name or Password");
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Admin Verification</h2>

        <input
          type="text"
          placeholder="Admin Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <button onClick={handleLogin} style={btnStyle}>
          Verify
        </button>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  minWidth: "320px",
  textAlign: "center",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnStyle: React.CSSProperties = {
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "6px",
  border: "none",
  background: "#000",
  color: "#fff",
  marginTop: "10px",
};
