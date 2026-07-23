# Vego — Frontend

A hyperlocal shop-discovery app: residents see live stock/hours for nearby shops
(with voice search + an Easy Mode for elderly users), and shop owners get a
two-tap Available/Out-of-stock screen with voice commands and a stock-update
reminder.

## Setup

1. Make sure Node.js 18+ is installed.
2. Open this folder in VS Code.
3. In the terminal, install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in **Chrome** —
   voice search and voice commands use the Chrome/Edge Web Speech API and
   need microphone permission, which the browser will prompt for.

## Project structure

```
vego-app/
├── index.html                  entry HTML (loads Google Fonts)
├── src/
│   ├── main.jsx                React root
│   ├── App.jsx                 top-level state + layout
│   ├── index.css               global styles, animations
│   ├── styles/tokens.js        colour palette (blue + gold theme)
│   ├── data/shops.js           sample shop + category data (replace with real data / API later)
│   ├── utils/voice.js          speak() [text-to-speech] and useVoiceInput() [speech-to-text] hook
│   └── components/
│       ├── Logo.jsx            cursive gold "Vego" wordmark
│       ├── Header.jsx          resident/shop toggle + Easy Mode switch
│       ├── Hero.jsx            search bar, mic button, quick-tap items
│       ├── CategoryFilter.jsx  category chips
│       ├── ShopGrid.jsx        shop cards
│       ├── ShopModal.jsx       product list popup for a shop
│       ├── OnboardModal.jsx    "list your shop" signup form
│       ├── OwnersCTA.jsx       shop-owner acquisition section
│       ├── Footer.jsx          contact details
│       ├── ShopOwnerDashboard.jsx  the shop-owner stock screen
│       └── ReminderBanner.jsx  the stock-update reminder "alarm"
└── public/assets/logo-reference.png   your uploaded logo reference image (for inspiration/design use)
```

## Notes for next steps

- **Shop/product data** currently lives in `src/data/shops.js` as static sample
  data. Replace this with real shop data, ideally fetched from a backend/API
  once you build one.
- **Voice input** (speech-to-text, used for search and stock commands) relies
  on the browser's Web Speech API — it only works in Chromium browsers
  (Chrome, Edge) with microphone permission granted, and needs an internet
  connection. Safari and Firefox don't support it; consider showing the
  typing fallback more prominently on those browsers.
- **Voice output** (text-to-speech, used for "Listen" and spoken confirmations)
  works in effectively all modern browsers with no permissions needed — this
  is the more reliable of the two voice features.
- **The reminder "alarm"** in `ShopOwnerDashboard.jsx` is simulated with a
  45-second browser timer so it's visible in a live demo
  (`REMINDER_DEMO_MS`). In a real deployed app, replace this with a proper
  push notification sent from a backend on a schedule (`REMINDER_INTERVAL_MS`,
  set to every 2 hours as a starting point) — a browser tab can't reliably
  fire alarms once it's closed or backgrounded.
- **Logo**: the wordmark is currently a styled "Vego" in the Allura cursive
  font, in gold, echoing the flowing gold-on-blue script from your reference
  image (kept at `public/assets/logo-reference.png`). Swap `Logo.jsx` for an
  actual designed logo file/SVG whenever you have one.
