function createRiderPortrait(index) {
  const hue = (index * 137.5 + 8) % 360;
  const mainColor = `hsl(${hue} 88% 55%)`;
  const accentColor = `hsl(${(hue + 145) % 360} 92% 66%)`;
  const emblem = index % 3 === 0
    ? '<circle cx="140" cy="128" r="8" fill="#fff3a6"/>'
    : index % 3 === 1
      ? '<path d="m140 118 10 10-10 10-10-10Z" fill="#fff3a6"/>'
      : '<path d="M135 119h10v18h-10z" fill="#fff3a6"/>';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 172">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${mainColor}"/>
        <stop offset="1" stop-color="${accentColor}"/>
      </linearGradient>
      <linearGradient id="visor" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#f8ffff"/>
        <stop offset="1" stop-color="#8ef8ed"/>
      </linearGradient>
    </defs>
    <path fill="url(#bg)" d="M0 0h280v172H0z"/>
    <circle cx="232" cy="34" r="68" fill="#fff" opacity=".12"/>
    <circle cx="232" cy="34" r="49" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2"/>
    <path d="M0 144 81 63m-48 109L165 40m25 132 90-91" stroke="#fff" stroke-opacity=".18" stroke-width="2"/>
    <path d="M43 172c8-30 30-45 63-48h68c33 3 55 18 63 48" fill="#202238" stroke="#fff3d4" stroke-width="3"/>
    <path d="m108 132 32-16 32 16-9 40h-46z" fill="${mainColor}" stroke="#fff3d4" stroke-width="3"/>
    ${emblem}
    <path d="m91 84-17-26 27 9m88 17 17-26-27 9" fill="${accentColor}" stroke="#202238" stroke-linejoin="round" stroke-width="5"/>
    <path d="M98 57q42-32 84 0l11 30q-5 30-53 39-48-9-53-39z" fill="${mainColor}" stroke="#fff3d4" stroke-width="4"/>
    <path d="M103 81q16-14 31 0l-8 15q-13 6-22-3zm43 0q15-14 31 0l-1 12q-10 9-22 3z" fill="url(#visor)" stroke="#202238" stroke-width="3"/>
    <path d="M136 67h8v8h-8z" fill="#fff3a6"/>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

document.querySelectorAll(".rider-card").forEach((card, index) => {
  if (card.querySelector(".rider-card-art")) {
    return;
  }

  const riderName = card.querySelector("h3").textContent.trim();
  const image = document.createElement("img");
  image.className = "rider-card-art";
  image.width = 280;
  image.height = 172;
  image.loading = "lazy";
  image.decoding = "async";

  if (riderName === "Geats") {
    image.src = "images/geats.png";
    image.alt = "Kamen Rider Geats riding a red motorcycle";
  } else {
    image.src = createRiderPortrait(index);
    image.alt = `Original fan-made masked-hero portrait for ${riderName}`;
  }

  card.classList.add("rider-card--illustrated");
  card.insertBefore(image, card.firstChild);
});
