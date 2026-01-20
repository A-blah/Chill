// Data
const moods = [
  { id: "work", title: "Work Mode", desc: "Quiet spots with WiFi & outlets", icon: "💼" },
  { id: "date", title: "Date Night", desc: "Romantic & memorable places", icon: "❤️" },
  { id: "quick", title: "Quick Bite", desc: "Fast & delicious options", icon: "⚡" },
  { id: "budget", title: "Budget Friendly", desc: "Great value for money", icon: "💰" },
];

const places = [
  { id: 1, name: "Violet Brew Café", category: "Café", tags: ["WiFi","Coffee","Calm"], rating: 4.6, reviews: 210, price: "₹₹", distance: "0.8 km", open: true, image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { id: 2, name: "Moonlight Rooftop", category: "Restaurant", tags: ["Romantic","Rooftop"], rating: 4.8, reviews: 540, price: "₹₹₹", distance: "1.5 km", open: false, image:"https://images.unsplash.com/photo-1528605248644-14dd04022da1" },
  { id: 3, name: "QuickBite Express", category: "Fast Food", tags: ["Fast","Affordable"], rating: 4.2, reviews: 120, price: "₹", distance: "0.4 km", open: true, image:"https://images.unsplash.com/photo-1550547660-d9450f859349" },
];

// State
let selectedMood = null;
let favorites = [];

// Render Moods
const moodsGrid = document.getElementById("moodsGrid");
function renderMoods() {
  moodsGrid.innerHTML = "";
  moods.forEach((m) => {
    const div = document.createElement("div");
    div.className = "mood-card" + (selectedMood===m.id ? " active" : "");
    div.onclick = () => { selectedMood = m.id; renderMoods(); };
    div.innerHTML = `
      ${selectedMood===m.id ? '<div class="check-badge">✔</div>' : ''}
      <div class="mood-icon">${m.icon}</div>
      <h3>${m.title}</h3>
      <p>${m.desc}</p>
    `;
    moodsGrid.appendChild(div);
  });
}

// Render Places
const placesGrid = document.getElementById("placesGrid");
function renderPlaces() {
  placesGrid.innerHTML = "";
  places.forEach((p) => {
    const div = document.createElement("div");
    div.className = "place-card";
    div.innerHTML = `
      <div class="place-image">
        <img src="${p.image}" />
        <span class="place-badge">${p.price}</span>
        <button class="favorite-btn">${favorites.includes(p.id) ? "❤️" : "🤍"}</button>
      </div>
      <div class="place-info">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <div class="place-tags">
          ${p.tags.map(t => `<span>${t}</span>`).join("")}
        </div>
        <div class="place-meta">
          <span>⭐ ${p.rating} (${p.reviews})</span>
          <span>${p.open ? "🟢 Open" : "🔴 Closed"}</span>
        </div>
      </div>
    `;
    const favBtn = div.querySelector(".favorite-btn");
    favBtn.onclick = () => {
      if(favorites.includes(p.id)) favorites = favorites.filter(id=>id!==p.id);
      else favorites.push(p.id);
      renderPlaces();
    };
    placesGrid.appendChild(div);
  });
}

// Initial render
renderMoods();
renderPlaces();
