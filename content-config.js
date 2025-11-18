// ==== ISLAND ESSENTIALS CONTENT CONFIG ====
// Edit this file when menus, locations, events, pics change

const IslandAppConfig = {
  brand: {
    name: "Island Essentials",
    tagline: "Whitsunday Tacos, Pasta & Good Vibes",
    primaryLogo: "Island-Log-high-res.jpg", // replace with your file
    accentLogo: "Gringos.jpeg"       // optional second logo or remove
  },

  today: {
    message: "We’re serving tonight!",
    locationName: "@ Whitcool, Cannonvale",
    time: "5:00pm – 8:00pm",
    mapLink: "https://maps.app.goo.gl/SZSyC33pt1jYmjBM9"
  },

  menu: [
    {
      category: "Tacos",
      emoji: "🌮",
      items: [
        { name: "Gringo’s Chicken Taco", price: "$6", desc: "Slow marinated chicken, Charred corn, Island Essentials sauce." },
        { name: "Beef Brisket Taco",    price: "$6", desc: "Low’n’slow beef brisket, charred corn, Island Essentials sauce." },
        { name: "2 x Taco Meal",       price: "$12", desc: "Any 2 tacos, pure happiness." },
        { name: "Taco Meal + Drink",   price: "$15", desc: "2 x tacos + soft drink." }
      ]
    },
    {
      category: "Pasta & Mains",
      emoji: "🍝",
      items: [
        { name: "Lasagna",       price: "$17", desc: "House-made, layered, cheesy, proper comfort food." },
        { name: " Family Lasagna", price: "$25", desc: " House made, layered, cheesey, comfort food."},
        { name: "Spaghetti Bolognese", price: "$15", desc: "Slow-cooked sauce, al dente pasta, parm on top." },
        { name: "Sunday Roast (special)", price: "TBA", desc: "Check socials or ‘Today’ screen for details." }
      ]
    },
    {
      category: "Sauces & Merch",
      emoji: "🔥",
      items: [
        { name: "Barry’s BBQ Sauce",  price: "$10", desc: "Legendary sauce in a bottle." },
        { name: "Slap-Your-Barry Rub", price: "$8", desc: "House spice mix for meat & veg." },
        { name: "Stubby Holder",      price: "$12", desc: "Island Essentials stubby holder." },
        { name: "T-Shirt / Hat",      price: "from $25", desc: "Ask at the stand for sizes & colours." }
      ]
    }
  ],

  events: [
    {
      date: "2025-11-22",
      title: "Cannonvale Markets",
      location: "Cannonvale Foreshore",
      time: "8:00am – 1:00pm",
      powerAvailable: true,
      notes: "Beachfront vibes, family friendly."
    },
    {
      date: "2025-11-29",
      title: "Airlie Beach Night Market",
      location: "Airlie Beach Lagoon",
      time: "4:00pm – 9:00pm",
      powerAvailable: true,
      notes: "Perfect for tacos at sunset."
    }
    // Add more events as needed
  ],

  gallery: [
    "Island-Log-high-res.jpg",
    "Gringos.jpeg",
    "img/pasta-1.jpg",
    "img/stall-1.jpg"
    // Add more as you take photos
  ],

  contact: {
    phone: "0400 977 056",
    email: "islandessentials24@gmail.com",
    instagram: "https://www.instagram.com/islandessentials24",
    facebook: "https://www.facebook.com/islandessentials24", // update if different
    googleReviews: "https://g.page/r/XXXXXXXX", // your Google reviews link
    blurb: "Got an event, caravan park, sports club or party? Let’s feed your crew."
  },

  loyalty: {
    title: "Loyalty Love",
    text: "Show this screen at the stall. Every main meal = 1 stamp. Collect 5 stamps and your next taco meal is FREE.",
    note: "We’ll mark your stamps in person for now – full digital card coming soon."
  }
};
