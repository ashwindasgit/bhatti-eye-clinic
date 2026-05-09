import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const N = "#0f2447", G = "#c9a84c", C = "#f8f5f0";

const services: {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  points: string[];
}[] = [
  {
    id: "cataract",
    icon: (
      <div style={{ background: "white", padding: "6px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/microscope.png" alt="Microscope" width={48} height={48} />
      </div>
    ),
    title: "Advanced Cataract Surgery",
    subtitle: "Phacoemulsification & SICS",
    badge: "No-Stitch · No-Injection · No-Bandage",
    desc: "Restore your vision with the most advanced cataract removal technology available. We specialize in Micro-Incision Cataract Surgery (MICS) using premium intraocular lenses (IOLs) that minimize dependence on glasses post-surgery.",
    points: [
      "Phacoemulsification (Phaco) — modern, sutureless lens surgery",
      "SICS — Small Incision Cataract Surgery for cost-effective care",
      "Premium IOL options: Monofocal, Multifocal, Toric",
      "Quick recovery and discharge within 4 hours of surgery",
      "Suitable for complicated cataract cases",
    ],
  },
  {
    id: "eyetest",
    icon: "👓",
    title: "Computerized Eye Testing & Contact Lens Fitting",
    subtitle: "Precision Refraction for All Ages",
    badge: "Precise & Comfortable Vision Correction",
    desc: "Precision is the foundation of clear sight. Our computerized diagnostic suite ensures the most accurate prescriptions for spectacles and contact lenses, detecting even the smallest refractive errors. For all age groups — precise and comfortable refraction is mandatory for excellent vision.",
    points: [
      "Computerized auto-refraction for accurate prescriptions",
      "Contact lens fitting and follow-up care",
      "Spectacle prescriptions for all age groups",
      "Detection of subtle refractive errors",
      "Pediatric refraction with child-friendly approach",
    ],
  },
  {
    id: "glaucoma", icon: "👁️", title: "Glaucoma & Retina Management", subtitle: "Early Detection & Expert Care",
    badge: "The Silent Thief of Sight",
    desc: "Glaucoma causes irreversible vision loss without early symptoms. Our comprehensive screening and ongoing management program ensures you never face preventable blindness. We also manage Diabetic Retinopathy and Hypertensive Retinopathy with state-of-the-art diagnostics.",
    points: [
      "Tonometry & optic nerve evaluation",
      "Medical and surgical glaucoma management",
      "Diabetic Retinopathy screening & treatment",
      "Hypertensive Retinopathy management",
      "Vitreoretinal consultations",
    ],
  },
  {
    id: "pediatric", icon: "👶", title: "Pediatric Eye Care & Squint", subtitle: "Specialized Care for Children",
    badge: "Every Child Deserves Clear Vision",
    desc: "Children's eyes require a specialized, gentle approach. We address the post-COVID Myopia Epidemic in school children, treat amblyopia (lazy eye), and provide complete squint evaluation — ensuring your child's visual development stays on track.",
    points: [
      "Computerized eye testing for all ages",
      "Squint (Strabismus) evaluation & surgical correction",
      "Amblyopia (Lazy Eye) treatment & patching therapy",
      "Myopia control — addressing the Post-COVID Myopia Epidemic",
      "Pediatric cataract and other conditions",
    ],
  },
  {
    id: "dryeye", icon: "💧", title: "Dry Eye & Computer Vision Clinic", subtitle: "Modern Lifestyle Eye Care",
    badge: "Relief for the Digital Generation",
    desc: "Chronic dry eye, Meibomian Gland Dysfunction (MGD), and Computer Vision Syndrome (CVS) affect millions of screen users. Our specialized clinic provides accurate diagnosis and targeted treatment for these modern-day challenges.",
    points: [
      "Dry Eye Disease (DED) diagnosis & management",
      "Meibomian Gland Dysfunction (MGD) care",
      "Computer Vision Syndrome (CVS) treatment",
      "Blepharitis management",
      "Customized lubricant & treatment plans",
    ],
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
      <section style={{ background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 100%)`, paddingTop: "140px", paddingBottom: "50px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px" }}>
            <Image
              src="/gallery/Pink eye.jpg"
              alt=""
              width={200}
              height={150}
              className="hide-mobile"
              style={{ borderRadius: "12px", objectFit: "cover", boxShadow: "0 8px 24px rgba(0,0,0,0.35)", border: `2px solid ${G}` }}
            />
            <div style={{ textAlign: "center", flex: "0 1 auto" }}>
              <div style={{ color: G, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>What We Offer</div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 800, color: "white" }}>Our Eye Care Services</h1>
            </div>
            <Image
              src="/gallery/Mature cataract.jpg"
              alt=""
              width={200}
              height={150}
              className="hide-mobile"
              style={{ borderRadius: "12px", objectFit: "cover", boxShadow: "0 8px 24px rgba(0,0,0,0.35)", border: `2px solid ${G}` }}
            />
          </div>
          <p style={{ color: "rgba(255,255,255,0.78)", marginTop: "20px", maxWidth: "560px", margin: "20px auto 0", lineHeight: 1.7, textAlign: "center" }}>
            From routine eye checks to complex surgical procedures — delivered by a surgeon with 40+ years of experience and 90,000+ surgeries.
          </p>
        </div>
      </section>

      <section style={{ background: C, padding: "70px 0" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 16px", display: "flex", flexDirection: "column", gap: "28px" }}>
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
                width: "100%",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ width: "6px", background: G, flexShrink: 0 }} />
              <div style={{
                padding: "clamp(20px, 4vw, 36px) clamp(16px, 4vw, 40px)",
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                overflow: "hidden",
                boxSizing: "border-box",
              }}>
                <header style={{ display: "flex", alignItems: "center", gap: "18px", minWidth: 0 }}>
                  {typeof s.icon === "string" ? (
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
                  ) : (
                    <div style={{ flexShrink: 0, boxShadow: "0 4px 14px rgba(15,36,71,0.18)", borderRadius: "8px" }}>
                      {s.icon}
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)",
                      fontWeight: 700,
                      color: N,
                      lineHeight: 1.25,
                      wordBreak: "break-word",
                    }}>{s.title}</h2>
                    <p style={{
                      color: G,
                      fontSize: "0.85rem",
                      marginTop: "4px",
                      fontWeight: 600,
                      letterSpacing: "0.3px",
                      wordBreak: "break-word",
                    }}>{s.subtitle}</p>
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
                  wordBreak: "break-word",
                }}>
                  {s.badge}
                </div>

                <p style={{
                  color: "#5a6475",
                  lineHeight: 1.75,
                  fontSize: "0.95rem",
                  wordBreak: "break-word",
                }}>{s.desc}</p>

                <ul style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
                  gap: "10px 28px",
                  paddingTop: "4px",
                  margin: 0,
                  listStyle: "none",
                }}>
                  {s.points.map((p) => (
                    <li key={p} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.9rem",
                      listStyle: "none",
                      minWidth: 0,
                    }}>
                      <span style={{ color: G, marginTop: "2px", flexShrink: 0, fontWeight: 700 }}>▸</span>
                      <span style={{ color: "#4a5568", lineHeight: 1.6, wordBreak: "break-word", minWidth: 0 }}>{p}</span>
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
