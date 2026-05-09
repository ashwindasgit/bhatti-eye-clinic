"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Bhatti" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const N = "#0f2447", G = "#c9a84c", GB = "#d4b65e";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: N, boxShadow: "0 2px 20px rgba(0,0,0,0.25)" }}>
      {/* Utility bar */}
      <div className="utility-bar">
        <div className="utility-bar-inner">
          <div>📍 Sector 32A, Chandigarh Road, Ludhiana</div>
          <div>🕒 Mon–Sat: 9:00 AM – 1:30 PM | 5:00 PM – 7:00 PM</div>
          <div>
            📞 <a href="tel:01617960664">0161-7960664</a>
            <span style={{ margin: "0 6px", opacity: 0.6 }}>|</span>
            💬 <a href="https://wa.me/917009534336" target="_blank" rel="noopener noreferrer">+91 70095 34336</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", minWidth: 0 }}>
          <div style={{ width: 50, height: 50, flexShrink: 0, overflow: "hidden", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/logo.jpg"
              alt="Bhatti Eye Clinic Logo"
              width={72}
              height={72}
              style={{ objectFit: "cover", objectPosition: "center 42%" }}
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <div className="clinic-name" style={{ color: "#ffffff" }}>Bhatti Eye Clinic</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ alignItems: "center", gap: "24px" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", color: pathname === l.href ? G : "#ffffff" }}>
              {l.label}
            </Link>
          ))}
          <a href="tel:01617960664" style={{ background: G, color: N, fontWeight: 800, padding: "10px 20px", borderRadius: "4px", fontSize: "0.9rem", textDecoration: "none" }}>
            Call Now
          </a>
        </div>

        {/* Hamburger */}
        <button className="show-mobile" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "26px", padding: "4px" }} aria-label="Open menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: N, borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "1.05rem", fontWeight: 600, textDecoration: "none", color: pathname === l.href ? G : "#ffffff" }}>
              {l.label}
            </Link>
          ))}
          <a href="tel:01617960664" style={{ background: G, color: N, fontWeight: 800, padding: "13px", borderRadius: "4px", textAlign: "center", textDecoration: "none" }}>
            📞 Call Now: 0161-7960664
          </a>
        </div>
      )}
    </nav>
  );
}
