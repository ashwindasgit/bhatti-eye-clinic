import Link from "next/link";
import VisitorCounter from "@/components/VisitorCounter";

const N = "#0f2447", G = "#c9a84c", GB = "#d4b65e", C = "#f8f5f0";

const stats = [
  { n: "40+", l: "Years of Experience" }, { n: "90,000+", l: "Eye Surgeries" },
  { n: "CMC", l: "Former Professor" }, { n: "FAIMER", l: "Fellow" },
];

const services = [
  {
    icon: "🔬",
    title: "Advanced Cataract Surgery",
    desc: "Phaco — stitchless lens surgery & SICS with premium IOLs. Quick recovery within 4 hours.",
    href: "/services#cataract",
  },
  {
    icon: "👓",
    title: "Computerized Eye Testing",
    desc: "Precise computerized refraction, contact lenses & glasses for all age groups.",
    href: "/services#eyetest",
  },
  {
    icon: "👁️",
    title: "Glaucoma, Dry Eye & CVS",
    desc: "Expert care for glaucoma, dry eye disease and Computer Vision Syndrome.",
    href: "/services#glaucoma",
  },
  {
    icon: "🩺",
    title: "Squint, Eyelid & Surgical Care",
    desc: "Complete surgical solutions for squint, eyelid disorders and other eye conditions.",
    href: "/services#pediatric",
  },
  {
    icon: "🚨",
    title: "Emergency Eye Care",
    desc: "Reliable, prompt response for infections, injuries and sudden eye issues.",
    href: "/services#infections",
  },
  {
    icon: "🏆",
    title: "40+ Years · 90,000+ Surgeries",
    desc: "Trusted, affordable & ethical care from one of North India's most experienced surgeons.",
    href: "/about",
  },
];

const pillars = [
  {
    title: "Surgical Excellence",
    items: [
      { l: "Cataract (Phaco & SICS)", d: "Modern, sutureless lens surgery" },
      { l: "Specialty Surgery", d: "Expert correction for Squint, Glaucoma, Pterygium, and Entropion" },
    ],
  },
  {
    title: "Modern Lifestyle Clinic",
    items: [
      { l: "Dry Eye & MGD", d: "Diagnostic care for Meibomian Gland Dysfunction" },
      { l: "Computer Vision Syndrome (CVS)", d: "Specialized solutions for digital eye strain" },
      { l: "Retina Health", d: "Management of Diabetic & Hypertensive Retinopathy" },
    ],
  },
  {
    title: "Pediatric & Preventative",
    items: [
      { l: "Myopia Control", d: "Addressing the “Post-COVID Myopia Epidemic” in school children" },
      { l: "Computerized Testing", d: "Precision eye exams for all ages" },
    ],
  },
  {
    title: "Infections & Allergies",
    items: [
      { l: "Acute Care", d: "Treatment for Infectious Conjunctivitis" },
      { l: "Chronic Allergy", d: "Specialized management for Vernal/Spring Catarrh and Allergic Conjunctivitis" },
    ],
  },
];

