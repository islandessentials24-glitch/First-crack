document.addEventListener("DOMContentLoaded", () => {
  const cfg = IslandAppConfig;

  // Header
  document.getElementById("brand-name").textContent = cfg.brand.name;
  document.getElementById("brand-tagline").textContent = cfg.brand.tagline;
  const logoEl = document.getElementById("primary-logo");
  if (cfg.brand.primaryLogo) logoEl.src = cfg.brand.primaryLogo;

  // TODAY SECTION – MULTIPLE SESSIONS (SMOKO & LUNCH + DINNER)
  const todayContainer = document.getElementById("today-container");

  if (cfg.today.sessions && cfg.today.sessions.length) {
    cfg.today.sessions.forEach(session => {
      const card = document.createElement("div");
      card.className = "card highlight";

      const titleEl = document.createElement("h3");
      titleEl.textContent = session.title;
      card.appendChild(titleEl);

      const msgEl = document.createElement("p");
      msgEl.className = "today-message";
      msgEl.textContent = session.message;
      card.appendChild(msgEl);

      const locEl = document.createElement("p");
      locEl.className = "today-location";
      locEl.textContent = session.locationName;
      card.appendChild(locEl);

      const timeEl = document.createElement("p");
      timeEl.className = "today-time";
      timeEl.textContent = session.time;
      card.appendChild(timeEl);

      const mapBtn = document.createElement("a");
      mapBtn.className = "btn primary";
      mapBtn.target = "_blank";
      mapBtn.href = session.mapLink;
      mapBtn.textContent = "Open in Maps";
      card.appendChild(mapBtn);

      todayContainer.appendChild(card);
    });
  } else {
    const msg = document.createElement("p");
    msg.textContent = "No sessions set for today yet.";
    todayContainer.appendChild(msg);
  }

  });
} else {
  // fallback in case sessions isn't set
  const msg = document.createElement("p");
  msg.textContent = "No sessions set for today yet.";
  todaySection.appendChild(msg);
}

    `;

    todayContainer.appendChild(card);
});

  // Menu
  const menuContainer = document.getElementById("menu-container");
  cfg.menu.forEach(cat => {
    const card = document.createElement("div");
    card.className = "card menu-category";

    const header = document.createElement("div");
    header.className = "menu-category-header";

    const emojiSpan = document.createElement("span");
    emojiSpan.textContent = cat.emoji || "•";

    const title = document.createElement("h3");
    title.textContent = cat.category;

    header.appendChild(emojiSpan);
    header.appendChild(title);

    card.appendChild(header);

    cat.items.forEach(item => {
      const row = document.createElement("div");
      row.className = "menu-item";

      const left = document.createElement("div");
      const name = document.createElement("div");
      name.className = "menu-item-name";
      name.textContent = item.name;
      const desc = document.createElement("div");
      desc.className = "menu-item-desc";
      desc.textContent = item.desc;

      left.appendChild(name);
      left.appendChild(desc);

      const price = document.createElement("div");
      price.className = "menu-item-price";
      price.textContent = item.price;

      row.appendChild(left);
      row.appendChild(price);

      card.appendChild(row);
    });

    menuContainer.appendChild(card);
  });

  // Events
  const eventsContainer = document.getElementById("events-container");
  if (cfg.events && cfg.events.length) {
    cfg.events
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date))
      .forEach(ev => {
        const card = document.createElement("div");
        card.className = "card event-item";

        const dateEl = document.createElement("div");
        dateEl.className = "event-date";
        dateEl.textContent = formatDate(ev.date) + " • " + ev.time;

        const titleEl = document.createElement("div");
        titleEl.textContent = ev.title;

        const locEl = document.createElement("div");
        locEl.className = "event-location";
        locEl.textContent = ev.location;

        const powerEl = document.createElement("div");
        powerEl.className = "event-power";
        powerEl.textContent = ev.powerAvailable
          ? "Power available: ✔️"
          : "Power available: ❌";

        const notesEl = document.createElement("div");
        notesEl.className = "event-notes";
        notesEl.textContent = ev.notes || "";

        card.appendChild(dateEl);
        card.appendChild(titleEl);
        card.appendChild(locEl);
        card.appendChild(powerEl);
        if (ev.notes) card.appendChild(notesEl);

        eventsContainer.appendChild(card);
      });
  } else {
    const msg = document.createElement("p");
    msg.textContent = "Upcoming events will appear here soon.";
    eventsContainer.appendChild(msg);
  }

  // Gallery
  const galleryContainer = document.getElementById("gallery-container");
  if (cfg.gallery && cfg.gallery.length) {
    cfg.gallery.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Island Essentials";
      galleryContainer.appendChild(img);
    });
  } else {
    const msg = document.createElement("p");
    msg.textContent = "Photos coming soon – we’re still snapping the good stuff.";
    galleryContainer.appendChild(msg);
  }

  // Contact & Loyalty
  document.getElementById("contact-blurb").textContent = cfg.contact.blurb;

  const phoneBtn = document.getElementById("contact-phone");
  phoneBtn.href = `tel:${cfg.contact.phone.replace(/\s+/g, "")}`;

  const emailBtn = document.getElementById("contact-email");
  emailBtn.href = `mailto:${cfg.contact.email}`;

  document.getElementById("contact-instagram").href = cfg.contact.instagram;
  document.getElementById("contact-facebook").href = cfg.contact.facebook;
  document.getElementById("contact-reviews").href = cfg.contact.googleReviews;

  document.getElementById("loyalty-title").textContent = cfg.loyalty.title;
  document.getElementById("loyalty-text").textContent = cfg.loyalty.text;
  document.getElementById("loyalty-note").textContent = cfg.loyalty.note;

  // Tabs
  const navButtons = document.querySelectorAll(".nav-btn");
  const screens = document.querySelectorAll(".tab-screen");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      screens.forEach(s => {
        s.classList.toggle("active", s.id === target);
      });
    });
  });

  // PWA service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(err =>
      console.error("SW registration failed", err)
    );
  }
});

function formatDate(isoDate) {
  // Basic pretty date: "2025-11-22" -> "22 Nov 2025"
  const d = new Date(isoDate + "T00:00:00");
  if (isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
