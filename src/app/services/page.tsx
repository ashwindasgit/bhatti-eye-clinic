import Link from "next/link";

const N = "#0f2447", G = "#c9a84c", C = "#f8f5f0";

const services = [
  {
    id: "cataract", icon: "🔬", title: "Advanced Cataract Surgery", subtitle: "Phacoemulsification & SICS",
    badge: "No-Stitch · No-Injection · No-Bandage",
    desc: "Restore your vision with the most advanced cataract removal technology available. We specialize in Micro-Incision Cataract Surgery (MICS) using premium intraocular lenses (IOLs) that minimize dependence on glasses post-surgery.",
    points: ["Phacoemulsification (Phaco) — modern, sutureless lens surgery", "SICS — Small Incision Cataract Surgery for cost-effective care", "Premium IOL options: Monofocal, Multifocal, Toric", "Recovery within 4 hours of surgery", "Suitable for complicated cataract cases"],
  },
  {
    id: "glaucoma", icon: "👁️", title: "Glaucoma & Retina Management", subtitle: "Early Detection & Expert Care",
    badge: "The Silent Thief of Sight — Caught Early",
    desc: "Glaucoma causes irreversible vision loss without early symptoms. Our comprehensive screening and ongoing management program ensures you never face preventable blindness. We also manage diabetic and hypertensive retinopathy.",
    points: ["Tonometry & optic nerve evaluation", "Medical and surgical glaucoma management", "Diabetic Retinopathy screening & treatment", "Hypertensive Retinopathy management", "Vitreoretinal consultations"],
  },
  {
    id: "pediatric", icon: "👶", title: "Pediatric Eye Care & Squint", subtitle: "Specialized Care for Children",
    badge: "Every Child Deserves Clear Vision",
    desc: "Children's eyes require a specialized, gentle approach. From managing refractive errors to treating amblyopia (lazy eye) and correcting squint, we ensure your child's visual development stays on track.",
    points: ["Computerized eye testing for all ages", "Squint (Strabismus) evaluation & surgical correction", "Amblyopia (Lazy Eye) treatment & patching therapy", "Myopia control — addressing post-COVID epidemic", "Pediatric cataract and other conditions"],
  },
  {
    id: "dryeye", icon: "💧", title: "Dry Eye & Computer Vision Clinic", subtitle: "Modern Lifestyle Eye Care",
    badge: "Relief for the Digital Generation",
    desc: "Chronic dry eye and computer vision syndrome affect millions of screen users. Our specialized clinic provides accurate diagnosis and targeted treatment for these modern-day challenges.",
    points: ["Dry Eye Disease (DED) diagnosis & management", "Meibomian Gland Dysfunction (MGD) care", "Computer Vision Syndrome (CVS) treatment", "Blepharitis management", "Customized lubricant & treatment plans"],
  },
  {
    id: "infections", icon: "🛡️", title: "Infections, Allergies & Emergencies", subtitle: "Prompt, Reliable Eye Care",
    badge: "Seen Quickly. Treated Right.",
    desc: "Eye infections, allergies, and injuries can worsen rapidly without proper care. We provide prompt diagnosis and evidence-based treatment for all acute and chronic eye conditions.",
    points: ["Infectious Conjunctivitis (Pink Eye)", "Vernal/Spring Catarrh & Allergic Conjunctivitis", "Stye, Chalazion & Eyelid Conditions", "Foreign body removal & minor eye injuries", "Warts, Molluscum Contagiosum treatment"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 100%)`, paddingTop: "90px", paddingBottom: "50px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <div style={{ color: G, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>What We Offer</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "white" }}>Our Eye Care Services</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "14px", maxWidth: "560px", margin: "14px auto 0", lineHeight: 1.7 }}>
            From routine eye checks to complex surgical procedures — delivered by a surgeon with 40+ years of experience and 90,000+ surgeries.
          </p>
        </div>
      </section>

      <section style={{ background: C, padding: "70px 0" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "28px" }}>
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              style={{
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 28px rgba(15,36,71,0.08)",
                overflow: "hidden",
                display: "flex",
                position: "relative",
              }}
            >
              <div style={{ width: "6px", background: G, flexShrink: 0 }} />
              <div style={{ padding: "36px 40px", flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
                <header style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                  <div style={{
                    width: "60px", height: "60px",
                    background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 100%)`,
                    borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.8rem",
                    flexShrink: 0,
                    boxShadow: "0 4px 14px rgba(15,36,71,0.18)",
                  }}>
                    {s.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.25rem, 2.4vw, 1.55rem)", fontWeight: 700, color: N, lineHeight: 1.25 }}>{s.title}</h2>
                    <p style={{ color: G, fontSize: "0.85rem", marginTop: "4px", fontWeight: 600, letterSpacing: "0.3px" }}>{s.subtitle}</p>
                  </div>
                </header>

                <div style={{
                  background: "rgba(201,168,76,0.09)",
                  borderLeft: `3px solid ${G}`,
                  padding: "10px 16px",
                  color: N,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  borderRadius: "0 4px 4px 0",
                }}>
                  {s.badge}
                </div>

                <p style={{ color: "#5a6475", lineHeight: 1.75, fontSize: "0.95rem" }}>{s.desc}</p>

                <ul style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "10px 28px",
                  paddingTop: "4px",
                }}>
                  {s.points.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", listStyle: "none" }}>
                      <span style={{ color: G, marginTop: "2px", flexShrink: 0, fontWeight: 700 }}>▸</span>
                      <span style={{ color: "#4a5568", lineHeight: 1.6 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: G, padding: "44px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: N }}>Not Sure Which Service You Need?</h3>
            <p style={{ color: "rgba(15,36,71,0.7)", marginTop: "6px" }}>Call us — we&apos;ll guide you to the right care.</p>
          </div>
          <Link href="/contact" style={{ background: N, color: "white", padding: "13px 28px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 700, textDecoration: "none" }}>
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
