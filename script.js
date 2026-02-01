/**
 * Rohan Pandey — Publications site
 * Data from https://rohan-pandey1729.github.io/portfolio/
 */

const PUBLISHED = [
  {
    id: "collatz",
    title: "2-Adic Obstructions to Presburger-Definable Characterizations of Collatz Cycles",
    meta: "arXiv:2601.12772 — math.NT, math.DS",
    desc: "Investigates structural limitations of Presburger-arithmetic-based approaches to the Collatz problem. Shows that the Collatz cycle equation admits unique solutions in the 2-adic integers (ghost cycles), which are genuine periodic orbits satisfying all local parity constraints. Proves unconditionally that the divisibility predicate is not semilinear for any fixed number of odd steps, establishing an obstruction to Presburger definability through unbounded fiber periods.",
    url: "https://arxiv.org/abs/2601.12772",
    tags: ["math"],
    linkLabel: "View on arXiv",
  },
  {
    id: "petersen",
    title: "Parity-Dependent Real-Rootedness in Independence Polynomials of Generalized Petersen Graphs",
    meta: "arXiv:2601.03293 — math.CO",
    desc: "Studies zeros of independence polynomials for Generalized Petersen graphs via transfer-matrix computations (n≤30, k∈{1,2,3,4}); finds parity-driven behavior where even k yields strictly real negative roots while odd k forms complex conjugate curves, motivating a real-rootedness/log-concavity conjecture for even k.",
    url: "https://arxiv.org/abs/2601.03293",
    tags: ["math"],
    linkLabel: "View on arXiv",
  },
  {
    id: "rocket",
    title: "Amortized Inference for Model Rocket Aerodynamics: Learning to Estimate Physical Parameters from Simulation",
    meta: "arXiv:2512.22248 — cs.LG",
    desc: "Simulation-based amortized inference approach that trains a neural network on synthetic flight data to predict aerodynamic parameters (drag coefficient and thrust correction factor) for model rockets. Demonstrates sim-to-real transfer with zero real training examples, achieving 12.3 m mean absolute error on apogee prediction across 8 real flights.",
    url: "https://arxiv.org/abs/2512.22248",
    tags: ["ml"],
    linkLabel: "View on arXiv",
  },
  {
    id: "quantization",
    title: "Quantization Blindspots: How Model Compression Breaks Backdoor Defenses",
    meta: "arXiv:2512.06243 — cs.LG, cs.CR",
    desc: "Systematic empirical study of five representative backdoor defenses across three precision settings (FP32, INT8, INT4) on vision benchmarks. We observe that INT8 quantization reduces detection rates to 0% while leaving attack success rates above 99%, exposing a critical mismatch between defense evaluation and real-world deployment.",
    url: "https://arxiv.org/abs/2512.06243",
    tags: ["ml"],
    linkLabel: "View on arXiv",
  },
  {
    id: "oncostreams",
    title: "Analyzing the birth-death model of Oncostreams in Glioma, and the effects of Cytochalasin D treatment",
    meta: "arXiv:2407.10983 — q-bio.TO, math.PR",
    desc: "Models oncostream cell populations using a birth-death process to analyze glioma aggressiveness and treatment effects (Cytochalasin D). Integrates ex-vivo/in-vivo imaging and Kolmogorov equations to predict population changes under treatment.",
    url: "https://arxiv.org/abs/2407.10983",
    tags: ["bio", "math"],
    linkLabel: "View on arXiv",
  },
  {
    id: "mobius",
    title: "The Möbius function of the poset of triangular numbers under divisibility",
    meta: "arXiv:2402.07934 — math.NT",
    desc: "Analyzes the Möbius function on the poset of triangular numbers under divisibility; introduces Hasse diagrams, zeta and Möbius matrices, and conjectures about asymptotic behavior, supported by visualizations and experiments.",
    url: "https://arxiv.org/abs/2402.07934",
    tags: ["math"],
    linkLabel: "View on arXiv",
  },
];

const IN_PROGRESS = [
  {
    id: "rl-poly",
    title: "Reinforcement Learning for Polynomials",
    meta: "In progress — targeting ICLR/ICML/NeurIPS",
    desc: "Designed a reinforcement learning framework with PPO and Graph Neural Networks to synthesize efficient arithmetic circuits for polynomials. Achieved ~70% success rate on degree-3 polynomials using curriculum learning and symbolic verification. Currently scaling to higher-degree polynomials and integrating MCTS.",
    url: null,
    tags: ["ml", "math"],
    linkLabel: null,
  },
  {
    id: "thinkswitch",
    title: "ThinkSwitch: Context-Distilled Dual-Mode LoRAs",
    meta: "In progress",
    desc: "Developed a dual-mode LLM training framework that alternates between low-compute \"instruct\" and high-compute \"thinking\" modes. Uses context distillation, LoRA deltas, and MergeKit blending to iteratively boost reasoning on software engineering tasks.",
    url: null,
    tags: ["ml"],
    linkLabel: null,
  },
];

