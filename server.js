// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// --- TEMP in-memory data (replace with database later) ---

let menu = [
  {
    id: "taco-brisket-2x",
    category: "tacos",
    name: "2x Brisket Tacos",
    desc: "Slow cooked brisket, fresh salsa, cheese, house sauce.",
    price: 12.0,
    is_available: true,
    options: {
      proteins: ["chicken", "beef", "veggie"],
      heat_levels: ["mild", "medium", "hot"]
    }
  }
  // add more menu items here…
];

let products = [
  {
    id: "barrys-bbq-sauce",
    name: "Barry's BBQ Sauce",
    desc: "Smoky, sweet and addictive BBQ sauce.",
    price: 12.0,
    type: "sauce",
    image_url: "/images/barrys-bbq.png",
    is_available: true
  }
];

let locations = [
  {
    id: "shirtfront-2025-11-30",
    name: "Shirtfront Solutions – MacArthur Dr, Cannonvale",
    date: "2025-11-30",
    start_time: "17:00",
    end_time: "20:00",
    has_power: true,
    fees: "N/A",
    notes: "Friday Taco Night",
    lat: -20.27,
    lng: 148.7
  }
];

let orders = [];
let enquiries = [];

// ---- API ROUTES ----

// Menu
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

// Products (sauces/rubs/merch)
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Locations
app.get("/api/locations/today", (req, res) => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const todayLocations = locations.filter(loc => loc.date === today);
  res.json(todayLocations);
});

app.get("/api/locations/upcoming", (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = locations.filter(loc => loc.date >= today);
  res.json(upcoming);
});

// Orders
app.post("/api/orders", (req, res) => {
  const order = req.body;
  order.id = `ord_${Date.now()}`;
  order.created_at = new Date().toISOString();
  order.status = "pending";
  order.payment_status = order.payment_status || "unpaid";
  orders.push(order);
  res.status(201).json(order);
});

app.get("/api/orders/:id", (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
});

// Service enquiries (catering/yacht/twilight/meal prep)
app.post("/api/enquiries", (req, res) => {
  const enquiry = req.body;
  enquiry.id = `enq_${Date.now()}`;
  enquiry.created_at = new Date().toISOString();
  enquiries.push(enquiry);
  res.status(201).json(enquiry);
});

// ---- FRONT-END (PWA) ----

// serve static files from /public
app.use(express.static("public"));

// fallback: send index.html for any unknown route (so routing still works)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Island Essentials API running on port ${PORT}`);
});
