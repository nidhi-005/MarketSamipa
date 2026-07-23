import {
  ShoppingBasket, Cookie, Pill, PenTool, Cpu, Shirt, Wrench, Carrot,
} from "lucide-react";

export const CATEGORIES = [
  { id: "grocery", label: "Grocery", Icon: ShoppingBasket },
  { id: "bakery", label: "Bakery", Icon: Cookie },
  { id: "pharmacy", label: "Pharmacy", Icon: Pill },
  { id: "stationery", label: "Stationery", Icon: PenTool },
  { id: "electronics", label: "Electronics", Icon: Cpu },
  { id: "tailoring", label: "Tailoring", Icon: Shirt },
  { id: "hardware", label: "Hardware", Icon: Wrench },
  { id: "vegetables", label: "Vegetables", Icon: Carrot },
];

export const QUICK_ITEMS = ["Tomato", "Milk", "Bread", "Rice", "Paracetamol"];

export const SHOPS = [
  { id: 1, name: "Manjunath Provisions", category: "grocery", area: "Manjunathnagar", distance: 0.3, rating: 4.6, delivery: "20 min", phone: "9845000001", a1: "#14406F", a2: "#2C6BA8",
    products: [{ n: "Toor Dal", p: 145, u: "1 kg" }, { n: "Sona Masoori Rice", p: 68, u: "1 kg" }, { n: "Sunflower Oil", p: 132, u: "1 L" }, { n: "Amul Milk", p: 31, u: "500 ml" }, { n: "Tomato", p: 30, u: "1 kg" }] },
  { id: 2, name: "Sri Annapurna Bakery", category: "bakery", area: "Rajajinagar 1st Stage", distance: 0.6, rating: 4.8, delivery: "15 min", phone: "9845000002", a1: "#8A5A1E", a2: "#C79A2B",
    products: [{ n: "Milk Bread Loaf", p: 45, u: "400 g" }, { n: "Butter Biscuits", p: 60, u: "250 g" }, { n: "Veg Puffs", p: 25, u: "each" }, { n: "Rusk", p: 40, u: "200 g" }] },
  { id: 3, name: "Sri Ganesh Medicals", category: "pharmacy", area: "Manjunathnagar", distance: 0.4, rating: 4.7, delivery: "18 min", phone: "9845000003", a1: "#0B2340", a2: "#14406F",
    products: [{ n: "Paracetamol Strip", p: 18, u: "10 tabs" }, { n: "Digital Thermometer", p: 180, u: "1 pc" }, { n: "Cotton Roll", p: 35, u: "100 g" }, { n: "ORS Sachet", p: 20, u: "1 pc" }] },
  { id: 4, name: "Rajaji Stationery Mart", category: "stationery", area: "Rajajinagar 1st Phase", distance: 0.9, rating: 4.5, delivery: "25 min", phone: "9845000004", a1: "#5B3A8E", a2: "#8A63C2",
    products: [{ n: "Notebook, 200 pg", p: 55, u: "each" }, { n: "Gel Pen Pack", p: 40, u: "pack of 5" }, { n: "A4 Sheets", p: 220, u: "500 sheets" }, { n: "Geometry Box", p: 95, u: "each" }] },
  { id: 5, name: "New Bharat Electricals", category: "electronics", area: "Rajajinagar", distance: 1.2, rating: 4.4, delivery: "30 min", phone: "9845000005", a1: "#1B2430", a2: "#3E4C5E",
    products: [{ n: "LED Bulb, 9W", p: 85, u: "each" }, { n: "Extension Board", p: 340, u: "each" }, { n: "USB Cable", p: 150, u: "each" }, { n: "Ceiling Fan", p: 1450, u: "each" }] },
  { id: 6, name: "Lakshmi Tailors", category: "tailoring", area: "Manjunathnagar", distance: 0.5, rating: 4.9, delivery: "Same day", phone: "9845000006", a1: "#8A1E3E", a2: "#C2456B",
    products: [{ n: "Blouse Stitching", p: 350, u: "per piece" }, { n: "Pant Alteration", p: 100, u: "per piece" }, { n: "Salwar Set Stitching", p: 450, u: "per set" }, { n: "Zip Repair", p: 60, u: "per piece" }] },
  { id: 7, name: "Balaji Hardware", category: "hardware", area: "Rajajinagar 1st Stage", distance: 0.8, rating: 4.3, delivery: "35 min", phone: "9845000007", a1: "#4A3A1E", a2: "#8A6A2E",
    products: [{ n: "Hammer", p: 220, u: "each" }, { n: "Screws Pack", p: 45, u: "pack of 20" }, { n: "Paint Brush Set", p: 150, u: "set of 3" }, { n: "Cement Bag", p: 410, u: "50 kg" }, { n: "PVC Pipe", p: 180, u: "3 m" }, { n: "Switchboard", p: 95, u: "each" }] },
  { id: 8, name: "Fresh Farm Vegetables", category: "vegetables", area: "Manjunathnagar", distance: 0.2, rating: 4.6, delivery: "15 min", phone: "9845000008", a1: "#1E5B34", a2: "#3E8A5C",
    products: [{ n: "Tomato", p: 30, u: "1 kg" }, { n: "Onion", p: 35, u: "1 kg" }, { n: "Potato", p: 28, u: "1 kg" }, { n: "Coriander Bunch", p: 10, u: "each" }] },
];
