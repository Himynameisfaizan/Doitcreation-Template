"use client";

import { ReactNode, useEffect, useState } from "react";
import LoginModal from "@/components/loginmodal/LoginModal";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(true);

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsVerified(true);
      setShowModal(false);
    }
  }, []);

  return (
    <>
      {showModal && !isVerified && (
        <LoginModal
          onSuccess={() => {
            setIsVerified(true);
            setShowModal(false);
            sessionStorage.setItem("adminAuth", "true");
          }}
        />
      )}

      {isVerified && children}
    </>
  );
}
