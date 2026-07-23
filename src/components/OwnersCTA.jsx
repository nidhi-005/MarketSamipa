import { TOKENS } from "../styles/tokens";

export default function OwnersCTA({ onListShop, onSeeShopScreen }) {
  return (
    <section style={{ background: TOKENS.night, padding: "56px 20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: TOKENS.ivory, fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, margin: "0 0 14px" }}>
          Own a shop nearby? Keep 100% of what you earn.
        </h2>
        <p style={{ color: "rgba(251,247,238,0.75)", fontSize: 15, lineHeight: 1.6, maxWidth: 540, margin: "0 auto 24px" }}>
          List your products for a flat monthly subscription — no commission, ever. Updating stock takes one tap, or just say it out loud.
        </p>
        <div className="cta-buttons" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={onListShop} className="srv-btn-gold cta-primary" style={{ background: TOKENS.gold, color: TOKENS.night, border: "none", borderRadius: 10, padding: "13px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
            List your shop
          </button>
          <button onClick={onSeeShopScreen} className="cta-secondary" style={{ background: "transparent", color: TOKENS.goldLight, border: `1.5px solid ${TOKENS.gold}`, borderRadius: 10, padding: "13px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
            See the shop-owner screen
          </button>
        </div>
      </div>
    </section>
  );
}
