import { Search, MapPin, Mic, Volume2 } from "lucide-react";
import { TOKENS } from "../styles/tokens";
import { QUICK_ITEMS } from "../data/shops";
import { useVoiceInput, speak } from "../utils/voice";

export default function Hero({ query, setQuery, easyMode, fz, filteredShops, voiceNote, setVoiceNote }) {
  const { listening, start: startVoiceSearch } = useVoiceInput(
    (text) => {
      setQuery(text);
      setVoiceNote(`Heard: "${text}" — showing matching shops.`);
      speak(`Searching for ${text}`);
    },
    (msg) => setVoiceNote(msg)
  );

  const readResultsAloud = () => {
    if (filteredShops.length === 0) {
      speak("No shops found nearby for this search.");
      return;
    }
    const names = filteredShops.slice(0, 4).map((s) => `${s.name}, ${s.distance} kilometres away`).join(". ");
    speak(`Found ${filteredShops.length} shops. ${names}`);
  };

  return (
    <section className="hero-shell" style={{ background: `linear-gradient(160deg, ${TOKENS.night} 0%, ${TOKENS.royal} 100%)`, padding: "60px 20px 50px" }}>
      <div className="hero-content" style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
        <div className="hero-pill" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(199,154,43,0.14)", border: `1px solid ${TOKENS.gold}`, color: TOKENS.goldLight, padding: "6px 14px", borderRadius: 999, fontSize: 12.5, fontWeight: 700, marginBottom: 20 }}>
          <MapPin size={13} /> LIVE NOW IN MANJUNATHNAGAR &amp; RAJAJINAGAR
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: TOKENS.ivory, fontSize: `clamp(30px, 5vw, ${fz(50)}px)`, lineHeight: 1.15, margin: "0 0 16px" }}>
          Just say what you need
        </h1>
        <p style={{ color: "rgba(251,247,238,0.78)", fontSize: fz(16), lineHeight: 1.6, maxWidth: 560, margin: "0 auto 28px" }}>
          Tap the microphone and say an item name, or type it — Vego shows which nearby shop has it, right now.
        </p>

        <div className="hero-search-box" style={{ background: TOKENS.ivory, borderRadius: 16, padding: 10, display: "flex", gap: 8, flexWrap: "wrap", boxShadow: "0 20px 40px -18px rgba(0,0,0,0.5)", maxWidth: 640, margin: "0 auto" }}>
          <button
            onClick={startVoiceSearch}
            className={listening ? "mic-pulse hero-mic" : "hero-mic"}
            aria-label="Search by voice"
            style={{
              flex: "0 0 auto", width: fz(46), height: fz(46), borderRadius: "50%", border: "none",
              background: listening ? TOKENS.red : TOKENS.night, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            }}
          >
            <Mic size={fz(20)} />
          </button>
          <div className="hero-input-wrap" style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px" }}>
            <Search size={fz(17)} color={TOKENS.royal} />
            <input
              className="srv-input"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVoiceNote(""); }}
              placeholder="Or type an item, shop, or area"
              style={{ border: "none", outline: "none", fontSize: fz(15), width: "100%", fontFamily: "inherit", background: "transparent", color: TOKENS.ink }}
            />
          </div>
          <button className="hero-listen" onClick={readResultsAloud} title="Read results aloud" style={{
            flex: "0 0 auto", background: "#fff", border: `1.5px solid ${TOKENS.sand}`, borderRadius: 9, padding: `0 ${fz(14)}px`,
            display: "flex", alignItems: "center", gap: 6, cursor: "pointer", color: TOKENS.royal, fontWeight: 700, fontSize: fz(13),
          }}>
            <Volume2 size={fz(16)} /> Listen
          </button>
        </div>

        {voiceNote && <p style={{ color: TOKENS.goldLight, fontSize: fz(13), marginTop: 12, fontWeight: 600 }}>{voiceNote}</p>}

        <div className="hero-quick-items" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 22 }}>
          {QUICK_ITEMS.map((item) => (
            <button key={item} onClick={() => { setQuery(item); setVoiceNote(""); }} style={{
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(251,247,238,0.25)", color: TOKENS.ivory,
              borderRadius: 999, padding: `${fz(8)}px ${fz(16)}px`, fontSize: fz(13.5), fontWeight: 600, cursor: "pointer",
            }}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
