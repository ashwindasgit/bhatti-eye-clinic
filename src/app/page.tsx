import Link from "next/link";

const N = "#0f2447", G = "#c9a84c", C = "#f8f5f0";

const stats = [
  { n: "40+", l: "Years of Experience" }, { n: "90,000+", l: "Eye Surgeries" },
  { n: "CMC", l: "Former Professor" }, { n: "FAIMER", l: "Fellow" },
];
const services = [
  { icon: "🔬", title: "Advanced Cataract Surgery", desc: "No-stitch, no-injection phacoemulsification with premium IOLs for quick recovery.", href: "/services#cataract" },
  { icon: "👁️", title: "Glaucoma & Retina", desc: "Early detection and management of glaucoma — the silent thief of sight — and diabetic retinopathy.", href: "/services#glaucoma" },
  { icon: "👶", title: "Pediatric Eye Care", desc: "Specialized care for lazy eye, squint correction, and refractive errors in children.", href: "/services#pediatric" },
  { icon: "💧", title: "Dry Eye & CVS Clinic", desc: "Expert diagnosis and treatment for chronic dry eye and Computer Vision Syndrome.", href: "/services#dryeye" },
];
const pillars = [
  { title: "Surgical Excellence", items: ["Cataract (Phaco & SICS)", "Squint Correction", "Glaucoma Surgery", "Pterygium & Entropion"] },
  { title: "Modern Lifestyle", items: ["Dry Eye & MGD", "Computer Vision Syndrome", "Diabetic Retinopathy", "Hypertensive Retinopathy"] },
  { title: "Pediatric Care", items: ["Myopia Control", "Lazy Eye (Amblyopia)", "Squint Evaluation", "Eye Testing"] },
  { title: "Infections & Allergies", items: ["Infectious Conjunctivitis", "Vernal Catarrh", "Allergic Conjunctivitis", "Eye Emergencies"] },
];
const whyUs = [
  "40+ years of clinical, surgical & academic excellence",
  "90,000+ successful eye surgeries performed",
  "Former Professor & Principal, CMC Ludhiana",
  "Advanced micro-incision surgical techniques",
  "Ethical diagnosis — surgery only when truly needed",
  "Affordable, patient-centered care",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 60%, ${N} 100%)`, paddingTop: "90px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div className="grid-2" style={{ alignItems: "center" }}>
            {/* Left */}
            <div>
              <div style={{ display: "inline-block", background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.35)`, color: G, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", padding: "6px 14px", borderRadius: "2px", marginBottom: "20px" }}>
                Chandigarh Road, Sector 32A · Ludhiana
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: "18px" }}>
                A Legacy of Precision.<br />
                <span style={{ color: G }}>A Future of Clear Vision.</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "28px" }}>
                Led by Dr. S.M. Bhatti — Former Professor & Principal of CMC Ludhiana — bringing four decades of world-class ophthalmological care to your community.
              </p>
              <div className="flex-wrap-row">
                <a href="tel:01617960664" style={{ background: G, color: N, fontWeight: 700, padding: "13px 26px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", textDecoration: "none" }}>
                  📞 Book Appointment
                </a>
                <Link href="/services" style={{ border: "2px solid rgba(255,255,255,0.35)", color: "white", padding: "11px 24px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>
                  Our Services →
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "12px", padding: "32px", marginTop: "8px" }}>
              <div className="grid-4">
                {stats.map((s) => (
                  <div key={s.l} style={{ textAlign: "center", padding: "8px" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: G }}>{s.n}</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginTop: "4px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "22px", paddingTop: "14px", color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", letterSpacing: "1.5px", textTransform: "uppercase", textAlign: "center" }}>
                Dr. S.M. Bhatti · MBBS · DOMS · MS (Ophth) · FAIMER Fellow
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: C, padding: "70px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: G, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>What We Treat</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: N }}>Comprehensive Eye Care Services</h2>
            <div style={{ width: "52px", height: "3px", background: G, margin: "14px auto 0" }} />
          </div>
          <div className="grid-4">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ background: "white", borderRadius: "8px", padding: "26px 20px", boxShadow: "0 2px 20px rgba(15,36,71,0.07)", display: "block", textDecoration: "none", color: "inherit", borderBottom: `3px solid ${G}` }}>
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: N, marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#5a6475", lineHeight: 1.65 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/services" style={{ border: `2px solid ${N}`, color: N, padding: "12px 28px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: N, padding: "70px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div className="grid-2" style={{ alignItems: "start", gap: "48px" }}>
            <div>
              <div style={{ color: G, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Why Patients Choose Us</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "white", marginBottom: "18px" }}>
                Experience You Can Trust. Ethics You Can Count On.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "24px", fontSize: "0.95rem" }}>
                We bring the advanced technology of a corporate hospital with the honest, personalized care of a dedicated specialist.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {whyUs.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: G, marginTop: "2px", flexShrink: 0 }}>✔</span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid-2" style={{ gap: "14px" }}>
              {pillars.map((p) => (
                <div key={p.title} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", padding: "20px 16px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px" }}>{p.title}</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {p.items.map((item) => (
                      <li key={item} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", display: "flex", gap: "6px" }}>
                        <span style={{ color: G }}>▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DR. BHATTI TEASER */}
      <section style={{ background: C, padding: "70px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ color: G, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Our Founder</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: N, marginBottom: "14px" }}>Dr. S.M. Bhatti</h2>
          <div style={{ width: "52px", height: "3px", background: G, margin: "0 auto 20px" }} />
          <p style={{ color: "#5a6475", lineHeight: 1.75, marginBottom: "26px" }}>
            Former Professor and Principal of Ophthalmology at CMC Ludhiana — one of North India&apos;s most prestigious medical institutions. Now dedicated entirely to ethical, affordable patient care at Bhatti Eye Clinic.
          </p>
          <Link href="/about" style={{ background: N, color: "white", padding: "13px 28px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
            Read Full Profile →
          </Link>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: G, padding: "44px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 700, color: N }}>Book Your Eye Consultation Today</h3>
            <p style={{ color: "rgba(15,36,71,0.7)", marginTop: "6px", fontSize: "0.9rem" }}>Mon – Sat: 9:00 AM – 1:30 PM &amp; 5:00 PM – 7:00 PM</p>
          </div>
          <div className="flex-wrap-row">
            <a href="tel:01617960664" style={{ background: N, color: "white", padding: "13px 24px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              📞 0161-7960664
            </a>
            <Link href="/contact" style={{ border: `2px solid ${N}`, color: N, padding: "11px 22px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
