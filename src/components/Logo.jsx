import { TOKENS } from "../styles/tokens";

// Cursive gold wordmark, styled after the reference monogram
// (public/assets/logo-reference.png) — flowing script in gold on deep blue.
export default function Logo({ size = 1, dark = true }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, lineHeight: 1 }}>
      <img
        src="/assets/ganesha_new-removebg-preview.png"
        alt="Ganesha placeholder"
        style={{
          width: `${98 * size}px`,
          height: `${98 * size}px`,
          objectFit: "cover",
          borderRadius: 10,
          border: `1px solid ${TOKENS.gold}`,
          boxShadow: "0 6px 16px rgba(0,0,0,0.16)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "'Allura', cursive",
            fontSize: `${72 * size}px`,
            color: TOKENS.gold,
            textShadow: "0 1px 0 rgba(0,0,0,0.15)",
          }}
        >
          Samipa
        </span>
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: `${15 * size}px`,
            letterSpacing: "0.3em",
            color: dark ? "rgba(251,247,238,0.7)" : TOKENS.night,
            marginTop: `${-2 * size}px`,
            fontWeight: 600,
          }}
        >
          BY SRV ENTERPRISES
        </span>
      </div>
    </div>
  );
}
