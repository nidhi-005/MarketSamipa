import { useMemo, useState } from "react";
import { TOKENS } from "./styles/tokens";
import { SHOPS } from "./data/shops";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ShopGrid from "./components/ShopGrid";
import ShopModal from "./components/ShopModal";
import OnboardModal from "./components/OnboardModal";
import OwnersCTA from "./components/OwnersCTA";
import Footer from "./components/Footer";
import ShopOwnerDashboard from "./components/ShopOwnerDashboard";

export default function App() {
  const [mode, setMode] = useState("resident"); // "resident" | "shop"
  const [easyMode, setEasyMode] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [showOnboard, setShowOnboard] = useState(false);
  const [voiceNote, setVoiceNote] = useState("");

  // Easy Mode scales up font sizes for elderly / low-vision users.
  const fz = (base) => (easyMode ? Math.round(base * 1.28) : base);

  const filteredShops = useMemo(() => {
    return SHOPS.filter((s) => {
      const matchesCategory = activeCategory ? s.category === activeCategory : true;
      const q = query.trim().toLowerCase();
      const matchesQuery = q
        ? s.name.toLowerCase().includes(q) ||
          s.category.includes(q) ||
          s.area.toLowerCase().includes(q) ||
          s.products.some((p) => p.n.toLowerCase().includes(q))
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", background: TOKENS.ivory, color: TOKENS.ink, minHeight: "100vh" }}>
      <Header mode={mode} setMode={setMode} easyMode={easyMode} setEasyMode={setEasyMode} />

      {mode === "resident" ? (
        <>
          <Hero
            query={query}
            setQuery={setQuery}
            easyMode={easyMode}
            fz={fz}
            filteredShops={filteredShops}
            voiceNote={voiceNote}
            setVoiceNote={setVoiceNote}
          />
          <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} fz={fz} />
          <ShopGrid filteredShops={filteredShops} query={query} setSelectedShop={setSelectedShop} fz={fz} />
          <OwnersCTA onListShop={() => setShowOnboard(true)} onSeeShopScreen={() => setMode("shop")} />
          <Footer />
        </>
      ) : (
        <ShopOwnerDashboard />
      )}

      <ShopModal shop={selectedShop} onClose={() => setSelectedShop(null)} />
      {showOnboard && <OnboardModal onClose={() => setShowOnboard(false)} />}
    </div>
  );
}
