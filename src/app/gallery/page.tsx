"use client";

import Image from "next/image";
import { useState } from "react";

const N = "#0f2447", G = "#c9a84c", C = "#f8f5f0";

type Category = "Infections & Allergies" | "Cataract" | "Corneal Conditions" | "Trauma & Emergencies";

const images: { file: string; label: string; category: Category }[] = [
  { file: "Acute conjunctivitis.jpg", label: "Acute Conjunctivitis", category: "Infections & Allergies" },
  { file: "Pink eye.jpg", label: "Pink Eye", category: "Infections & Allergies" },
  { file: "Subconjunctival haemorrhage.jpg", label: "Subconjunctival Haemorrhage", category: "Infections & Allergies" },
  { file: "Complicated Cataract.jpg", label: "Complicated Cataract", category: "Cataract" },
  { file: "Mature cataract.jpg", label: "Mature Cataract", category: "Cataract" },
  { file: "Intraocular lens with anterior capsule thicking.jpg", label: "IOL with Anterior Capsule Thickening", category: "Cataract" },
  { file: "Corneal dystrophy.jpg", label: "Corneal Dystrophy", category: "Corneal Conditions" },
  { file: "Corneal oedema.jpg", label: "Corneal Oedema", category: "Corneal Conditions" },
  { file: "Fungal Corneal ulcer.jpg", label: "Fungal Corneal Ulcer", category: "Corneal Conditions" },
  { file: "corneal Foreign Body.jpg", label: "Corneal Foreign Body", category: "Corneal Conditions" },
  { file: "Foreign body.jpg", label: "Foreign Body", category: "Trauma & Emergencies" },
  { file: "Foreign body tarsal conjunctiva.jpg", label: "Foreign Body — Tarsal Conjunctiva", category: "Trauma & Emergencies" },
  { file: "FB.jpg", label: "Foreign Body (FB)", category: "Trauma & Emergencies" },
  { file: "Lid laseration & Subconjunctival haemorrhage.jpg", label: "Lid Laceration & Subconjunctival Haemorrhage", category: "Trauma & Emergencies" },
  { file: "Lid trauma.jpg", label: "Lid Trauma", category: "Trauma & Emergencies" },
];

const TABS = ["All", "Infections & Allergies", "Cataract", "Corneal Conditions", "Trauma & Emergencies"] as const;
type Tab = typeof TABS[number];

export default function GalleryPage() {
  const [active, setActive] = useState<Tab>("All");

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      <section className="hero-section" style={{ background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 100%)`, paddingBottom: "50px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ color: G, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Clinical Photography</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white" }}>Gallery</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "12px" }}>
            Clinical cases and patient outcomes from Bhatti Eye Clinic
          </p>
        </div>
      </section>

      <section style={{ background: C, padding: "60px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          {/* Disclaimer */}
          <div style={{ background: "rgba(201,168,76,0.1)", border: `1px solid rgba(201,168,76,0.3)`, borderRadius: "8px", padding: "14px 18px", marginBottom: "28px", fontSize: "0.85rem", color: N }}>
            <strong>Note:</strong> These are real clinical photographs from Dr. Bhatti&apos;s practice, shared for educational awareness. All images are used with appropriate consent.
          </div>

          {/* Filter tabs */}
          <div
            role="tablist"
            aria-label="Filter gallery by category"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "32px",
              justifyContent: "center",
            }}
          >
            {TABS.map((tab) => {
              const isActive = active === tab;
              const count = tab === "All" ? images.length : images.filter((i) => i.category === tab).length;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  style={{
                    background: isActive ? N : "white",
                    color: isActive ? "white" : N,
                    border: `1.5px solid ${isActive ? N : "rgba(15,36,71,0.15)"}`,
                    borderRadius: "999px",
                    padding: "10px 20px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.18s ease",
                    boxShadow: isActive ? "0 4px 14px rgba(15,36,71,0.18)" : "0 2px 8px rgba(15,36,71,0.05)",
                  }}
                >
                  <span>{tab}</span>
                  <span
                    style={{
                      background: isActive ? G : "rgba(15,36,71,0.08)",
                      color: isActive ? N : "#5a6475",
                      borderRadius: "999px",
                      padding: "2px 8px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      minWidth: "22px",
                      textAlign: "center",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid-4" style={{ gap: "16px" }}>
            {filtered.map((img) => (
              <div key={img.file} style={{ background: "white", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 16px rgba(15,36,71,0.08)" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
                  <Image
                    src={`/gallery/${img.file}`}
                    alt={img.label}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div style={{ padding: "10px 12px", fontSize: "0.78rem", color: "#5a6475", textAlign: "center", fontWeight: 600, background: "white" }}>
                  {img.label}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", color: "#5a6475", padding: "40px 0" }}>
              No images in this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
