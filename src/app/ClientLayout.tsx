"use client";

import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        visibility: visible ? "visible" : "hidden",
        transition: 'all ease-in-out 500'
      }}
    >
      {children}
    </div>
  );
}
