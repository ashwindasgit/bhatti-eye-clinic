import Link from "next/link";
import Image from "next/image";

const N = "#0f2447", G = "#c9a84c", C = "#f8f5f0";

const credentials = [
  "MBBS – Bachelor of Medicine and Surgery",
  "DOMS – Diploma in Ophthalmic Medicine and Surgery",
  "MS (Ophthalmology) – Master of Surgery",
  "FAIMER Fellow – Foundation for Advancement of International Medical Education",
  "VR Fellow – Vitreoretinal Surgery Fellowship",
];
const achievements = [
  { n: "40+", l: "Years Experience", d: "Clinical, surgical & academic excellence" },
  { n: "90,000+", l: "Eye Surgeries", d: "Successful surgeries with outstanding outcomes" },
  { n: "CMC", l: "Ludhiana", d: "Former Professor & Principal of Ophthalmology" },
  { n: "FAIMER", l: "Fellow", d: "International medical education recognition" },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 100%)`, paddingTop: "140px", paddingBottom: "50px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ color: "#d4b65e", fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", fontWeight: 700 }}>Our Founder & Chief Surgeon</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white" }}>About Dr. S.M. Bhatti</h1>
          <p style={{ color: "#ffffff", marginTop: "12px", fontSize: "1.05rem", fontWeight: 600 }}>Senior Eye Specialist &amp; Cataract Surgeon in Ludhiana</p>
          <p style={{ color: G, marginTop: "10px", fontWeight: 700, letterSpacing: "0.5px" }}>MBBS · DOMS · MS (Ophth) · FAIMER Fellow</p>
        </div>
      </section>

      {/* Centered portrait with decorative gold frame */}
      <section style={{ background: C, padding: "80px 0 40px" }}>
        <div style={{ maxWidth: "440px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ position: "relative", padding: "14px" }}>
            {/* Outer gold frame */}
            <div style={{
              position: "absolute",
              inset: 0,
              border: `2px solid ${G}`,
              borderRadius: "12px",
              transform: "translate(10px, 10px)",
              opacity: 0.55,
            }} />
            {/* Inner photo with frame */}
            <div style={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 16px 50px rgba(15,36,71,0.22)",
              aspectRatio: "3/4",
              border: `3px solid ${G}`,
            }}>
              <Image
                src="/dr-bhatti.jpg"
                alt="Dr. S.M. Bhatti — Senior Ophthalmologist, Bhatti Eye Clinic Ludhiana"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 768px) 100vw, 440px"
                priority
              />
              {/* Elegant overlay with name and credentials */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent 0%, rgba(15,36,71,0.55) 40%, rgba(15,36,71,0.96) 100%)",
                padding: "60px 26px 24px",
              }}>
                <div style={{ width: "32px", height: "2px", background: G, marginBottom: "10px" }} />
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                }}>
                  Dr. S.M. Bhatti
                </div>
                <div style={{
                  color: G,
                  fontSize: "0.78rem",
                  marginTop: "6px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}>
                  Senior Ophthalmologist
                </div>
                <div style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.75rem",
                  marginTop: "4px",
                  letterSpacing: "0.3px",
                }}>
                  MBBS · DOMS · MS · FAIMER Fellow · VR Fellow
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio with breathing room */}
      <section style={{ background: C, padding: "20px 0 90px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.7rem, 3.5vw, 2.2rem)", fontWeight: 700, color: N, marginBottom: "14px" }}>
              A Lifetime Dedicated to Sight
            </h2>
            <div style={{ width: "60px", height: "3px", background: G, margin: "0 auto" }} />
          </div>

          <div style={{
            color: "#3d4757",
            lineHeight: 1.9,
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            fontSize: "1.05rem",
            fontWeight: 500,
          }}>
            <p>Dr. S. M. Bhatti is a highly experienced ophthalmologist with over four decades of clinical, surgical, and academic excellence. He is the Founder of <strong style={{ color: N }}>Bhatti Eye Clinic, Chandigarh Road, Ludhiana</strong>, which he established after his superannuation to continue providing ethical and affordable eye care to the community.</p>
            <p>Dr. Bhatti, a highly respected eye surgeon, is a <strong style={{ color: N }}>Former Professor of Ophthalmology and Principal at Christian Medical College (CMC), Ludhiana</strong>, one of the most reputed medical institutions in North India.</p>
            <p>After completing his MBBS, DOMS, and MS in Ophthalmology, Dr. Bhatti built a distinguished career at Christian Medical College (CMC), Ludhiana — rising to become <strong style={{ color: N }}>Professor and Head, Department of Ophthalmology</strong>, and ultimately the <strong style={{ color: N }}>Principal of CMC Ludhiana</strong>.</p>
          </div>

          <blockquote style={{
            marginTop: "40px",
            padding: "28px 32px",
            background: "white",
            borderLeft: `4px solid ${G}`,
            borderRadius: "0 8px 8px 0",
            boxShadow: "0 4px 20px rgba(15,36,71,0.06)",
            fontStyle: "italic",
            color: N,
            fontSize: "1.08rem",
            lineHeight: 1.7,
            fontFamily: "'Playfair Display', serif",
          }}>
            &ldquo;Surgery is recommended only when it is truly the best path for the patient. Our first duty is honest guidance.&rdquo;
          </blockquote>

          <div style={{ marginTop: "56px" }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: N,
              marginBottom: "8px",
              textAlign: "center",
            }}>
              Qualifications & Fellowships
            </h3>
            <div style={{ width: "48px", height: "3px", background: G, margin: "0 auto 28px" }} />
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              background: "white",
              padding: "28px 32px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(15,36,71,0.06)",
            }}>
              {credentials.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{
                    color: G,
                    flexShrink: 0,
                    marginTop: "1px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}>✔</span>
                  <span style={{ fontSize: "0.95rem", color: "#4a5568", lineHeight: 1.6 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Add clinic photos grid when images are available in public/clinic/ */}

      {/* Achievements */}
      <section style={{ background: N, padding: "60px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "white" }}>A Record of Excellence</h2>
            <div style={{ width: "48px", height: "3px", background: G, margin: "14px auto 0" }} />
          </div>
          <div className="grid-4">
            {achievements.map((a) => (
              <div key={a.l} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", padding: "26px 18px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: G, marginBottom: "4px" }}>{a.n}</div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", marginBottom: "8px" }}>{a.l}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{a.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C, padding: "60px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto", padding: "0 20px" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: N, marginBottom: "12px" }}>Meet Dr. Bhatti in Person</h3>
          <p style={{ color: "#5a6475", marginBottom: "24px" }}>Experience the difference that four decades of expertise makes.</p>
          <Link href="/contact" style={{ background: G, color: N, padding: "14px 32px", borderRadius: "4px", display: "inline-block", fontWeight: 700, textDecoration: "none" }}>
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