const trust = [
  { l: "Academic Authority", d: "Led by a Former Professor with 40+ years of teaching and surgical mentorship" },
  { l: "Surgical Mastery", d: "One of the highest surgical volumes in the region, ensuring your eyes are in the most practiced hands" },
  { l: "Integrity First", d: "We prioritize ethical diagnosis. Surgery is only recommended when it is the best path for your lifestyle" },
  { l: "Advanced Technology", d: "Equipped with state-of-the-art diagnostic and surgical tools for Micro-Incision Cataract Surgery" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 60%, ${N} 100%)`, paddingTop: "140px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div className="grid-2" style={{ alignItems: "center" }}>
            {/* Left */}
            <div>
              <div style={{ display: "inline-block", background: "rgba(201,168,76,0.18)", border: `1px solid rgba(201,168,76,0.45)`, color: GB, fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", padding: "6px 14px", borderRadius: "2px", marginBottom: "20px", fontWeight: 700 }}>
                Chandigarh Road, Sector 32A · Ludhiana
              </div>
              <h1 className="hero-headline" style={{ marginBottom: "16px" }}>
                A Legacy of Precision.<br />
                <span style={{ color: G }}>A Future of Clear Vision.</span>
              </h1>
              <p style={{ color: GB, fontSize: "18px", fontWeight: 500, marginBottom: "26px", lineHeight: 1.5 }}>
                Advanced Cataract Surgery · Computerized Eye Testing · Complete Eye Care
              </p>
              <div className="flex-wrap-row" style={{ marginBottom: "24px" }}>
                <a href="tel:01617960664" style={{ background: G, color: N, fontWeight: 800, padding: "14px 28px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "1rem", textDecoration: "none" }}>
                  📞 Book Appointment
                </a>
                <Link href="/services" style={{ border: "2px solid rgba(255,255,255,0.45)", color: "#ffffff", padding: "12px 26px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "1rem", fontWeight: 700, textDecoration: "none" }}>
                  Our Services →
                </Link>
              </div>
              <VisitorCounter />
              <p style={{ color: "#ffffff", fontSize: "1rem", lineHeight: 1.7, fontWeight: 500, marginTop: "20px" }}>
                Led by Dr. S.M. Bhatti — Former Professor &amp; Principal of CMC Ludhiana — bringing four decades of world-class ophthalmological care to your community.
              </p>
            </div>

            {/* Stats card */}
            <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "12px", padding: "32px", marginTop: "8px" }}>
              <div className="grid-4">
                {stats.map((s) => (
                  <div key={s.l} style={{ textAlign: "center", padding: "8px" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 800, color: G }}>{s.n}</div>
                    <div style={{ color: "#ffffff", fontSize: "0.78rem", marginTop: "6px", fontWeight: 600, opacity: 0.85 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.18)", marginTop: "22px", paddingTop: "14px", color: GB, fontSize: "0.7rem", letterSpacing: "1.5px", textTransform: "uppercase", textAlign: "center", fontWeight: 700 }}>
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
            <div style={{ color: N, fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 700 }}>What We Treat</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: N }}>Comprehensive Eye Care Services</h2>
            <div style={{ width: "52px", height: "3px", background: G, margin: "14px auto 0" }} />
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ background: "white", borderRadius: "8px", padding: "28px 22px", boxShadow: "0 2px 20px rgba(15,36,71,0.08)", display: "block", textDecoration: "none", color: "inherit", borderBottom: `3px solid ${G}` }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "14px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 800, color: N, marginBottom: "10px", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: "0.95rem", color: "#3d4757", lineHeight: 1.6, fontWeight: 500 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/services" style={{ border: `2px solid ${N}`, color: N, padding: "13px 30px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: N, padding: "70px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: GB, fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 700 }}>Four Pillars of Care</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#ffffff" }}>Comprehensive, Specialized Excellence</h2>
            <div style={{ width: "52px", height: "3px", background: G, margin: "14px auto 0" }} />
          </div>
          <div className="grid-4">
            {pillars.map((p, i) => (
              <div key={p.title} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", padding: "24px 20px" }}>
                <div style={{ color: GB, fontSize: "0.7rem", letterSpacing: "1.5px", fontWeight: 800, marginBottom: "6px" }}>{String.fromCharCode(65 + i)}.</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: "1.05rem", fontWeight: 800, marginBottom: "14px", lineHeight: 1.3 }}>{p.title}</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {p.items.map((item) => (
                    <li key={item.l} style={{ color: "#ffffff", fontSize: "0.9rem", lineHeight: 1.55 }}>
                      <div style={{ fontWeight: 700, color: GB, marginBottom: "2px" }}>{item.l}</div>
                      <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item.d}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PATIENTS TRUST US */}
      <section style={{ background: C, padding: "70px 0" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: N, fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 700 }}>Why Patients Trust Us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: N }}>Experience You Can Trust. Ethics You Can Count On.</h2>
            <div style={{ width: "52px", height: "3px", background: G, margin: "14px auto 0" }} />
          </div>
          <div className="grid-2">
            {trust.map((t) => (
              <div key={t.l} style={{ background: "white", borderRadius: "8px", padding: "24px 22px", borderLeft: `4px solid ${G}`, boxShadow: "0 2px 18px rgba(15,36,71,0.06)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: N, fontSize: "1.1rem", fontWeight: 800, marginBottom: "8px" }}>{t.l}</h3>
                <p style={{ color: "#3d4757", fontSize: "0.95rem", lineHeight: 1.65, fontWeight: 500 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DR. BHATTI TEASER */}
      <section style={{ background: "white", padding: "70px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ color: N, fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 700 }}>Our Founder</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: N, marginBottom: "14px" }}>Dr. S.M. Bhatti</h2>
          <div style={{ width: "52px", height: "3px", background: G, margin: "0 auto 20px" }} />
          <p style={{ color: "#3d4757", lineHeight: 1.75, marginBottom: "26px", fontSize: "1.02rem", fontWeight: 500 }}>
            Former Professor and Principal of Ophthalmology at CMC Ludhiana — one of North India&apos;s most prestigious medical institutions. Now dedicated entirely to ethical, affordable patient care at Bhatti Eye Clinic.
          </p>
          <Link href="/about" style={{ background: N, color: "white", padding: "14px 30px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
            Read Full Profile →
          </Link>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: G, padding: "44px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: N }}>Book Your Eye Consultation Today</h3>
            <p style={{ color: N, marginTop: "6px", fontSize: "0.95rem", fontWeight: 600 }}>Mon – Sat: 9:00 AM – 1:30 PM &amp; 5:00 PM – 7:00 PM</p>
          </div>
          <div className="flex-wrap-row">
            <a href="tel:01617960664" style={{ background: N, color: "white", padding: "14px 26px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
              📞 0161-7960664
            </a>
            <Link href="/contact" style={{ border: `2px solid ${N}`, color: N, padding: "12px 24px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
