import { MapPin, Star, Clock, Phone } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import { SHOPS } from "../data/shops";

export default function ShopGrid({ filteredShops, query, setSelectedShop, fz }) {
  return (
    <section className="shop-grid-section" style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 20px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18, flexWrap: "wrap", gap: 8 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: fz(26), fontWeight: 700, color: TOKENS.night, margin: 0 }}>
          Shops near Manjunathnagar
        </h2>
        <span style={{ fontSize: fz(13), color: "#6B7686" }}>{filteredShops.length} of {SHOPS.length} shops</span>
      </div>

      {filteredShops.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px 20px", color: "#6B7686" }}>
          <p style={{ fontSize: fz(15) }}>No shops match &ldquo;{query}&rdquo; yet. Try a different search or category.</p>
        </div>
      ) : (
        <div className="shop-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {filteredShops.map((shop) => (
            <div key={shop.id} className="srv-card shop-card" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: `1px solid ${TOKENS.sand}` }}>
              <div style={{ height: 84, background: `linear-gradient(135deg, ${shop.a1}, ${shop.a2})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.92)", fontSize: fz(20), fontWeight: 700, textAlign: "center", padding: "0 16px" }}>
                  {shop.name}
                </span>
              </div>
              <div style={{ padding: "16px 18px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: fz(12.5), color: "#6B7686", marginBottom: 10 }}>
                  <MapPin size={13} /> {shop.area} &middot; {shop.distance} km
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: fz(13), fontWeight: 700, color: TOKENS.night }}>
                    <Star size={14} fill={TOKENS.gold} color={TOKENS.gold} /> {shop.rating}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: fz(13), color: "#6B7686" }}>
                    <Clock size={14} /> {shop.delivery}
                  </span>
                </div>
                <div className="shop-card-actions" style={{ display: "flex", gap: 8 }}>
                  <button className="view-products" onClick={() => setSelectedShop(shop)} style={{ flex: 1, background: TOKENS.night, color: TOKENS.gold, border: "none", borderRadius: 9, padding: `${fz(10)}px 0`, fontSize: fz(13.5), fontWeight: 700, cursor: "pointer" }}>
                    View products
                  </button>
                  <a className="call-shop" href={`tel:${shop.phone}`} title="Call shop" style={{ width: fz(42), display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", border: `1.5px solid ${TOKENS.sand}`, borderRadius: 9, color: TOKENS.royal, textDecoration: "none" }}>
                    <Phone size={fz(16)} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
