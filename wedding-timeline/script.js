
const countdownTarget = new Date("2025-12-26T12:00:00Z").getTime();
const segments = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const pad = (value) => {
  const number = Number(value);
  if (Number.isNaN(number)) return "00";
  return number < 10 ? `0${number}` : String(number);
};

const setCountdownDisplay = (days, hours, minutes, seconds) => {
  if (segments.days) segments.days.textContent = pad(days);
  if (segments.hours) segments.hours.textContent = pad(hours);
  if (segments.minutes) segments.minutes.textContent = pad(minutes);
  if (segments.seconds) segments.seconds.textContent = pad(seconds);
};

function updateCountdown() {
  const difference = countdownTarget - Date.now();
  if (difference <= 0) {
    setCountdownDisplay(0, 0, 0, 0);
    return;
  }

  const seconds = Math.floor(difference / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  setCountdownDisplay(days, hours, minutes, remainingSeconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelectorAll(".scroll-btn[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const hero = document.querySelector(".hero");
let ticking = false;

function handleParallax() {
  if (!hero) return;
  const offset = window.scrollY * 0.2;
  hero.style.setProperty("--parallax-offset", `${offset}px`);
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleParallax);
    ticking = true;
  }
});

// Catalog data + rendering
const catalogData = [
  {
    title: "Bánh Mì Huỳnh Hoa",
    city: "Ho Chi Minh City",
    description: "Iconic Saigon sandwich shop stacked with pate, herbs, and pickles.",
    details:
      "Arrive early to avoid queues. Grab two and head to Turtle Lake for a picnic. Cash only; expect a savory, peppery punch.",
    map: "https://maps.app.goo.gl/Rp1S5M7aHajAMc8ZA",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyy4GHYePmWfEal_G5hpVxoyH-tPjGiK22TOTSuGf9mVWwenHrweW5EsyJUpq4FWQGGtOOe6JiVmZxFp-NE6tOLlvkDPTgphDJQOYEFwVboFAoE9gvRz_Aad_zjtFxts9HUvqm5-6v7_Y6B=w432-h369-k-no",
  },
  {
    title: "Little HaNoi Egg Coffee (Yersin)",
    city: "Ho Chi Minh City",
    description: "Layers of egg coffee and handwritten notes in Saigon.",
    details:
      "Great mid-morning caffeine stop. Write a love note and stick it on the wall before heading to fittings.",
    map: "https://maps.app.goo.gl/bvSXaJtr2NQS52Dz7",
    image: "https://jackfruitadventure.com/wp-content/uploads/2023/07/unnamed-5.jpg",
  },
  {
    title: "Ben Thanh Market",
    city: "Ho Chi Minh City",
    description: "Indoor market for fabrics, souvenirs, and crunchy lotus snacks.",
    details:
      "Best explored before noon. Practice bartering with a smile and grab dried fruit for welcome baskets.",
    map: "https://maps.app.goo.gl/RTXxHzGYJSdeEhbq7",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiH6DQ3NH98Ku8E_riJ9zCpWdJbSLiX3P7hQ&s",
  },
  {
    title: "Cafe Apartment",
    city: "Ho Chi Minh City",
    description: "Multi-level creative hub packed with tiny cafes and boutiques.",
    details:
      "Take the elevator to the top then wander down floor by floor. Perfect for group photos and iced coconut coffee.",
    map: "https://maps.app.goo.gl/G2YF8NhxG7eu339BA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs23M54EgDHVvQXrJcIO6qCg_7w9wO99Px3Q&s",
  },
  {
    title: "Bui Vien Walking Street",
    city: "Ho Chi Minh City",
    description: "Neon nightlife stretch with street performers and rooftop lounges.",
    details:
      "Best after 9 PM. Pair with Poseidon dinner beforehand. Keep valuables close; the street is lively and crowded.",
    map: "https://maps.app.goo.gl/xpqRGpCrRLE6T8Pe7",
    image: "https://www.uncovervietnam.com/wp-content/uploads/2019/08/Nightlife-at-Bui-Vien.jpg",
  },
  {
    title: "Nola Spa",
    city: "Ho Chi Minh City",
    description: "Relaxing Vietnamese spa for steam + scrub between fittings.",
    details:
      "Book group slots via WhatsApp. Their herbal compress is ideal before the travel days north.",
    map: "https://maps.app.goo.gl/BreCHDjiCoemYFiA7",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1-m-OH0CmJ8YpVgdWQfABfveXWgL5IL05g&s",
  },
  {
    title: "Mui Ne Sand Dunes",
    city: "Phan Thiet",
    description: "Sunrise jeep ride across red and white dunes.",
    details:
      "Pack scarves and sunglasses. Vendors rent sleds for photos; go early to beat the heat.",
    map: "https://maps.app.goo.gl/6Mehw2fP2AjHnUUC9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHii7c0ZjwJHlmW-Z3Ki9mHu9OnwGCYZAZg&s",
  },
  {
    title: "Anam Pool",
    city: "Phan Thiet",
    description: "Resort-side pool with ocean views and daybeds.",
    details:
      "Order the lemongrass spritz from the pool bar. Great midday reset before rehearsals.",
    map: "https://maps.app.goo.gl/sfHjBpDBFtTqJnxr6",
    image: "https://images.squarespace-cdn.com/content/v1/5c9e66e1d7819e21e09450be/1672486242984-7SWJGPKCOSFYY4L8662J/04+The+Anam+Mui+Ne.jpg",
  },
  {
    title: "Lantern Workshop",
    city: "Hoi An",
    description: "Hoi An lantern making class with take-home keepsake.",
    details:
      "Reserve ahead for small groups. Helps fill any free hour while suits get pressed.",
    map: "https://maps.app.goo.gl/4STgmwKJDG3rgKFQ9",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Basket Boat Spin",
    city: "Hoi An",
    description: "Coconut grove boat ride with live folk music.",
    details:
      "Wear easy sandals and be ready for playful spinning. Great for candid video clips.",
    map: "https://maps.app.goo.gl/zLYVk66PYFJxWf4t5",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "White Rose Restaurant",
    city: "Hoi An",
    description: "Delicate dumplings topped with crispy garlic flakes.",
    details:
      "Signature H?i An bite. Pair with lotus tea and book a table for golden hour.",
    map: "https://maps.app.goo.gl/7JBrhz9fZ9nE5xv1A",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Golden Bridge",
    city: "Da Nang",
    description: "Iconic Ba Na Hills bridge cradled by giant stone hands.",
    details:
      "Take the early cable car to beat crowds. Jackets recommended�temperatures drop at altitude.",
    map: "https://maps.app.goo.gl/pjndedZs1KQHW7UAA",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Dragon Bridge Show",
    city: "Da Nang",
    description: "Weekend fire-and-water show across Da Nang's dragon bridge.",
    details:
      "Happens at 9 PM Fridays and Saturdays. Best viewed from riverfront cafes.",
    map: "https://maps.app.goo.gl/ercdqomYVQyLykKZ7",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd432?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Marble Mountains",
    city: "Da Nang",
    description: "Cluster of marble and limestone hills with caves and pagodas.",
    details:
      "Wear comfortable shoes; there are lots of stairs. Combine with Da Nang beach afternoon.",
    map: "https://maps.app.goo.gl/tGB3n9J35QU8so2j8",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Pho Viet Nam District 1",
    city: "Ho Chi Minh City",
    description: "Beloved pho house with midnight servings.",
    details:
      "Grab a bowl after fittings and pair with sugarcane juice from the stand next door.",
    map: "https://maps.app.goo.gl/pJ9pCRa14Q6gttFs5",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Ben Nghe Boat Cruise",
    city: "Ho Chi Minh City",
    description: "Two-hour cruise with skyline views and live music.",
    details:
      "Best for groups of 6�8. Bring lightweight scarves for windy decks.",
    map: "https://maps.app.goo.gl/ky8ZQf8bVq4Fs1tBA",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Cafe Ca Koi Oasis",
    city: "Ho Chi Minh City",
    description: "Garden cafe with koi ponds and breezy pagodas.",
    details:
      "Quiet morning journaling spot; koi feeding happens on the hour.",
    map: "https://maps.app.goo.gl/KkVYL2A4T2YufAD38",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Thanh Tuyen Bo Ne",
    city: "Ho Chi Minh City",
    description: "Sizzling beefsteak breakfast served with egg and baguette.",
    details:
      "Order iced condensed milk coffee and split plates�portions are hearty.",
    map: "https://maps.app.goo.gl/JGUL5QgU3a6VqFez5",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Hoi An Roastery",
    city: "Hoi An",
    description: "Handcrafted coffee flights in H?i An ancient town.",
    details:
      "Buy beans as gifts. Their coconut cold brew is a crowd favorite.",
    map: "https://maps.app.goo.gl/3Gyhb7c2nYj6hanh9",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Poseidon Seafood Buffet",
    city: "Ho Chi Minh City",
    description: "Ocean-to-table buffet with grilled lobster and sashimi.",
    details:
      "Reserve balcony seating for sea breeze. Perfect after Mekong tour naps.",
    map: "https://maps.app.goo.gl/2Rw5xV8cAdXkBW8a7",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Mui Ne Fishing Village",
    city: "Phan Thiet",
    description: "Colorful baskets, morning fish auctions, sunrise views.",
    details:
      "Arrive before 7 AM for best light. Bring small bills for fresh coconut water.",
    map: "https://maps.app.goo.gl/WzQBNm1rT6Jw3Vmw5",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Da Nang Night Market",
    city: "Da Nang",
    description: "Lantern-lined stalls with grilled seafood and souvenirs.",
    details:
      "Great final night stroll. Keep coins handy, vendors appreciate exact change.",
    map: "https://maps.app.goo.gl/YRy5C5DjWdw6fSpC7",
    image: "https://images.unsplash.com/photo-1505968409348-bd000797c92b?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Terminal 21 Observation Deck",
    city: "Ho Chi Minh City",
    description: "Pre-flight chill zone overlooking the runway.",
    details:
      "Ideal for journaling while waiting to board; grab last-minute snacks downstairs.",
    map: "https://maps.app.goo.gl/kVhVn5fEf86Q5c2E9",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Photo Dump Session",
    city: "Da Nang",
    description: "Gather everyone for a final slideshow before departures.",
    details:
      "Use the hotel media room or a coffee shop with strong Wi-Fi. Perfect time to name shared albums.",
    map: "https://photos.app.goo.gl",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=60",
  },
];

const catalogGrid = document.getElementById("catalog-grid");
const catalogPrev = document.getElementById("catalog-prev");
const catalogNext = document.getElementById("catalog-next");
const catalogLabel = document.getElementById("catalog-page-label");
const catalogFilters = document.querySelectorAll(".catalog-filter");
const catalogModal = document.getElementById("catalog-modal");
const catalogModalImage = document.getElementById("catalog-modal-image");
const catalogModalTitle = document.getElementById("catalog-modal-title");
const catalogModalCity = document.getElementById("catalog-modal-city");
const catalogModalDescription = document.getElementById("catalog-modal-description");
const catalogModalDetails = document.getElementById("catalog-modal-details");
const catalogModalLink = document.getElementById("catalog-modal-link");

const catalogPageSize = 20;
let catalogPage = 1;
let catalogCityFilter = "all";

function renderCatalog(page = 1) {
  if (!catalogGrid) return;
  const filtered =
    catalogCityFilter === "all"
      ? catalogData
      : catalogData.filter((item) => item.city === catalogCityFilter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / catalogPageSize));
  catalogPage = Math.min(Math.max(page, 1), totalPages);
  const start = (catalogPage - 1) * catalogPageSize;
  const slice = filtered.slice(start, start + catalogPageSize);
  catalogGrid.innerHTML =
    slice
      .map(
        (item) => `
      <article class="catalog-card" role="listitem">
        <figure>
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </figure>
        <div class="catalog-card__body">
          <span class="catalog-card__tag">${item.city}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="catalog-card__actions">
            <a class="catalog-card__map" href="${item.map}" target="_blank" rel="noopener">Map</a>
            <button class="catalog-card__more" data-index="${catalogData.indexOf(item)}">Details</button>
          </div>
        </div>
      </article>`
      )
      .join("") || `<p class="catalog-empty">No listings yet for this city.</p>`;
  if (catalogLabel) catalogLabel.textContent = `Page ${catalogPage} of ${totalPages}`;
  if (catalogPrev) catalogPrev.disabled = catalogPage <= 1;
  if (catalogNext) catalogNext.disabled = catalogPage >= totalPages;
}

function openCatalogModal(index) {
  const item = catalogData[index];
  if (!item || !catalogModal) return;
  catalogModalImage.src = item.image;
  catalogModalImage.alt = item.title;
  catalogModalTitle.textContent = item.title;
  if (catalogModalCity) catalogModalCity.textContent = item.city;
  catalogModalDescription.textContent = item.description;
  catalogModalDetails.textContent = item.details;
  catalogModalLink.href = item.map;
  catalogModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCatalogModal() {
  if (!catalogModal) return;
  catalogModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (catalogGrid) {
  renderCatalog();
  catalogGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".catalog-card__more");
    if (!button) return;
    const index = Number(button.dataset.index);
    openCatalogModal(index);
  });
}

catalogFilters.forEach((button) => {
  button.addEventListener("click", () => {
    catalogFilters.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    catalogCityFilter = button.dataset.city || "all";
    renderCatalog(1);
  });
});

catalogPrev?.addEventListener("click", () => renderCatalog(catalogPage - 1));
catalogNext?.addEventListener("click", () => renderCatalog(catalogPage + 1));

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeCatalogModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && catalogModal?.getAttribute("aria-hidden") === "false") {
    closeCatalogModal();
  }
});


