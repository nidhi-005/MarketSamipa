import { useState } from "react";
import { X, Check } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import { CATEGORIES } from "../data/shops";

export default function OnboardModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ shop: "", owner: "", phone: "", category: "grocery" });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(11,35,64,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 18, maxWidth: 420, width: "100%", padding: 26, position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: TOKENS.ivory, border: "none", borderRadius: 8, padding: 6, cursor: "pointer" }}>
          <X size={16} color={TOKENS.ink} />
        </button>
        {!submitted ? (
          <>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: TOKENS.night, margin: "0 0 4px" }}>List your shop</h3>
            <p style={{ fontSize: 13, color: "#6B7686", marginBottom: 20 }}>We'll call you to set it up — no commission, ever.</p>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input required placeholder="Shop name" value={form.shop} onChange={(e) => setForm({ ...form, shop: e.target.value })} className="srv-input" style={{ padding: "11px 13px", borderRadius: 9, border: `1.5px solid ${TOKENS.sand}`, fontSize: 14, fontFamily: "inherit" }} />
              <input required placeholder="Owner name" value={form.owner} onChange={(e) => setForm({ ...form, owner: e.target.value })} className="srv-input" style={{ padding: "11px 13px", borderRadius: 9, border: `1.5px solid ${TOKENS.sand}`, fontSize: 14, fontFamily: "inherit" }} />
              <input required placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="srv-input" style={{ padding: "11px 13px", borderRadius: 9, border: `1.5px solid ${TOKENS.sand}`, fontSize: 14, fontFamily: "inherit" }} />
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="srv-select" style={{ padding: "11px 13px", borderRadius: 9, border: `1.5px solid ${TOKENS.sand}`, fontSize: 14, fontFamily: "inherit", background: "#fff" }}>
                {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
              <button type="submit" className="srv-btn-gold" style={{ marginTop: 6, background: TOKENS.gold, color: TOKENS.night, border: "none", borderRadius: 9, padding: "12px 0", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
                Submit
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: TOKENS.night, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <Check size={22} color={TOKENS.gold} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: TOKENS.night, margin: "0 0 8px" }}>Thanks, {form.owner || "there"}!</h3>
            <p style={{ fontSize: 13.5, color: "#6B7686" }}>We've noted {form.shop || "your shop"} down. Our team will call {form.phone || "you"} shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
