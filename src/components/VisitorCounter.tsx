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
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "8px",
        padding: "10px 16px",
        background: "rgba(201,168,76,0.1)",
        border: "1px solid rgba(201,168,76,0.35)",
        borderRadius: "999px",
        fontSize: "15px",
        fontWeight: 600,
        color: "#d4b65e",
        letterSpacing: "0.3px",
      }}
    >
      <span style={{ fontSize: "18px" }}>👥</span>
      <span>{count.toLocaleString("en-IN")} visitors have viewed this page</span>
    </div>
  );
}
