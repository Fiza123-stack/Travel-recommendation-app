/* ---------- Destination data (embedded so it works with fetch OR opened locally) ---------- */
const DESTINATIONS = {
  beach: [
    {
      name: "Anse Source d'Argent",
      location: "La Digue, Seychelles",
      description: "Granite boulders frame this shallow, turquoise lagoon, making it one of the most photographed beaches on Earth.",
      images: [
        "https://picsum.photos/seed/anse-source-1/700/500",
        "https://picsum.photos/seed/anse-source-2/700/500"
      ]
    },
    {
      name: "Navagio Beach",
      location: "Zakynthos, Greece",
      description: "A shipwreck rests on white sand, walled in by limestone cliffs that drop straight into the Ionian Sea.",
      images: [
        "https://picsum.photos/seed/navagio-1/700/500",
        "https://picsum.photos/seed/navagio-2/700/500"
      ]
    },
    {
      name: "Whitehaven Beach",
      location: "Whitsunday Island, Australia",
      description: "Seven kilometers of pure silica sand meet swirling turquoise water in the Great Barrier Reef.",
      images: [
        "https://picsum.photos/seed/whitehaven-1/700/500",
        "https://picsum.photos/seed/whitehaven-2/700/500"
      ]
    }
  ],
  temple: [
    {
      name: "Angkor Wat",
      location: "Siem Reap, Cambodia",
      description: "The world's largest religious monument, built in the 12th century and still a working Buddhist temple at sunrise.",
      images: [
        "https://picsum.photos/seed/angkor-1/700/500",
        "https://picsum.photos/seed/angkor-2/700/500"
      ]
    },
    {
      name: "Kinkaku-ji",
      location: "Kyoto, Japan",
      description: "The Golden Pavilion, coated in gold leaf, reflects perfectly across its still pond garden.",
      images: [
        "https://picsum.photos/seed/kinkakuji-1/700/500",
        "https://picsum.photos/seed/kinkakuji-2/700/500"
      ]
    },
    {
      name: "Meenakshi Amman Temple",
      location: "Madurai, India",
      description: "Fourteen painted gopuram towers, covered in thousands of carved figures, rise above the old city.",
      images: [
        "https://picsum.photos/seed/meenakshi-1/700/500",
        "https://picsum.photos/seed/meenakshi-2/700/500"
      ]
    }
  ],
  country: [
    {
      name: "New Zealand",
      location: "Oceania",
      description: "Fjords, glaciers, geothermal fields, and coastline packed into two compact islands.",
      images: [
        "https://picsum.photos/seed/newzealand-1/700/500",
        "https://picsum.photos/seed/newzealand-2/700/500"
      ]
    },
    {
      name: "Morocco",
      location: "North Africa",
      description: "Sahara dunes, the Atlas Mountains, and maze-like medinas full of color and spice.",
      images: [
        "https://picsum.photos/seed/morocco-1/700/500",
        "https://picsum.photos/seed/morocco-2/700/500"
      ]
    },
    {
      name: "Peru",
      location: "South America",
      description: "Home to Machu Picchu, the Amazon basin, and the high Andean altiplano.",
      images: [
        "https://picsum.photos/seed/peru-1/700/500",
        "https://picsum.photos/seed/peru-2/700/500"
      ]
    }
  ]
};

/* ---------- Nav: mobile toggle + active link highlight ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });
}

/* ---------- Card rendering ---------- */
function cardHTML(item, category) {
  const [img1, img2] = item.images;
  return `
    <article class="card">
      <div class="card-images">
        <img src="${img1}" alt="${item.name} photo 1" loading="lazy">
        <img src="${img2}" alt="${item.name} photo 2" loading="lazy">
      </div>
      <div class="card-body">
        <div class="loc">${category} &middot; ${item.location}</div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="btn btn-primary visit-btn" type="button">Visit</button>
      </div>
    </article>
  `;
}

function renderResults(items) {
  const results = document.getElementById("results");
  if (!results) return;

  if (items.length === 0) {
    results.innerHTML = `<p class="empty-state">No destinations matched your search. Try "beach", "temple", "country", or a place name like "Japan".</p>`;
    return;
  }

  results.innerHTML = items.map(({ item, category }) => cardHTML(item, category)).join("");

  results.querySelectorAll(".visit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Thanks for your interest! Booking is coming soon on this demo site.");
    });
  });
}

function allDestinations() {
  const list = [];
  Object.keys(DESTINATIONS).forEach((category) => {
    DESTINATIONS[category].forEach((item) => list.push({ item, category }));
  });
  return list;
}

function searchDestinations(query) {
  const q = query.trim().toLowerCase();
  const all = allDestinations();

  if (q === "") return all;

  // Match category keywords (beach/beaches, temple/temples, country/countries)
  const categoryMatch = ["beach", "temple", "country"].find((c) =>
    q.includes(c)
  );

  return all.filter(({ item, category }) => {
    if (categoryMatch && category === categoryMatch) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });
}

function initSearch() {
  const input = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resetBtn = document.getElementById("resetBtn");
  const results = document.getElementById("results");
  if (!results) return;

  renderResults(allDestinations());

  const runSearch = () => renderResults(searchDestinations(input.value));

  if (searchBtn) searchBtn.addEventListener("click", runSearch);
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") runSearch();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      input.value = "";
      renderResults(allDestinations());
    });
  }
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Thanks! Your message has been received — we'll reply within two business days.";
    msg.classList.add("show");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initSearch();
  initContactForm();
});
