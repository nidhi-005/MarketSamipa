import { Type } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import Logo from "./Logo";

export default function Header({ mode, setMode, easyMode, setEasyMode }) {
  return (
    <header style={{ background: TOKENS.night, position: "sticky", top: 0, zIndex: 40, borderBottom: `1px solid ${TOKENS.royal}` }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <Logo size={0.6} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <div style={{ display: "flex", background: "rgba(255,255,255,0.08)", borderRadius: 999, padding: 3 }}>
            <button
              onClick={() => setMode("resident")}
              style={{
                border: "none", borderRadius: 999, padding: "7px 14px", fontSize: 12.5, fontWeight: 700, cursor: "pointer",
                background: mode === "resident" ? TOKENS.gold : "transparent",
                color: mode === "resident" ? TOKENS.night : "rgba(251,247,238,0.75)",
              }}
            >
              Resident
            </button>
            <button
              onClick={() => setMode("shop")}
              style={{
                border: "none", borderRadius: 999, padding: "7px 14px", fontSize: 12.5, fontWeight: 700, cursor: "pointer",
                background: mode === "shop" ? TOKENS.gold : "transparent",
                color: mode === "shop" ? TOKENS.night : "rgba(251,247,238,0.75)",
              }}
            >
              Shop owner
            </button>
          </div>
          {mode === "resident" && (
            <button
              onClick={() => setEasyMode(!easyMode)}
              title="Larger text and buttons"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                border: `1.5px solid ${easyMode ? TOKENS.gold : "rgba(251,247,238,0.3)"}`,
                background: easyMode ? "rgba(199,154,43,0.15)" : "transparent",
                color: easyMode ? TOKENS.goldLight : "rgba(251,247,238,0.75)",
                borderRadius: 999, padding: "7px 14px", fontSize: 12.5, fontWeight: 700, cursor: "pointer",
              }}
            >
              <Type size={14} /> Easy mode
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