const RESEARCH_POSTERS = [
  {
    id: "cancer-modeling",
    title: "Parameter Identifiability for CAR T-cell Therapy Models",
    meta: "UW Population Health Award · Research poster",
    desc: "Developed mathematical models based on systems of ODEs to simulate CAR T-cell and tumor interactions using parameter sets from B-ALL patient data. Applied linear regression and MSE loss to train models predicting therapy outcomes and assess treatment plan efficacy. Won the UW Population Health Award.",
    url: "https://drive.google.com/file/d/1vivJ5Ao6NDRESVf4K6e0I3Gq5y1CqAWk/view?usp=sharing",
    tags: ["bio", "math"],
    linkLabel: "View Research Poster (UW Population Health Award)",
  },
  {
    id: "backdoor",
    title: "Machine Learning Backdoor Research",
    meta: "Research poster",
    desc: "Research on undetectable checksum-triggered backdoors in MLPs trained on MNIST, achieving stealth misclassification with advanced cryptographic methods and adversarial ML techniques.",
    url: "https://drive.google.com/file/d/1V_9-0oTqYPZiQl4nhkCybbh8S508Y4Dq/view?usp=sharing",
    tags: ["ml"],
    linkLabel: "View Research Poster",
  },
  {
    id: "td-mpc2",
    title: "TD-MPC2 Policy Distillation",
    meta: "Research poster",
    desc: "We investigated whether the model-based planning process of TD-MPC2 could be effectively distilled into a policy network via DAgger, training large-scale fully connected neural networks to imitate planning behavior without performing online trajectory sampling.",
    url: "https://drive.google.com/file/d/1R0qSwleil2hdmC4ecqo7-N7GQLzDQZV5/view?usp=sharing",
    tags: ["ml"],
    linkLabel: "View Research Poster",
  },
];

// ---------- DOM refs ----------
const searchInput = document.getElementById("search");
const filterChips = document.querySelectorAll(".chip");
const publishedList = document.getElementById("published-list");
const inprogressList = document.getElementById("inprogress-list");
const postersList = document.getElementById("posters-list");
const publishedCount = document.getElementById("published-count");
const inprogressCount = document.getElementById("inprogress-count");
const postersCount = document.getElementById("posters-count");
const emptyState = document.getElementById("empty-state");
const resetBtn = document.getElementById("reset-filters");

let activeFilter = "all";
let searchQuery = "";

// ---------- Helpers ----------
function normalize(s) {
  return (s || "").toLowerCase().trim();
}

function matchesSearch(item) {
  if (!searchQuery) return true;
  const q = normalize(searchQuery);
  const title = normalize(item.title);
  const desc = normalize(item.desc);
  const meta = normalize(item.meta);
  const tags = item.tags.join(" ");
  return title.includes(q) || desc.includes(q) || meta.includes(q) || tags.includes(q);
}

function matchesCategory(item, category) {
  if (category === "all") return true;
  if (category === "published") return PUBLISHED.some((p) => p.id === item.id);
  if (category === "in-progress") return IN_PROGRESS.some((p) => p.id === item.id);
  if (category === "posters") return RESEARCH_POSTERS.some((p) => p.id === item.id);
  if (category === "math") return item.tags.includes("math");
  if (category === "ml") return item.tags.includes("ml");
  if (category === "bio") return item.tags.includes("bio");
  return true;
}

function tagClass(tag) {
  if (tag === "math") return "pub-card__tag--math";
  if (tag === "ml") return "pub-card__tag--ml";
  if (tag === "bio") return "pub-card__tag--bio";
  return "";
}

