import Link from "next/link";

const N = "#0f2447", G = "#c9a84c";

export default function Footer() {
  return (
    <footer style={{ background: N, color: "white" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
        <div className="grid-3" style={{ gap: "40px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>👁</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem" }}>Bhatti Eye Clinic</div>
                <div style={{ color: G, fontSize: "0.58rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>Ludhiana</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              A legacy of precision and ethical care. Led by Dr. S.M. Bhatti — Former Professor, CMC Ludhiana, with 40+ years of ophthalmological excellence.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "16px" }}>
              <a
                href="https://www.facebook.com/bhattieyeclinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "8px 14px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                }}
              >
                <span aria-hidden style={{ fontSize: "0.95rem" }}>📘</span> Facebook
              </a>
              <a
                href="https://www.youtube.com/@DRSMBHATTI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "8px 14px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                }}
              >
                <span aria-hidden style={{ fontSize: "0.95rem" }}>▶️</span> YouTube
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: G, fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px", fontWeight: 700 }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[{href:"/",l:"Home"},{href:"/about",l:"About Dr. Bhatti"},{href:"/services",l:"Our Services"},{href:"/gallery",l:"Gallery"},{href:"/contact",l:"Contact Us"}].map(x=>(
                <Link key={x.href} href={x.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{x.l}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: G, fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px", fontWeight: 700 }}>Contact & Timings</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>
              <div>📍 Chandigarh Road, Sector 32A, Ludhiana</div>
              <a href="tel:01617960664" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>📞 0161-7960664</a>
              <a href="https://wa.me/917009534336" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>💬 +91 70095 34336</a>
              <div>
                <div>🕒 Mon–Sat: 9:00 AM – 1:30 PM</div>
                <div style={{ paddingLeft: "20px" }}>5:00 PM – 7:00 PM</div>
                <div style={{ color: "rgba(255,255,255,0.35)" }}>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
          © {new Date().getFullYear()} Bhatti Eye Clinic, Ludhiana. All rights reserved.
        </div>
        <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.22)", marginTop: "6px", letterSpacing: "0.5px" }}>
          Powered by <a
            href="https://truetechpro.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(201,168,76,0.55)", textDecoration: "none" }}
          >True Tech Professionals</a>
        </div>
      </div>
    </footer>
  );
}
