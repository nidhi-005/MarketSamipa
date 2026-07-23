import { useEffect, useState } from "react";
import { Users, Mic, ChevronDown, CheckCircle2, XCircle, Plus, Minus, BellRing } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import { SHOPS } from "../data/shops";
import { useVoiceInput, speak } from "../utils/voice";
import ReminderBanner from "./ReminderBanner";

// How often the shop owner is reminded to check their stock, in a real
// deployment. Kept short here (REMINDER_DEMO_MS) purely so it's visible
// during a live demo — swap in REMINDER_INTERVAL_MS for production.
const REMINDER_INTERVAL_MS = 2 * 60 * 60 * 1000; // every 2 hours, shop-open hours only
const REMINDER_DEMO_MS = 45 * 1000; // 45 seconds, for demoing in class/pitch

function buildInventory(shop) {
  return shop.products.map((p, i) => ({
    id: `${shop.id}-${i}`,
    name: p.n,
    available: i !== shop.products.length - 1,
    updated: i === shop.products.length - 1 ? "3 hours ago" : "Today, 9:10 AM",
  }));
}

export default function ShopOwnerDashboard() {
  const [selectedShopId, setSelectedShopId] = useState(SHOPS[0].id);
  const shop = SHOPS.find((s) => s.id === selectedShopId);
  const [inventory, setInventory] = useState(buildInventory(shop));
  const [command, setCommand] = useState("");
  const [feedback, setFeedback] = useState("");
  const [reminderVisible, setReminderVisible] = useState(false);

  useEffect(() => {
    setInventory(buildInventory(shop));
    setFeedback("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedShopId]);

  // Periodic reminder "alarm" — in production this would be a push
  // notification fired by the server during the shop's open hours.
  useEffect(() => {
    const timer = setInterval(() => setReminderVisible(true), REMINDER_DEMO_MS);
    return () => clearInterval(timer);
  }, []);

  const toggleItem = (id, makeAvailable) => {
    const item = inventory.find((it) => it.id === id);
    setInventory((prev) => prev.map((it) => (it.id === id ? { ...it, available: makeAvailable, updated: "Just now" } : it)));
    if (item) {
      const msg = `${item.name} marked ${makeAvailable ? "available" : "out of stock"}`;
      setFeedback(msg);
      speak(msg);
    }
  };

  const runCommand = (text) => {
    const lower = text.toLowerCase();
    const isPlus = /(plus|add|available|arrived|in stock)/.test(lower);
    const isMinus = /(minus|out|over|finished|sold out)/.test(lower);
    const itemPart = lower.replace(/(plus|add|available|arrived|in stock|minus|out|over|finished|sold out)/g, "").trim();
    const match = inventory.find(
      (it) => itemPart && (it.name.toLowerCase().includes(itemPart) || itemPart.includes(it.name.toLowerCase().split(",")[0].trim()))
    );
    if (match && (isPlus || isMinus)) {
      toggleItem(match.id, isPlus);
    } else {
      const msg = 'Couldn\'t match that to an item — try "tomato plus" or "eggs minus".';
      setFeedback(msg);
      speak(msg);
    }
  };

  const { listening, start: startVoiceCommand } = useVoiceInput(
    (text) => { setCommand(text); runCommand(text); },
    (msg) => setFeedback(msg)
  );

  const available = inventory.filter((i) => i.available);
  const outOfStock = inventory.filter((i) => !i.available);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 20px 60px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <Users size={20} color={TOKENS.royal} />
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: TOKENS.night, margin: 0 }}>Shop owner screen</h2>
      </div>
      <p style={{ color: "#6B7686", fontSize: 14, marginBottom: 6 }}>Two taps update your listing. Or just say it out loud.</p>
      <p style={{ color: "#B7BEC7", fontSize: 12, marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}>
        <BellRing size={13} /> A reminder will pop up every {REMINDER_DEMO_MS / 1000}s in this demo (every 2 hours in the real app) — dismiss it if nothing's changed.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <span style={{ fontSize: 13.5, color: "#6B7686", fontWeight: 600 }}>Viewing as:</span>
        <div style={{ position: "relative" }}>
          <select
            value={selectedShopId}
            onChange={(e) => setSelectedShopId(Number(e.target.value))}
            style={{ appearance: "none", padding: "9px 34px 9px 14px", borderRadius: 9, border: `1.5px solid ${TOKENS.sand}`, fontSize: 14, fontWeight: 700, color: TOKENS.night, background: "#fff", cursor: "pointer" }}
          >
            {SHOPS.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <ChevronDown size={15} style={{ position: "absolute", right: 10, top: 11, pointerEvents: "none", color: "#6B7686" }} />
        </div>
      </div>

      <div style={{ background: TOKENS.night, borderRadius: 16, padding: 18, marginBottom: 26 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={startVoiceCommand}
            className={listening ? "mic-pulse" : ""}
            style={{ width: 46, height: 46, borderRadius: "50%", border: "none", background: listening ? TOKENS.red : TOKENS.gold, color: TOKENS.night, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
          >
            <Mic size={20} />
          </button>
          <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && command.trim()) runCommand(command); }}
            placeholder='Try: "tomato plus" or "eggs minus"'
            style={{ flex: "1 1 200px", border: "none", outline: "none", borderRadius: 9, padding: "0 14px", fontSize: 14.5, fontFamily: "inherit" }}
          />
          <button onClick={() => command.trim() && runCommand(command)} style={{ background: TOKENS.gold, color: TOKENS.night, border: "none", borderRadius: 9, padding: "0 18px", fontWeight: 800, fontSize: 13.5, cursor: "pointer" }}>
            Update
          </button>
        </div>
        {feedback && <p style={{ color: TOKENS.goldLight, fontSize: 13, fontWeight: 600, marginTop: 12, marginBottom: 0 }}>{feedback}</p>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        <div>
          <h3 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 800, color: TOKENS.green, marginBottom: 12 }}>
            <CheckCircle2 size={17} /> Available ({available.length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {available.map((item) => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", border: `1.5px solid ${TOKENS.sand}`, borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={18} color={TOKENS.green} />
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: TOKENS.ink }}>{item.name}</div>
                    <div style={{ fontSize: 11.5, color: "#8A93A0" }}>Updated {item.updated}</div>
                  </div>
                </div>
                <button onClick={() => toggleItem(item.id, false)} title="Mark out of stock" style={{ width: 34, height: 34, borderRadius: "50%", border: "none", background: "#FBEBEB", color: TOKENS.red, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Minus size={17} />
                </button>
              </div>
            ))}
            {available.length === 0 && <p style={{ fontSize: 13, color: "#8A93A0" }}>Nothing marked available yet.</p>}
          </div>
        </div>

        <div>
          <h3 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 800, color: TOKENS.red, marginBottom: 12 }}>
            <XCircle size={17} /> Out of stock ({outOfStock.length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {outOfStock.map((item) => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FAFAFA", border: `1.5px solid ${TOKENS.sand}`, borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <XCircle size={18} color="#B7BEC7" />
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: "#8A93A0" }}>{item.name}</div>
                    <div style={{ fontSize: 11.5, color: "#B7BEC7" }}>Updated {item.updated}</div>
                  </div>
                </div>
                <button onClick={() => toggleItem(item.id, true)} title="Mark available / new stock arrived" style={{ width: 34, height: 34, borderRadius: "50%", border: "none", background: "#E9F6EE", color: TOKENS.green, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Plus size={17} />
                </button>
              </div>
            ))}
            {outOfStock.length === 0 && <p style={{ fontSize: 13, color: "#8A93A0" }}>Everything is in stock.</p>}
          </div>
        </div>
      </div>

      <ReminderBanner
        visible={reminderVisible}
        onDismissNoChange={() => setReminderVisible(false)}
        onUpdateNow={() => { setReminderVisible(false); document.querySelector("input")?.focus(); }}
      />
    </div>
  );
}
