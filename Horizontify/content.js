let currentGap = 24;
let enabled = true;
let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

// ── Layout logic ─────────────────────────────────────────────────────────────

function applyLayout() {
  const parent = document.querySelector(".LlCHmw");
  if (!parent) return;

  if (enabled) {
    parent.style.display = "flex";
    parent.style.flexDirection = "row";
    parent.style.alignItems = "flex-start";
  } else {
    parent.style.display = "";
    parent.style.flexDirection = "";
    parent.style.alignItems = "";
  }

  const items = document.querySelectorAll(".wjS_DQ");
  items.forEach((el, i) => {
    if (i > 0) {
      el.style.padding = enabled ? `0px 0px 0px ${currentGap}px` : "";
    }
  });
}

// ── Build the floating panel ──────────────────────────────────────────────────

function createPanel() {
  if (document.getElementById("chp-panel")) return;

  // Main panel
  const panel = document.createElement("div");
  panel.id = "chp-panel";
  panel.innerHTML = `
    <div id="chp-header">
      <span>📐 Page Layout</span>
      <button id="chp-toggle-btn" title="Minimize">−</button>
    </div>
    <div id="chp-enable-toggle">
      <input type="checkbox" id="chp-enable-checkbox" checked />
      <label for="chp-enable-checkbox">Horizontal layout</label>
    </div>
    <hr style="border-color:#333; margin: 10px 0;" />
    <div class="chp-row">
      <label for="chp-gap-slider">Gap</label>
      <input type="range" id="chp-gap-slider" min="0" max="100" value="24" />
      <span id="chp-gap-value">24px</span>
    </div>
  `;
  document.body.appendChild(panel);

  // Minimize button (bubble shown when panel is hidden)
  const minimizeBtn = document.createElement("button");
  minimizeBtn.id = "chp-minimize";
  minimizeBtn.title = "Open Page Layout panel";
  minimizeBtn.textContent = "📐";
  minimizeBtn.style.display = "none";
  document.body.appendChild(minimizeBtn);

  // ── Event: enable/disable toggle
  const checkbox = document.getElementById("chp-enable-checkbox");
  checkbox.addEventListener("change", () => {
    enabled = checkbox.checked;
    const slider = document.getElementById("chp-gap-slider");
    slider.disabled = !enabled;
    applyLayout();
  });

  // ── Event: gap slider
  const slider = document.getElementById("chp-gap-slider");
  const gapValue = document.getElementById("chp-gap-value");
  slider.addEventListener("input", () => {
    currentGap = parseInt(slider.value, 10);
    gapValue.textContent = `${currentGap}px`;
    applyLayout();
  });

  // ── Event: minimize / restore
  const toggleBtn = document.getElementById("chp-toggle-btn");
  toggleBtn.addEventListener("click", () => {
    panel.style.display = "none";
    minimizeBtn.style.display = "flex";
  });

  minimizeBtn.addEventListener("click", () => {
    panel.style.display = "";
    minimizeBtn.style.display = "none";
  });

  // ── Drag to reposition
  const header = document.getElementById("chp-header");
  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = panel.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
    panel.style.transition = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.clientX - dragOffsetX;
    const y = e.clientY - dragOffsetY;
    panel.style.left = `${x}px`;
    panel.style.top = `${y}px`;
    panel.style.bottom = "auto";
    panel.style.right = "auto";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

// ── MutationObserver: re-apply when Canva re-renders ─────────────────────────

const observer = new MutationObserver(() => {
  if (enabled) applyLayout();
  if (!document.getElementById("chp-panel")) createPanel();
});

observer.observe(document.body, { childList: true, subtree: true });

// Initial run
createPanel();
applyLayout();
