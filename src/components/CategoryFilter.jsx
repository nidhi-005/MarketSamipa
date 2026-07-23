import { Store } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import { CATEGORIES } from "../data/shops";

export default function CategoryFilter({ activeCategory, setActiveCategory, fz }) {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 6px" }}>
      <div className="chip-row" style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8 }}>
        <button
          onClick={() => setActiveCategory(null)}
          className="srv-chip"
          style={{
            flex: "0 0 auto", border: `1.5px solid ${activeCategory === null ? TOKENS.gold : TOKENS.sand}`,
            background: activeCategory === null ? TOKENS.night : "#fff", color: activeCategory === null ? TOKENS.gold : TOKENS.ink,
            borderRadius: 999, padding: `${fz(9)}px ${fz(16)}px`, fontSize: fz(13.5), fontWeight: 700, display: "flex", alignItems: "center", gap: 6,
          }}
        >
          <Store size={fz(15)} /> All shops
        </button>
        {CATEGORIES.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(activeCategory === id ? null : id)}
            className="srv-chip"
            style={{
              flex: "0 0 auto", border: `1.5px solid ${activeCategory === id ? TOKENS.gold : TOKENS.sand}`,
              background: activeCategory === id ? TOKENS.night : "#fff", color: activeCategory === id ? TOKENS.gold : TOKENS.ink,
              borderRadius: 999, padding: `${fz(9)}px ${fz(16)}px`, fontSize: fz(13.5), fontWeight: 700, display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <Icon size={fz(15)} /> {label}
          </button>
        ))}
      </div>
    </section>
  );
}
