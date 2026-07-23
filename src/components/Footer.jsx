import { MapPin, Phone, Mail } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "#081A30", padding: "40px 20px 26px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 300 }}>
          <Logo size={0.5} />
          <p style={{ color: "rgba(251,247,238,0.6)", fontSize: 13, lineHeight: 1.6, marginTop: 14 }}>
            A hyperlocal marketplace connecting Manjunathnagar &amp; Rajajinagar residents directly with the shops around them.
          </p>
        </div>
        <div>
          <h4 style={{ color: TOKENS.gold, fontSize: 13, letterSpacing: "0.08em", marginBottom: 12 }}>REACH US</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 13.5, color: "rgba(251,247,238,0.8)" }}>
            <span style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <MapPin size={15} style={{ flexShrink: 0, marginTop: 2 }} color={TOKENS.gold} />
              #245, 5th Main Road, 1st Stage, 1st Phase,<br />Manjunathnagar, Rajajinagar, Bengaluru &ndash; 560010
            </span>
            <a href="tel:7899963290" style={{ display: "flex", alignItems: "center", gap: 8, color: "inherit", textDecoration: "none" }}>
              <Phone size={15} color={TOKENS.gold} /> +91 78999 63290
            </a>
            <a href="mailto:srventerprises155@gmail.com" style={{ display: "flex", alignItems: "center", gap: 8, color: "inherit", textDecoration: "none" }}>
              <Mail size={15} color={TOKENS.gold} /> srventerprises155@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: "26px auto 0", borderTop: "1px solid rgba(251,247,238,0.12)", paddingTop: 16, fontSize: 12, color: "rgba(251,247,238,0.45)", textAlign: "center" }}>
        &copy; 2026 Vego, by SRV Enterprises. Prototype build — shop data shown is sample content.
      </div>
    </footer>
  );
}
