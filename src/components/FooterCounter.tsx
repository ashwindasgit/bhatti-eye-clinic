"use client";
import { useEffect, useState } from "react";

export default function FooterCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/counter")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(13475));
  }, []);

  if (count === null) return null;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "24px 16px",
        borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#d4b65e",
          marginBottom: "8px",
          letterSpacing: "0.3px",
        }}
      >
        👥 {count.toLocaleString("en-IN")} visitors
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.75)",
          letterSpacing: "0.5px",
        }}
      >
        🇮🇳 India · 🇺🇸 USA · 🇬🇧 UK · and more
      </div>
    </div>
  );
}
