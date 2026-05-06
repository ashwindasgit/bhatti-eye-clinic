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

const N = "#0f2447", G = "#c9a84c";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: N, boxShadow: "0 2px 20px rgba(0,0,0,0.25)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `2px solid ${G}` }}>
            <Image src="/logo.jpg" alt="Bhatti Eye Clinic Logo" width={38} height={38} style={{ objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "white", fontSize: "1rem", lineHeight: 1.1 }}>Bhatti Eye Clinic</div>
            <div style={{ color: G, fontSize: "0.58rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>Chandigarh Road, Ludhiana</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ alignItems: "center", gap: "24px" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", color: pathname === l.href ? G : "rgba(255,255,255,0.8)" }}>
              {l.label}
            </Link>
          ))}
          <a href="tel:01617960664" style={{ background: G, color: N, fontWeight: 700, padding: "8px 18px", borderRadius: "4px", fontSize: "0.85rem", textDecoration: "none" }}>
            Call Now
          </a>
        </div>

        {/* Hamburger */}
        <button className="show-mobile" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "24px", padding: "4px" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: N, borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "1rem", fontWeight: 500, textDecoration: "none", color: pathname === l.href ? G : "rgba(255,255,255,0.85)" }}>
              {l.label}
            </Link>
          ))}
          <a href="tel:01617960664" style={{ background: G, color: N, fontWeight: 700, padding: "12px", borderRadius: "4px", textAlign: "center", textDecoration: "none" }}>
            📞 Call Now: 0161-7960664
          </a>
        </div>
      )}
    </nav>
  );
}
