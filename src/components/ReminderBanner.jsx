import { BellRing, X } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import { speak } from "../utils/voice";

// The stock-update reminder "alarm". In a real deployed app this would be
// a push notification (or IVR call) sent every REMINDER_INTERVAL_MS during
// shop-open hours. Here it's simulated with a timer + a manual test button,
// since a browser tab can't reliably fire background alarms.
export default function ReminderBanner({ visible, onDismissNoChange, onUpdateNow }) {
  if (!visible) return null;

  const dismiss = () => {
    speak("Okay, no changes noted.");
    onDismissNoChange();
  };

  return (
    <div
      style={{
        position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", zIndex: 60,
        background: TOKENS.night, color: TOKENS.ivory, borderRadius: 14, padding: "16px 20px",
        display: "flex", alignItems: "center", gap: 14, boxShadow: "0 18px 40px -12px rgba(0,0,0,0.5)",
        border: `1px solid ${TOKENS.gold}`, maxWidth: "92vw", flexWrap: "wrap",
      }}
    >
      <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(199,154,43,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <BellRing size={18} color={TOKENS.gold} />
      </div>
      <div style={{ flex: "1 1 220px" }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>Any changes to your stock?</div>
        <div style={{ fontSize: 12.5, color: "rgba(251,247,238,0.7)" }}>Update now, or dismiss if nothing has changed.</div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={onUpdateNow} style={{ background: TOKENS.gold, color: TOKENS.night, border: "none", borderRadius: 8, padding: "9px 14px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>
          Update now
        </button>
        <button onClick={dismiss} title="No changes" style={{ background: "rgba(255,255,255,0.1)", color: TOKENS.ivory, border: "none", borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
