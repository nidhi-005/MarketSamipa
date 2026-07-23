import { X, MapPin, Star, Clock, Phone } from "lucide-react";
import { TOKENS } from "../styles/tokens";

export default function ShopModal({ shop, onClose }) {
  if (!shop) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(11,35,64,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 18, maxWidth: 460, width: "100%", maxHeight: "85vh", overflow: "auto" }}>
        <div style={{ background: `linear-gradient(135deg, ${shop.a1}, ${shop.a2})`, padding: "26px 22px", position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, padding: 6, cursor: "pointer" }}>
            <X size={16} color="#fff" />
          </button>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: 24, fontWeight: 700, margin: "0 0 6px" }}>{shop.name}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "rgba(255,255,255,0.85)", fontSize: 12.5 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={13} /> {shop.area}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Star size={13} fill="#fff" /> {shop.rating}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={13} /> {shop.delivery}</span>
          </div>
        </div>
        <div style={{ padding: "18px 22px 24px" }}>
          {shop.products.map((prod, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < shop.products.length - 1 ? `1px solid ${TOKENS.sand}` : "none" }}>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: TOKENS.ink }}>{prod.n}</div>
                <div style={{ fontSize: 12, color: "#8A93A0" }}>{prod.u}</div>
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, color: TOKENS.royal }}>&#8377;{prod.p}</div>
            </div>
          ))}
          <a href={`tel:${shop.phone}`} style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: TOKENS.ivory, border: `1.5px solid ${TOKENS.sand}`, borderRadius: 9, padding: "10px 0", color: TOKENS.royal, fontWeight: 700, fontSize: 13.5, textDecoration: "none" }}>
            <Phone size={15} /> Call {shop.name}
          </a>
          <p style={{ marginTop: 14, fontSize: 12, color: "#8A93A0", textAlign: "center" }}>
            Ordering &amp; payments go directly to {shop.name} — Vego never touches the transaction.
          </p>
        </div>
      </div>
    </div>
  );
}