function renderCard(item, type) {
  const isPublished = type === "published";
  const isPoster = type === "posters";
  const badge = isPublished ? "Published" : isPoster ? "Research Poster" : "In Progress / Report";
  const badgeClass = isPublished ? "pub-card__badge--published" : isPoster ? "pub-card__badge--poster" : "pub-card__badge--in-progress";
  const linkHtml =
    item.url && item.linkLabel
      ? `<span class="pub-card__link-text">${escapeHtml(item.linkLabel)}</span>`
      : "";

  const tagsHtml = item.tags
    .map((t) => `<span class="pub-card__tag ${tagClass(t)}">${escapeHtml(t.toUpperCase())}</span>`)
    .join("");

  const el = document.createElement(isPublished ? "li" : "li");
  const inner = `
    <span class="pub-card__badge ${badgeClass}">${escapeHtml(badge)}</span>
    <h3 class="pub-card__title">${escapeHtml(item.title)}</h3>
    <p class="pub-card__meta">${escapeHtml(item.meta)}</p>
    <p class="pub-card__desc">${escapeHtml(item.desc)}</p>
    <div class="pub-card__tags">${tagsHtml}</div>
    ${linkHtml}
  `;

  const card = item.url
    ? (() => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "pub-card";
        a.setAttribute("data-card", "");
        a.innerHTML = inner;
        return a;
      })()
    : (() => {
        const div = document.createElement("div");
        div.className = "pub-card";
        div.setAttribute("data-card", "");
        div.innerHTML = inner;
        return div;
      })();

  el.appendChild(card);
  el.dataset.id = item.id;
  el.dataset.tags = item.tags.join(" ");
  el.dataset.type = type;
  return el;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function filterItems(type) {
  const source = type === "published" ? PUBLISHED : type === "posters" ? RESEARCH_POSTERS : IN_PROGRESS;
  return source.filter((item) => matchesSearch(item) && matchesCategory(item, activeFilter));
}

function render() {
  const publishedFiltered = filterItems("published");
  const inprogressFiltered = filterItems("in-progress");
  const postersFiltered = filterItems("posters");

  publishedList.innerHTML = "";
  inprogressList.innerHTML = "";
  postersList.innerHTML = "";

  let delay = 0;
  publishedFiltered.forEach((item, i) => {
    const li = renderCard(item, "published");
    const card = li.querySelector("[data-card]");
    if (card) {
      card.style.animationDelay = `${delay * 0.05}s`;
      card.classList.add("animate-in");
      delay++;
    }
    publishedList.appendChild(li);
  });
  inprogressFiltered.forEach((item) => {
    const li = renderCard(item, "in-progress");
    const card = li.querySelector("[data-card]");
    if (card) {
      card.style.animationDelay = `${delay * 0.05}s`;
      card.classList.add("animate-in");
      delay++;
    }
    inprogressList.appendChild(li);
  });
  postersFiltered.forEach((item) => {
    const li = renderCard(item, "posters");
    const card = li.querySelector("[data-card]");
    if (card) {
      card.style.animationDelay = `${delay * 0.05}s`;
      card.classList.add("animate-in");
      delay++;
    }
    postersList.appendChild(li);
  });

  publishedCount.textContent = publishedFiltered.length ? `(${publishedFiltered.length})` : "";
  inprogressCount.textContent = inprogressFiltered.length ? `(${inprogressFiltered.length})` : "";
  postersCount.textContent = postersFiltered.length ? `(${postersFiltered.length})` : "";

  const total = publishedFiltered.length + inprogressFiltered.length + postersFiltered.length;
  emptyState.classList.toggle("hidden", total > 0);
}

// ---------- Card tilt (optional, subtle) ----------
function initCardTilt() {
  document.querySelectorAll("[data-card]").forEach((card) => {
    const rect = () => card.getBoundingClientRect();
    const onMove = (e) => {
      const { left, top, width, height } = rect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      const tiltX = Math.max(-3, Math.min(3, -y * 4));
      const tiltY = Math.max(-3, Math.min(3, x * 4));
      card.style.setProperty("--tilt-x", `${tiltX}deg`);
      card.style.setProperty("--tilt-y", `${tiltY}deg`);
    };
    const onLeave = () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
  });
}

// ---------- Event listeners ----------
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  render();
  initCardTilt();
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => c.classList.remove("chip--active"));
    chip.classList.add("chip--active");
    activeFilter = chip.dataset.filter;
    render();
    initCardTilt();
  });
});

resetBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  activeFilter = "all";
  filterChips.forEach((c) => {
    c.classList.toggle("chip--active", c.dataset.filter === "all");
  });
  render();
  initCardTilt();
});

// ---------- Scroll reveal (optional) ----------
function initScrollReveal() {
  const opts = { threshold: 0.08, rootMargin: "0px 0px -40px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-in");
    });
  }, opts);
  document.querySelectorAll(".section").forEach((s) => observer.observe(s));
}

// ---------- Init ----------
render();
initCardTilt();
initScrollReveal();
