"use client";
import { useEffect, useState } from "react";

type Country = {
  country_code: string;
  country_name: string;
  flag_emoji: string;
  visit_count: number;
};

const FALLBACK_COUNT = 7341;
const FALLBACK_COUNTRIES: Country[] = [
  { country_code: "IN", country_name: "India", flag_emoji: "🇮🇳", visit_count: FALLBACK_COUNT },
];

export default function FooterCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("/api/counter", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCount(typeof data.count === "number" ? data.count : FALLBACK_COUNT);
        setCountries(Array.isArray(data.countries) && data.countries.length > 0 ? data.countries : FALLBACK_COUNTRIES);
      })
      .catch(() => {
        setCount(FALLBACK_COUNT);
        setCountries(FALLBACK_COUNTRIES);
      });
  }, []);

  if (count === null) return null;

  const top = countries.slice(0, 5);
  const flagLine = top.map((c) => `${c.flag_emoji} ${c.country_name}`).join(" · ");
  const suffix = countries.length >= 3 ? " · and more" : "";

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
          fontSize: "20px",
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
          color: "rgba(255,255,255,0.78)",
          letterSpacing: "0.4px",
        }}
      >
        {flagLine}{suffix}
      </div>
    </div>
  );
}
