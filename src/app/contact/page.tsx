import { Phone, MessageCircle, MapPin, Clock, Video } from "lucide-react";

const N = "#0f2447", G = "#c9a84c";
const NAVY_WARM = "linear-gradient(160deg, #0f2447 0%, #142f5a 50%, #0f2447 100%)";

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InfoRow = ({
  icon,
  iconBg,
  iconColor,
  title,
  children,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
    <div style={{
      width: "48px", height: "48px",
      background: iconBg,
      borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
      border: iconBg === "transparent" ? `1px solid ${G}` : "none",
      boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
    }}>
      <div style={{ color: iconColor, display: "flex" }}>{icon}</div>
    </div>
    <div style={{ flex: 1, paddingTop: "4px" }}>
      <div style={{
        fontWeight: 700,
        color: G,
        marginBottom: "6px",
        fontSize: "0.72rem",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
      }}>
        {title}
      </div>
      <div style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.6, fontSize: "0.95rem" }}>
        {children}
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${N} 0%, #1a3a6b 100%)`, paddingTop: "150px", paddingBottom: "60px" }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div style={{ color: G, fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
            Reach Us
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white" }}>
            Contact &amp; Location
          </h1>
        </div>
      </section>

      <section style={{ background: NAVY_WARM, padding: "80px 0", position: "relative" }}>
        {/* Decorative gold accent at top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(90deg, transparent 0%, ${G} 50%, transparent 100%)`,
          opacity: 0.6,
        }} />

        <div style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "40px",
          alignItems: "stretch",
        }} className="contact-grid">
          {/* Left: contact details */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid rgba(201,168,76,0.18)`,
            borderRadius: "12px",
            padding: "44px 44px",
            backdropFilter: "blur(4px)",
          }}>
            <div style={{ marginBottom: "32px" }}>
              <div style={{
                color: G,
                fontSize: "0.72rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "10px",
                fontWeight: 600,
              }}>
                Get in Touch
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "white",
                marginBottom: "14px",
                lineHeight: 1.2,
              }}>
                Bhatti Eye Clinic
              </h2>
              <div style={{ width: "56px", height: "3px", background: G }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <InfoRow
                title="Address"
                iconBg="rgba(201,168,76,0.12)"
                iconColor={G}
                icon={<MapPin size={18} />}
              >
                <div>Chandigarh Road, Sector 32A</div>
                <div>Ludhiana, Punjab, India</div>
                <a
                  href="https://www.google.com/maps/place/Bhatti+Eye+Clinic/@30.9062056,75.8924849,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: G, fontSize: "0.85rem", marginTop: "10px", display: "inline-block", fontWeight: 600, textDecoration: "none" }}
                >
                  View on Google Maps →
                </a>
              </InfoRow>

              <InfoRow
                title="Phone"
                iconBg="rgba(201,168,76,0.12)"
                iconColor={G}
                icon={<Phone size={18} />}
              >
                <a href="tel:01617960664" style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none" }}>
                  0161-7960664
                </a>
              </InfoRow>

              <InfoRow
                title="WhatsApp"
                iconBg="#25D366"
                iconColor="white"
                icon={<MessageCircle size={18} />}
              >
                <a
                  href="https://wa.me/917009534336?text=Hi%20Dr.%20Bhatti%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none" }}
                >
                  +91 70095 34336
                </a>
              </InfoRow>

              <InfoRow
                title="Clinic Timings"
                iconBg="rgba(201,168,76,0.12)"
                iconColor={G}
                icon={<Clock size={18} />}
              >
                <div><strong style={{ color: "white" }}>Monday – Saturday</strong></div>
                <div>Morning: 9:00 AM – 1:30 PM</div>
                <div>Evening: 5:00 PM – 7:00 PM</div>
                <div style={{ color: G, marginTop: "6px", fontSize: "0.85rem" }}>Sunday: Closed</div>
              </InfoRow>

              <InfoRow
                title="YouTube"
                iconBg="#FF0000"
                iconColor="white"
                icon={<Video size={18} />}
              >
                <a
                  href="https://www.youtube.com/@DRSMBHATTI"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none" }}
                >
                  @DRSMBHATTI
                </a>
              </InfoRow>

              <InfoRow
                title="Facebook"
                iconBg="#1877F2"
                iconColor="white"
                icon={<FacebookIcon size={18} />}
              >
                <a
                  href="https://www.facebook.com/bhattieyeclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.88)", textDecoration: "none" }}
                >
                  /bhattieyeclinic
                </a>
              </InfoRow>
            </div>

            <div style={{
              marginTop: "36px",
              paddingTop: "28px",
              borderTop: "1px solid rgba(201,168,76,0.18)",
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                color: "white",
                fontWeight: 600,
                fontSize: "1.05rem",
                marginBottom: "14px",
              }}>
                Book Your Appointment
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="tel:01617960664"
                  style={{
                    background: G, color: N,
                    padding: "12px 22px", borderRadius: "4px",
                    fontWeight: 700, fontSize: "0.85rem",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={14} /> Call Us
                </a>
                <a
                  href="https://wa.me/917009534336?text=Hi%20Dr.%20Bhatti%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#25D366", color: "white",
                    padding: "12px 22px", borderRadius: "4px",
                    fontWeight: 700, fontSize: "0.85rem",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
              border: `1px solid rgba(201,168,76,0.18)`,
              flex: 1,
              minHeight: "480px",
              display: "flex",
            }}>
              <iframe
                src="https://maps.google.com/maps?q=Bhatti+Eye+Clinic+Sector+32A+Chandigarh+Road+Ludhiana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "480px", flex: 1 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhatti Eye Clinic Location"
              />
            </div>
            <div style={{
              background: "rgba(201,168,76,0.08)",
              border: `1px solid rgba(201,168,76,0.18)`,
              borderRadius: "10px",
              padding: "18px 22px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}>
              <div style={{
                width: "40px", height: "40px",
                background: G,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <MapPin size={18} color={N} />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "0.92rem" }}>
                  Easy to find on Chandigarh Road
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", marginTop: "2px" }}>
                  Ample parking · Wheelchair accessible
                </div>
              </div>
            </div>

            <div style={{
              background: "white",
              borderRadius: "12px",
              padding: "22px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
              border: `1px solid rgba(201,168,76,0.18)`,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.google.com/?q=Bhatti+Eye+Clinic+Ludhiana"
                alt="QR code linking to Bhatti Eye Clinic on Google Maps"
                width={150}
                height={150}
                style={{ display: "block", borderRadius: "6px", flexShrink: 0 }}
              />
              <div>
                <div style={{
                  color: G,
                  fontSize: "0.72rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}>
                  Quick Directions
                </div>
                <div style={{ color: N, fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.35 }}>
                  Scan to find us on Google Maps
                </div>
                <div style={{ color: "#5a6475", fontSize: "0.85rem", marginTop: "6px", fontWeight: 500 }}>
                  Point your phone&apos;s camera at the code.
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 880px) {
            .contact-grid {
              grid-template-columns: 1fr 1.1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
