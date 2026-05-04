// app.js

let currentScene = null;
let hintsVisible = false;
let foundSpots = new Set();

function getRandomScene() {
  const available = scenes.filter(s => s.id !== (currentScene && currentScene.id));
  return available[Math.floor(Math.random() * available.length)];
}

function loadScene(scene) {
  currentScene = scene;
  foundSpots = new Set();
  hintsVisible = false;

  document.getElementById("scene-label").textContent = scene.title;
  document.getElementById("scene-image").src = scene.image;
  document.getElementById("scene-image").alt = scene.title;
  document.getElementById("found-count").textContent = "0";
document.getElementById("total-count").textContent = scene.hotspots.length;
document.getElementById("remaining-count").textContent = scene.hotspots.length;
  document.getElementById("hotspots-layer").innerHTML = "";
  document.getElementById("image-container").classList.remove("hints-visible");
  closeTooltip();

  // Wait for image to load so we can position hotspots correctly
  const img = document.getElementById("scene-image");
  img.onload = () => renderHotspots(scene);
  if (img.complete) renderHotspots(scene);
}

function renderHotspots(scene) {
  const layer = document.getElementById("hotspots-layer");
  layer.innerHTML = "";

  scene.hotspots.forEach((spot, index) => {
    const dot = document.createElement("div");
    dot.classList.add("hotspot");
    if (!spot.obvious) dot.classList.add("hidden-hint");

    dot.style.left = spot.x + "%";
    dot.style.top = spot.y + "%";
    dot.dataset.index = index;
    dot.setAttribute("aria-label", spot.label);

    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      dot.classList.add("found");
      foundSpots.add(index);
      document.getElementById("found-count").textContent = foundSpots.size;
document.getElementById("remaining-count").textContent = currentScene.hotspots.length - foundSpots.size;
      showTooltip(spot);
    });

    layer.appendChild(dot);
  });
}

function showTooltip(spot) {
  document.getElementById("tooltip-title").textContent = spot.label;
  document.getElementById("tooltip-body").textContent = spot.text;
  document.getElementById("tooltip").classList.add("visible");
}

function closeTooltip() {
  document.getElementById("tooltip").classList.remove("visible");
}

document.getElementById("tooltip-close").addEventListener("click", closeTooltip);

document.getElementById("next-btn").addEventListener("click", () => {
  loadScene(getRandomScene());
});

document.getElementById("hints-btn").addEventListener("click", () => {
  hintsVisible = !hintsVisible;
  const container = document.getElementById("image-container");
  container.classList.toggle("hints-visible", hintsVisible);
  document.getElementById("hints-btn").textContent =
    hintsVisible ? "Hide Hotspot Hints" : "Toggle Hotspot Hints";
});

// Load a random scene on startup
loadScene(getRandomScene());
