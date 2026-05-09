"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/counter", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(13475));
  }, []);

  if (count === null) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginTop: "24px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#d4b65e",
        opacity: 0.9,
        letterSpacing: "0.3px",
      }}
    >
      <span style={{ fontSize: "18px" }}>👥</span>
      <span>{count.toLocaleString("en-IN")} visitors have viewed this page</span>
    </div>
  );
}
