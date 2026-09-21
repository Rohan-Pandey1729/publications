/**
 * Rohan Pandey — Publications site
 * Data from https://rohan-pandey1729.github.io/portfolio/
 */

const PUBLISHED = [
  {
    id: "refutation-gap",
    title: "The Refutation Gap: Certifying Both Halves of an Optimality Claim",
    meta: "arXiv:2609.20873 — cs.LO, cs.LG",
    desc: "Optimality claims from synthesis pipelines have two halves: the upper bound is witnessed by a re-executable program, while the lower bound (no smaller program exists) usually rests on an uncertified solver UNSAT. Closes this refutation gap for minimal linear straight-line programs over GF(2): every decisive UNSAT answer emits a DRAT proof checked by an independent third-party checker. Certifies all 121 optimality results for n = 6 to 9 (111 by verified refutations, 10 by a counting bound), with a median proof of 1.1 MB and checking at 1.9x solving cost, plus five case studies where verification caught defects that code review missed.",
    url: "https://arxiv.org/abs/2609.20873",
    linkLabel: "View on arXiv",
    tags: ["math", "ml"],
    venue: "arxiv",
    area: "Formal Verification",
    impact: "arXiv preprint",
  },
  {
    id: "demons-on-a-budget",
    title: "Demons on a Budget: Adaptive Measurement Placement at the Entanglement Phase Transition",
    meta: "arXiv:2608.19248 — quant-ph, cond-mat.stat-mech, cs.LG",
    desc: "Fixes the measurement budget in brickwork random Clifford circuits and varies the placement process instead of the measurement rate. A deterministic contiguous sweep cuts half-cut entropy by a factor of 3.4 versus random placement, and the effect is carried by spatial order alone (4.14±0.06 bits with random tie-breaking vs. 1.29±0.04 bits with position-ordered tie-breaking). The sweep eliminates the transition rather than shifting it: tripartite mutual information crossings recede as p∗∝1/L and data for 64≤L≤512 collapse onto S=p−1f(pL). Policies trained by cross-entropy and PPO fail to find the sweep, since score-based parameterizations control which sites are measured, not the order in which degenerate scores are resolved.",
    url: "https://arxiv.org/abs/2608.19248",
    linkLabel: "View on arXiv",
    tags: ["quantum", "ml", "rl"],
    venue: "arxiv",
    area: "Quantum Information",
    impact: "arXiv preprint",
  },
  {
    id: "factorlibrary",
    title: "FactorLibrary: From Polynomials to Circuits via Recursive Subgoals",
    meta: "ICML 2026 — 3rd AI for Math Workshop",
    desc: "Introduces FactorLibrary, a reusable library of factorizable subexpressions that serve as recursive subgoals for reinforcement-learning agents synthesizing minimal arithmetic circuits over finite fields. Compares bottom-up Gumbel-PPO-MCTS with top-down PPO+MCTS and SAC agents, with PPO+MCTS finding certified optimal circuits up to complexity 8 at a 91.8% success rate.",
    url: "https://openreview.net/pdf?id=2yIetdPvQh",
    linkLabel: "View on OpenReview",
    url2: "https://arxiv.org/abs/2606.25394",
    linkLabel2: "View on arXiv",
    tags: ["ml", "math", "rl"],
    venue: "featured",
    area: "RL / Mathematical AI",
    impact: "ICML workshop paper",
    badgeLabel: "ICML Workshop",
  },
  {
    id: "watchtower-poisoning",
    title: "Poisoning the Watchtower: Prompt Injection Attacks Against LLM-Augmented Security Operations Through Adversarial Log Content",
    meta: "arXiv:2605.24421",
    desc: "Introduces 'log-substrate prompt injection', where attacker-controlled log fields carry adversarial instructions to LLM-based SOC assistants. We propose a four-class attack taxonomy, evaluate 48 strategy–defense–task combinations using gpt-4o-mini, and find persona hijacks and summarization are especially effective; defenses reduce but do not eliminate risk.",
    url: "https://arxiv.org/abs/2605.24421",
    linkLabel: "View on arXiv",
    tags: ["ml", "cs", "security"],
    venue: "arxiv",
    area: "ML / Security",
    impact: "arXiv preprint",
  },
  {
    id: "async-pricing-marl",
    title: "Failure Modes of Deep Multi-Agent RL in Asynchronous Pricing: Reproducible Triggers, Trace Diagnostics, and a Partial Fix",
    meta: "arXiv:2606.09884 — cs.MA, cs.AI, cs.LG, econ.EM",
    desc: "Studies reproducible failure modes in deep multi-agent reinforcement learning for continuous-time pricing markets, including tacit cartel formation between DDPG agents and critic instability at high event rates. Shows that asynchrony and latency can partially reduce collusion, while trajectory-level diagnostics reveal signaling collapse and post-shock non-recovery.",
    url: "https://arxiv.org/abs/2606.09884",
    tags: ["ml", "rl"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "RL / Multi-Agent Systems",
    impact: "arXiv preprint",
  },
  {
    id: "circuitbuilder-rsi",
    title: "CircuitBuilder: From Polynomials to Circuits via Reinforcement Learning",
    meta: "ICLR 2026 — RSI Workshop",
    desc: "Formulates arithmetic-circuit synthesis as a single-player game where an RL agent builds circuits for target polynomials under an operation budget. Implements an AlphaZero-style training loop and compares PPO+MCTS vs. SAC, highlighting strengths in scaling and success rates across instances.",
    url: "https://openreview.net/forum?id=JNsTWIukjQ&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2026%2FWorkshop%2FRSI%2FAuthors%23your-submissions)",
    linkLabel: "View on OpenReview",
    url2: "https://arxiv.org/abs/2603.17075",
    linkLabel2: "View on arXiv",
    tags: ["ml", "math", "rl"],
    venue: "featured",
    area: "RL / Mathematical AI",
    impact: "ICLR workshop paper",
    badgeLabel: "ICLR Workshop",
  },
  {
    id: "beyond-answer-llms",
    title: "Beyond the Answer: Decoding the Behavior of LLMs as Scientific Reasoners",
    meta: "ICLR 2026 — P-AGI Workshop",
    desc: "Uses a Genetic Pareto (GEPA) approach to optimize prompts for scientific reasoning tasks and analyze how prompting shapes reasoning behavior in large language models. Shows that gains in scientific reasoning often come from brittle, model-specific logical heuristics rather than robust, general-purpose reasoning strategies.",
    url: "https://openreview.net/pdf?id=IdYSW0AS4Y",
    linkLabel: "View on OpenReview",
    url2: "https://arxiv.org/abs/2603.28038",
    linkLabel2: "View on arXiv",
    tags: ["ml"],
    venue: "featured",
    area: "Scientific Reasoning",
    impact: "ICLR workshop paper",
    badgeLabel: "ICLR Workshop",
  },
  {
    id: "semantic-limits",
    title: "Semantic Limits of Positive Existential Reasoning in Arithmetic Dynamics",
    meta: "arXiv:2602.06066 — math.GM",
    desc: "Studies structural limitations of purely algebraic reasoning in the analysis of arithmetic dynamical systems. Introduces a fragment-relative notion of algebraic refutability for dynamical properties defined by polynomial relations. Using preservation of positive existential formulas under ring homomorphisms, we show that any behavior realizable in a homomorphic extension of Z cannot be refuted by arguments confined to the positive existential fragment of first-order ring theory. Illustrates the framework using the Collatz map.",
    url: "https://arxiv.org/abs/2602.06066",
    tags: ["math"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "Mathematics",
    impact: "arXiv preprint",
  },
  {
    id: "collatz",
    title: "Logical Undefinability of the Generalized Collatz Transition Relation in Büchi Arithmetic",
    meta: "arXiv:2601.12772 — math.NT, math.DS",
    desc: "Shows that the arbitrary-step transition relation of the generalized Collatz map Tq,d is not first-order definable in Base-2 Büchi Arithmetic (BA2). The argument proves that definability of the transition relation would imply definability of the exponential set Pq={q^y:y∈N}; since Pq is strictly non-semilinear, this contradicts the Cobham-Semënov theorem and rules out recognition by any finite automaton reading base-2 representations.",
    url: "https://arxiv.org/abs/2601.12772",
    tags: ["math"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "Mathematics",
    impact: "arXiv preprint",
  },
  {
    id: "petersen",
    title: "Parity-Dependent Real-Rootedness in Independence Polynomials of Generalized Petersen Graphs",
    meta: "arXiv:2601.03293 — math.CO",
    desc: "Studies zeros of independence polynomials for Generalized Petersen graphs via transfer-matrix computations (n≤30, k∈{1,2,3,4}); finds parity-driven behavior where even k yields strictly real negative roots while odd k forms complex conjugate curves, motivating a real-rootedness/log-concavity conjecture for even k.",
    url: "https://arxiv.org/abs/2601.03293",
    tags: ["math"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "Mathematics",
    impact: "arXiv preprint",
  },
  {
    id: "rocket",
    title: "Amortized Inference for Model Rocket Aerodynamics: Learning to Estimate Physical Parameters from Simulation",
    meta: "arXiv:2512.22248 — cs.LG",
    desc: "Simulation-based amortized inference approach that trains a neural network on synthetic flight data to predict aerodynamic parameters (drag coefficient and thrust correction factor) for model rockets. Demonstrates sim-to-real transfer with zero real training examples, achieving 12.3 m mean absolute error on apogee prediction across 8 real flights.",
    url: "https://arxiv.org/abs/2512.22248",
    tags: ["ml", "aerospace"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "Aerospace / Simulation",
    impact: "arXiv preprint",
  },
  {
    id: "quantization",
    title: "Quantization Blindspots: How Model Compression Breaks Backdoor Defenses",
    meta: "arXiv:2512.06243 — cs.LG, cs.CR",
    desc: "Systematic empirical study of five representative backdoor defenses across three precision settings (FP32, INT8, INT4) on vision benchmarks. We observe that INT8 quantization reduces detection rates to 0% while leaving attack success rates above 99%, exposing a critical mismatch between defense evaluation and real-world deployment.",
    url: "https://arxiv.org/abs/2512.06243",
    tags: ["ml", "security"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "ML / Security",
    impact: "arXiv preprint",
  },
  {
    id: "oncostreams",
    title: "Analyzing the birth-death model of Oncostreams in Glioma, and the effects of Cytochalasin D treatment",
    meta: "arXiv:2407.10983 — q-bio.TO, math.PR",
    desc: "Models oncostream cell populations using a birth-death process to analyze glioma aggressiveness and treatment effects (Cytochalasin D). Integrates ex-vivo/in-vivo imaging and Kolmogorov equations to predict population changes under treatment.",
    url: "https://arxiv.org/abs/2407.10983",
    tags: ["bio", "math"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "Computational Biology",
    impact: "arXiv preprint",
  },
  {
    id: "follistatin-muscle-recovery",
    title: "Genetic Variation in Follistatin and its Role in Muscle Recovery and Hypertrophy: A Dose-Dependent Mechanistic Review",
    meta: "Zenodo DOI: 10.5281/zenodo.20501913 — Preprint, 2026",
    desc: "Reviews the Follistatin-Myostatin axis in skeletal muscle plasticity, distinguishing binary overexpression from graded physiological modulation. Synthesizes evidence from FST polymorphism studies and AAV-mediated FST gene therapy trials, while mapping therapeutic-window concerns around reproductive and bone-related off-target toxicity.",
    url: "https://doi.org/10.5281/zenodo.20501913",
    tags: ["bio"],
    linkLabel: "View on Zenodo",
    venue: "zenodo",
    area: "Muscle Biology",
    impact: "Zenodo preprint",
  },
  {
    id: "mobius",
    title: "The Möbius function of the poset of triangular numbers under divisibility",
    meta: "arXiv:2402.07934 — math.NT",
    desc: "Analyzes the Möbius function on the poset of triangular numbers under divisibility; introduces Hasse diagrams, zeta and Möbius matrices, and conjectures about asymptotic behavior, supported by visualizations and experiments.",
    url: "https://arxiv.org/abs/2402.07934",
    tags: ["math"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "Mathematics",
    impact: "arXiv preprint",
  },
  {
    id: "thinkswitch",
    title: "ThinkSwitch: Context-Distilled Dual-Mode LoRAs",
    meta: "arXiv:2606.01080 — cs.LG",
    desc: "Introduces ThinkSwitch, a low-compute loop for co-training paired instruct and thinking Qwen3-4B checkpoints. Thinking-model answers are stripped of reasoning traces, distilled into an instruct checkpoint with QLoRA, then recombined into a thinking checkpoint through spherical weight interpolation, improving AIME 2026 and PubMedQA subset scores using only 15 training prompts per domain at $2.86 total cost.",
    url: "https://arxiv.org/abs/2606.01080",
    tags: ["ml"],
    linkLabel: "View on arXiv",
    venue: "arxiv",
    area: "ML Systems",
    impact: "arXiv preprint",
  },
];

const IN_PROGRESS = [];

const RESEARCH_POSTERS = [
  {
    id: "cancer-modeling",
    title: "Parameter Identifiability for CAR T-cell Therapy Models",
    date: "2024-05",
    meta: "UW Population Health Award · Research poster",
    desc: "Developed mathematical models based on systems of ODEs to simulate CAR T-cell and tumor interactions using parameter sets from B-ALL patient data. Applied linear regression and MSE loss to train models predicting therapy outcomes and assess treatment plan efficacy. Won the UW Population Health Award.",
    url: "https://drive.google.com/file/d/1vivJ5Ao6NDRESVf4K6e0I3Gq5y1CqAWk/view?usp=sharing",
    tags: ["bio", "math"],
    linkLabel: "View Research Poster (UW Population Health Award)",
    area: "Computational Biology",
    impact: "Research poster",
  },
  {
    id: "backdoor",
    title: "Machine Learning Backdoor Research",
    date: "2024-06",
    meta: "Research poster",
    desc: "Research on undetectable checksum-triggered backdoors in MLPs trained on MNIST, achieving stealth misclassification with advanced cryptographic methods and adversarial ML techniques.",
    url: "https://drive.google.com/file/d/1V_9-0oTqYPZiQl4nhkCybbh8S508Y4Dq/view?usp=sharing",
    tags: ["ml", "security"],
    linkLabel: "View Research Poster",
    area: "ML / Security",
    impact: "Research poster",
  },
  {
    id: "td-mpc2",
    title: "TD-MPC2 Policy Distillation",
    date: "2024-12",
    meta: "Research poster",
    desc: "We investigated whether the model-based planning process of TD-MPC2 could be effectively distilled into a policy network via DAgger, training large-scale fully connected neural networks to imitate planning behavior without performing online trajectory sampling.",
    url: "https://drive.google.com/file/d/1R0qSwleil2hdmC4ecqo7-N7GQLzDQZV5/view?usp=sharing",
    tags: ["ml", "rl"],
    linkLabel: "View Research Poster",
    area: "RL / Distillation",
    impact: "Research poster",
  },
];

const AREA_ORDER = ["ML / Security", "RL / Multi-Agent Systems", "Quantum Information", "Formal Verification", "Mathematics", "Aerospace / Simulation", "Computational Biology", "Muscle Biology"];

// ---------- DOM refs ----------
const searchInput = document.getElementById("search");
const filterChips = document.querySelectorAll(".chip");
const featuredList = document.getElementById("featured-list");
const arxivGroups = document.getElementById("arxiv-groups");
const inprogressList = document.getElementById("inprogress-list");
const postersList = document.getElementById("posters-list");
const featuredSection = document.getElementById("featured");
const arxivSection = document.getElementById("arxiv");
const inprogressSection = document.getElementById("in-progress");
const postersSection = document.getElementById("posters");
const featuredCount = document.getElementById("featured-count");
const arxivCount = document.getElementById("arxiv-count");
const inprogressCount = document.getElementById("inprogress-count");
const postersCount = document.getElementById("posters-count");
const emptyState = document.getElementById("empty-state");
const resetBtn = document.getElementById("reset-filters");

let activeFilter = "all";
let searchQuery = "";
let activeView = "list";

// ---------- Helpers ----------
function getItemDate(item) {
  if (item.date) return item.date;
  const arxiv = item.meta.match(/arXiv:(\d{2})(\d{2})\./);
  if (arxiv) return `${2000 + parseInt(arxiv[1])}-${arxiv[2]}`;
  const conf = item.meta.match(/\b(ICML|ICLR|NeurIPS|CVPR)\s+(\d{4})\b/);
  if (conf) return `${conf[2]}-06`;
  const yr = item.meta.match(/\b(20\d{2})\b/);
  if (yr) return `${yr[1]}-06`;
  return "2024-01";
}

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
  const area = normalize(item.area);
  const impact = normalize(item.impact);
  return title.includes(q) || desc.includes(q) || meta.includes(q) || tags.includes(q) || area.includes(q) || impact.includes(q);
}

function matchesCategory(item, category) {
  if (category === "all") return true;
  if (category === "featured") return item.venue === "featured";
  if (category === "arxiv") return item.venue === "arxiv" || item.venue === "zenodo";
  if (category === "in-progress") return IN_PROGRESS.some((p) => p.id === item.id);
  if (category === "posters") return RESEARCH_POSTERS.some((p) => p.id === item.id);
  if (category === "math") return item.tags.includes("math");
  if (category === "ml") return item.tags.includes("ml");
  if (category === "rl") return item.tags.includes("rl");
  if (category === "quantum") return item.tags.includes("quantum");
  if (category === "aerospace") return item.tags.includes("aerospace");
  if (category === "bio") return item.tags.includes("bio");
  return true;
}

function tagClass(tag) {
  if (tag === "math") return "pub-card__tag--math";
  if (tag === "ml") return "pub-card__tag--ml";
  if (tag === "rl") return "pub-card__tag--rl";
  if (tag === "quantum") return "pub-card__tag--quantum";
  if (tag === "aerospace") return "pub-card__tag--aerospace";
  if (tag === "bio") return "pub-card__tag--bio";
  return "";
}

function renderCard(item, type) {
  const isSpotlight = type === "spotlight";
  const isFeatured = type === "featured" || isSpotlight;
  const isArxiv = type === "arxiv";
  const isZenodo = item.venue === "zenodo";
  const isPoster = type === "posters";
  const badge = isFeatured ? item.badgeLabel || "Conference Workshop" : isZenodo ? "Zenodo Preprint" : isArxiv ? "arXiv Preprint" : isPoster ? "Research Poster" : "In Progress / Report";
  const badgeClass = isFeatured
    ? "pub-card__badge--featured"
    : isZenodo
      ? "pub-card__badge--zenodo"
      : isArxiv
      ? "pub-card__badge--arxiv"
      : isPoster
        ? "pub-card__badge--poster"
        : "pub-card__badge--in-progress";
  const links = [];
  if (item.url && item.linkLabel) {
    links.push({ url: item.url, label: item.linkLabel });
  }
  if (item.url2 && item.linkLabel2) {
    links.push({ url: item.url2, label: item.linkLabel2 });
  }
  const linksHtml = links.length
    ? `<div class="pub-card__links">${links
        .map(
          (l) =>
            `<a class="pub-card__link" href="${escapeAttr(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a>`,
        )
        .join("")}</div>`
    : "";

  const tagsHtml = item.tags
    .map((t) => `<span class="pub-card__tag ${tagClass(t)}">${escapeHtml(t.toUpperCase())}</span>`)
    .join("");

  const el = document.createElement("li");

  let inner;
  if (isSpotlight) {
    inner = `
      <div class="spotlight__topline">
        <span class="spotlight__eyebrow">Latest Conference Paper</span>
        <span class="pub-card__badge pub-card__badge--featured">${escapeHtml(badge)}</span>
      </div>
      <h3 class="spotlight__title">${escapeHtml(item.title)}</h3>
      <div class="spotlight__cols">
        <div class="spotlight__main">
          <p class="spotlight__meta">${escapeHtml(item.meta)}</p>
          <p class="spotlight__desc">${escapeHtml(item.desc)}</p>
        </div>
        <div class="spotlight__side">
          <div class="pub-card__tags">${tagsHtml}</div>
          ${linksHtml}
        </div>
      </div>
    `;
    el.className = "spotlight-item";
  } else {
    inner = `
      <div class="pub-card__topline">
        <span class="pub-card__badge ${badgeClass}">${escapeHtml(badge)}</span>
        <span class="pub-card__area">${escapeHtml(item.area || "")}</span>
      </div>
      <h3 class="pub-card__title">${escapeHtml(item.title)}</h3>
      <p class="pub-card__meta">${escapeHtml(item.meta)}</p>
      <p class="pub-card__desc">${escapeHtml(item.desc)}</p>
      <div class="pub-card__tags">${tagsHtml}</div>
      ${linksHtml}
    `;
  }

  const card = document.createElement("div");
  card.className = `pub-card ${isSpotlight ? "pub-card--spotlight" : isFeatured ? "pub-card--featured" : ""}`;
  card.setAttribute("data-card", "");
  card.innerHTML = inner;

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

function escapeAttr(text) {
  return String(text).replace(/"/g, "&quot;");
}

function filterItems(type) {
  const source = type === "posters" ? RESEARCH_POSTERS : type === "in-progress" ? IN_PROGRESS : PUBLISHED;
  const venueFiltered =
    type === "featured"
      ? source.filter((item) => item.venue === type)
      : type === "arxiv"
        ? source.filter((item) => item.venue === "arxiv" || item.venue === "zenodo")
        : source;
  return venueFiltered.filter((item) => matchesSearch(item) && matchesCategory(item, activeFilter));
}

function groupByArea(items) {
  return items.reduce((groups, item) => {
    const area = item.area || "Other";
    if (!groups[area]) groups[area] = [];
    groups[area].push(item);
    return groups;
  }, {});
}

function orderedAreas(groups) {
  const known = AREA_ORDER.filter((area) => groups[area]);
  const extra = Object.keys(groups)
    .filter((area) => !AREA_ORDER.includes(area))
    .sort();
  return [...known, ...extra];
}

function appendAnimated(list, item, type, delay) {
  const li = renderCard(item, type);
  const card = li.querySelector("[data-card]");
  if (card) {
    card.style.animationDelay = `${delay * 0.05}s`;
    card.classList.add("animate-in");
  }
  list.appendChild(li);
  return delay + 1;
}

function render() {
  const graphDiv = document.getElementById("graph-view");
  const timelineDiv = document.getElementById("timeline-view");
  const listSections = [featuredSection, arxivSection, inprogressSection, postersSection];

  if (activeView === "graph") {
    listSections.forEach(s => { s.hidden = true; });
    emptyState.classList.add("hidden");
    graphDiv.classList.remove("hidden");
    timelineDiv.classList.add("hidden");
    renderGraphView();
    return;
  }

  if (activeView === "timeline") {
    listSections.forEach(s => { s.hidden = true; });
    emptyState.classList.add("hidden");
    graphDiv.classList.add("hidden");
    timelineDiv.classList.remove("hidden");
    renderTimelineView();
    return;
  }

  graphDiv.classList.add("hidden");
  timelineDiv.classList.add("hidden");

  const featuredFiltered = filterItems("featured");
  const arxivFiltered = filterItems("arxiv");
  const inprogressFiltered = filterItems("in-progress");
  const postersFiltered = filterItems("posters");

  featuredList.innerHTML = "";
  arxivGroups.innerHTML = "";
  inprogressList.innerHTML = "";
  postersList.innerHTML = "";

  let delay = 0;
  featuredFiltered.forEach((item, index) => {
    delay = appendAnimated(featuredList, item, index === 0 ? "spotlight" : "featured", delay);
  });

  const groups = groupByArea(arxivFiltered);
  orderedAreas(groups).forEach((area) => {
    const group = document.createElement("article");
    group.className = "area-group";
    const count = groups[area].length;
    group.innerHTML = `
      <div class="area-group__header">
        <h3 class="area-group__title">${escapeHtml(area)}</h3>
        <span class="area-group__count">${count} ${count === 1 ? "paper" : "papers"}</span>
      </div>
      <ul class="card-list area-group__list"></ul>
    `;
    const list = group.querySelector(".area-group__list");
    groups[area].forEach((item) => {
      delay = appendAnimated(list, item, "arxiv", delay);
    });
    arxivGroups.appendChild(group);
  });

  inprogressFiltered.forEach((item) => {
    delay = appendAnimated(inprogressList, item, "in-progress", delay);
  });
  postersFiltered.forEach((item) => {
    delay = appendAnimated(postersList, item, "posters", delay);
  });

  featuredCount.textContent = featuredFiltered.length ? `(${featuredFiltered.length})` : "";
  arxivCount.textContent = arxivFiltered.length ? `(${arxivFiltered.length})` : "";
  inprogressCount.textContent = inprogressFiltered.length ? `(${inprogressFiltered.length})` : "";
  postersCount.textContent = postersFiltered.length ? `(${postersFiltered.length})` : "";

  const total = featuredFiltered.length + arxivFiltered.length + inprogressFiltered.length + postersFiltered.length;
  featuredSection.hidden = total > 0 && featuredFiltered.length === 0;
  arxivSection.hidden = total > 0 && arxivFiltered.length === 0;
  inprogressSection.hidden = total > 0 && inprogressFiltered.length === 0;
  postersSection.hidden = total > 0 && postersFiltered.length === 0;
  emptyState.classList.toggle("hidden", total > 0);
}

// ---------- Reading progress ----------
function initReadingProgress() {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }, { passive: true });
}

// ---------- Graph tooltip ----------
function showGraphTooltip(item, e) {
  let tip = document.getElementById("graph-tooltip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "graph-tooltip";
    tip.className = "graph-tooltip";
    document.body.appendChild(tip);
  }
  const badge = item.badgeLabel || item.impact || "";
  const desc = item.desc.length > 190 ? item.desc.slice(0, 187) + "…" : item.desc;
  tip.innerHTML = `
    ${badge ? `<div class="graph-tooltip__badge">${escapeHtml(badge)}</div>` : ""}
    <h4 class="graph-tooltip__title">${escapeHtml(item.title)}</h4>
    <p class="graph-tooltip__desc">${escapeHtml(desc)}</p>
    ${item.meta ? `<div class="graph-tooltip__meta">${escapeHtml(item.meta)}</div>` : ""}
    <div class="graph-tooltip__hint">Click to open →</div>
  `;
  tip.classList.add("visible");
  if (e) positionGraphTooltip(e);
}

function positionGraphTooltip(e) {
  const tip = document.getElementById("graph-tooltip");
  if (!tip || !tip.classList.contains("visible")) return;
  const x = e.clientX + 18;
  const y = e.clientY - 12;
  tip.style.left = Math.min(x, window.innerWidth - 300) + "px";
  tip.style.top  = Math.max(8, Math.min(y, window.innerHeight - 200)) + "px";
}

function hideGraphTooltip() {
  const tip = document.getElementById("graph-tooltip");
  if (tip) tip.classList.remove("visible");
}

// ---------- Constellation view ----------
// Each paper orbits one primary topic hub; hubs sit in two central columns and
// their papers stack outward so every label gets its own row. Secondary topics
// are drawn as faint links that light up when a star or hub is hovered.
const GRAPH_TOPICS = [
  { tag: "ml",        label: "ML / CS" },
  { tag: "rl",        label: "Reinforcement Learning" },
  { tag: "math",      label: "Mathematics" },
  { tag: "security",  label: "Security" },
  { tag: "bio",       label: "Biology" },
  { tag: "quantum",   label: "Quantum" },
  { tag: "aerospace", label: "Aerospace" },
];

// Most specific tag wins when a paper carries several.
const PRIMARY_TOPIC_ORDER = ["quantum", "security", "aerospace", "bio", "rl", "math", "ml"];

function primaryTopic(item) {
  return PRIMARY_TOPIC_ORDER.find((t) => item.tags.includes(t)) || "ml";
}

function shortTitle(title) {
  const head = title.split(":")[0].trim();
  if (head.length <= 44) return head;
  return head.slice(0, 43).replace(/\s+\S*$/, "") + "…";
}

function renderGraphView() {
  const graphDiv = document.getElementById("graph-view");
  graphDiv.innerHTML = "";

  const ALL = [...PUBLISHED, ...RESEARCH_POSTERS];
  const isVisible = (item) => matchesSearch(item) && matchesCategory(item, activeFilter);
  const visibleCount = ALL.filter(isVisible).length;

  const W = 1100;
  const TOP = 40, ROW = 28, HEADING = 26, GAP = 30;
  const HUB_X = { left: 480, right: 620 };
  const STAR_X = { left: 330, right: 770 };

  // Group papers under their primary topic and balance topics across the two sides.
  const groups = GRAPH_TOPICS
    .map((t) => ({ ...t, items: ALL.filter((item) => primaryTopic(item) === t.tag) }))
    .filter((g) => g.items.length);
  const height = { left: 0, right: 0 };
  groups.forEach((g) => {
    g.side = height.left <= height.right ? "left" : "right";
    height[g.side] += HEADING + g.items.length * ROW + GAP;
  });
  const H = Math.max(height.left, height.right) - GAP + TOP * 2;

  // Positions
  const cursor = { left: TOP, right: TOP };
  const stars = [];
  const hubs = {};
  groups.forEach((g) => {
    const dir = g.side === "left" ? -1 : 1;
    const headingY = cursor[g.side] + 12;
    const firstY = cursor[g.side] + HEADING + ROW / 2;
    g.items.forEach((item, i) => {
      stars.push({ item, group: g, dir, x: STAR_X[g.side], y: firstY + i * ROW });
    });
    const ys = stars.filter((s) => s.group === g).map((s) => s.y);
    hubs[g.tag] = {
      group: g, dir,
      x: HUB_X[g.side],
      y: ys.reduce((a, b) => a + b, 0) / ys.length,
      headingX: STAR_X[g.side] - dir * 6,
      headingY,
    };
    cursor[g.side] += HEADING + g.items.length * ROW + GAP;
  });
  // Bow each stack gently toward its hub so groups read as arcs
  stars.forEach((s) => { s.x -= s.dir * 3 * Math.pow((s.y - hubs[s.group.tag].y) / ROW, 2); });

  const ns = "http://www.w3.org/2000/svg";
  const el = (tag, attrs = {}) => {
    const node = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  };
  const curve = (x1, y1, x2, y2) => {
    const mx = (x1 + x2) / 2;
    return `M${x1.toFixed(1)},${y1.toFixed(1)} C${mx.toFixed(1)},${y1.toFixed(1)} ${mx.toFixed(1)},${y2.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
  };

  const header = document.createElement("div");
  header.className = "graph-header";
  header.innerHTML = `
    <span class="graph-header__title">Research constellation</span>
    <span class="graph-header__hint">${visibleCount} of ${ALL.length} shown · hover a star to trace its topics · click to open</span>
  `;
  graphDiv.appendChild(header);

  const scroller = document.createElement("div");
  scroller.className = "graph-scroll";
  const svg = el("svg", {
    viewBox: `0 0 ${W} ${H}`,
    class: "graph-svg",
    role: "group",
    "aria-label": "Research constellation: papers grouped around topic hubs",
  });

  // Faint starfield (seeded so it doesn't jump between renders)
  const sky = el("g", { class: "graph-sky", "aria-hidden": "true" });
  let seed = 11;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 90; i++) {
    sky.appendChild(el("circle", { cx: (rand() * W).toFixed(1), cy: (rand() * H).toFixed(1), r: (0.4 + rand() * 0.9).toFixed(2), opacity: (0.15 + rand() * 0.35).toFixed(2) }));
  }
  svg.appendChild(sky);

  // Links: primary (star → own hub) and secondary (star → other topic hubs)
  const linkG = el("g", { class: "graph-links", "aria-hidden": "true" });
  const links = [];
  stars.forEach((s) => {
    s.item.tags.forEach((tag) => {
      const hub = hubs[tag];
      if (!hub) return;
      const primary = tag === s.group.tag;
      const path = el("path", {
        d: primary ? curve(hub.x, hub.y, s.x, s.y) : curve(s.x, s.y, hub.x, hub.y),
        class: `graph-link t-${tag} ${primary ? "graph-link--primary" : "graph-link--secondary"}${isVisible(s.item) ? "" : " is-muted"}`,
      });
      linkG.appendChild(path);
      links.push({ el: path, id: s.item.id, tag });
    });
  });
  svg.appendChild(linkG);

  // Focus handling
  const starEls = {};
  const hubEls = {};
  const setFocus = (ids, tags) => {
    svg.classList.add("has-focus");
    links.forEach((l) => l.el.classList.toggle("is-active", ids.has(l.id) && tags.has(l.tag)));
    Object.entries(starEls).forEach(([id, g]) => g.classList.toggle("is-active", ids.has(id)));
    Object.entries(hubEls).forEach(([tag, els]) => els.forEach((e) => e.classList.toggle("is-active", tags.has(tag))));
  };
  const clearFocus = () => {
    svg.classList.remove("has-focus");
    svg.querySelectorAll(".is-active").forEach((n) => n.classList.remove("is-active"));
    hideGraphTooltip();
  };
  const focusHub = (tag) => {
    const ids = new Set(stars.filter((s) => s.item.tags.includes(tag)).map((s) => s.item.id));
    setFocus(ids, new Set([tag]));
  };
  const openItem = (item) => { if (item.url) window.open(item.url, "_blank", "noopener,noreferrer"); };
  const bindHover = (node, onEnter, extra = {}) => {
    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("focus", onEnter);
    node.addEventListener("mouseleave", clearFocus);
    node.addEventListener("blur", clearFocus);
    if (extra.move) node.addEventListener("mousemove", extra.move);
  };

  // Hubs + headings
  Object.entries(hubs).forEach(([tag, hub]) => {
    const g = hub.group;
    const hubG = el("g", { class: `graph-hub t-${tag}`, transform: `translate(${hub.x},${hub.y.toFixed(1)})`, "aria-hidden": "true" });
    hubG.appendChild(el("circle", { r: 20, class: "graph-hub__halo" }));
    hubG.appendChild(el("circle", { r: 7.5, class: "graph-hub__core" }));
    svg.appendChild(hubG);

    const heading = el("text", {
      x: hub.headingX, y: hub.headingY,
      class: `graph-heading t-${tag}`,
      "text-anchor": g.side === "left" ? "end" : "start",
    });
    heading.textContent = `${g.label}  ·  ${g.items.length}`;
    svg.appendChild(heading);

    hubEls[tag] = [hubG, heading];
    bindHover(hubG, () => focusHub(tag));
    bindHover(heading, () => focusHub(tag));
    hubG.style.pointerEvents = "all";
  });

  // Stars
  stars.forEach((s) => {
    const item = s.item;
    const isFeatured = item.venue === "featured";
    const isPoster = RESEARCH_POSTERS.some((p) => p.id === item.id);
    const g = el("g", {
      class: `graph-star t-${s.group.tag}${isFeatured ? " graph-star--featured" : ""}${isPoster ? " graph-star--poster" : ""}${isVisible(item) ? "" : " is-muted"}`,
      transform: `translate(${s.x.toFixed(1)},${s.y.toFixed(1)})`,
      tabindex: "0",
      role: "link",
      "aria-label": `${item.title} (${item.badgeLabel || item.impact || ""})`,
    });
    // Wide invisible hit area covering the star and its label
    g.appendChild(el("rect", { x: s.dir < 0 ? -262 : -12, y: -12, width: 274, height: 24, class: "graph-star__hit" }));
    if (isFeatured) g.appendChild(el("circle", { r: 11, class: "graph-star__ring" }));
    g.appendChild(el("circle", { r: isFeatured ? 6.5 : 5, class: "graph-star__core" }));
    const label = el("text", {
      x: s.dir * 14, y: 4.2,
      class: "graph-star__label",
      "text-anchor": s.dir < 0 ? "end" : "start",
    });
    label.textContent = shortTitle(item.title);
    g.appendChild(label);

    const enter = (e) => {
      setFocus(new Set([item.id]), new Set(item.tags));
      if (e.type === "focus") {
        const r = g.getBoundingClientRect();
        showGraphTooltip(item, { clientX: r.right, clientY: r.top });
      } else {
        showGraphTooltip(item, e);
      }
    };
    bindHover(g, enter, { move: positionGraphTooltip });
    g.addEventListener("click", () => openItem(item));
    g.addEventListener("keydown", (e) => { if (e.key === "Enter") openItem(item); });

    starEls[item.id] = g;
    svg.appendChild(g);
  });

  scroller.appendChild(svg);
  graphDiv.appendChild(scroller);

  const legend = document.createElement("div");
  legend.className = "graph-legend";
  legend.innerHTML = `
    <span class="graph-legend__item"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5" class="graph-legend__dot"/></svg>Preprint</span>
    <span class="graph-legend__item"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" class="graph-legend__ring"/><circle cx="12" cy="12" r="6" class="graph-legend__dot"/></svg>Conference paper</span>
    <span class="graph-legend__item"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5" class="graph-legend__hollow"/></svg>Research poster</span>
    <span class="graph-legend__item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12 H22" class="graph-legend__dash"/></svg>Also relates to topic</span>
  `;
  graphDiv.appendChild(legend);
}

// ---------- Timeline view ----------
function renderTimelineView() {
  const timelineDiv = document.getElementById("timeline-view");
  timelineDiv.innerHTML = "";

  const ALL = [...PUBLISHED, ...RESEARCH_POSTERS];
  ALL.sort((a, b) => getItemDate(b).localeCompare(getItemDate(a)));

  const byYear = ALL.reduce((acc, item) => {
    const y = getItemDate(item).slice(0, 4);
    (acc[y] = acc[y] || []).push(item);
    return acc;
  }, {});

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const track = document.createElement("div");
  track.className = "timeline-track";

  Object.keys(byYear).sort().reverse().forEach(year => {
    const section = document.createElement("div");
    section.className = "timeline-year-section";

    const yearLabel = document.createElement("span");
    yearLabel.className = "timeline-year-label";
    yearLabel.textContent = year;
    section.appendChild(yearLabel);

    const cards = document.createElement("div");
    cards.className = "timeline-cards";

    byYear[year].forEach(item => {
      const monthIdx = parseInt(getItemDate(item).slice(5, 7)) - 1;
      const isFeatured = item.venue === "featured";
      const badge = item.badgeLabel || item.impact || "";
      const badgeCls = isFeatured ? "pub-card__badge--featured" : "pub-card__badge--arxiv";

      const card = document.createElement("div");
      card.className = `timeline-card${isFeatured ? " timeline-card--featured" : ""}`;
      card.innerHTML = `
        <div class="timeline-card__month">${MONTHS[monthIdx] || ""}</div>
        ${badge ? `<div class="timeline-card__badge ${badgeCls}">${escapeHtml(badge)}</div>` : ""}
        <h4 class="timeline-card__title">${escapeHtml(item.title)}</h4>
        <div class="timeline-card__tags">${item.tags.slice(0, 3).map(t => `<span class="pub-card__tag ${tagClass(t)}">${escapeHtml(t.toUpperCase())}</span>`).join("")}</div>
        ${item.url ? `<a href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer" class="timeline-card__link">View →</a>` : ""}
      `;
      cards.appendChild(card);
    });

    section.appendChild(cards);
    track.appendChild(section);
  });

  timelineDiv.appendChild(track);
}

// ---------- Card tilt (optional, subtle) ----------
function initCardTilt() {
  document.querySelectorAll("[data-card]").forEach((card) => {
    const rect = () => card.getBoundingClientRect();
    const onMove = (e) => {
      const { left, top, width, height } = rect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      const tiltX = Math.max(-2, Math.min(2, -y * 3));
      const tiltY = Math.max(-2, Math.min(2, x * 3));
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

// ---------- Stat counters ----------
function animateCount(el, from, to, duration) {
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(from + (to - from) * eased);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initStatCounters() {
  const panel = document.querySelector(".impact-panel");
  if (!panel) return;
  const numbers = panel.querySelectorAll(".impact-panel__number");
  const targets = Array.from(numbers).map((el) => parseInt(el.textContent, 10));
  let fired = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !fired) {
      fired = true;
      numbers.forEach((el, i) => animateCount(el, 0, targets[i], 1400));
      observer.disconnect();
    }
  }, { threshold: 0.6 });
  observer.observe(panel);
}

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

// ---------- View toggle ----------
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("view-btn--active"));
    btn.classList.add("view-btn--active");
    activeView = btn.dataset.view;
    render();
    if (activeView === "list") initCardTilt();
  });
});

// ---------- Theme toggle ----------
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const root = document.documentElement;
  const label = btn.querySelector(".theme-toggle__label");
  const sync = () => {
    const dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    label.textContent = dark ? "Light" : "Dark";
  };
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
  // Follow the OS setting until the visitor picks a theme explicitly
  const media = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
  if (media && media.addEventListener) {
    media.addEventListener("change", (e) => {
      let saved = null;
      try { saved = localStorage.getItem("theme"); } catch (err) {}
      if (saved) return;
      root.setAttribute("data-theme", e.matches ? "dark" : "light");
      sync();
    });
  }
  sync();
}

// ---------- Init ----------
initThemeToggle();
render();
initCardTilt();
initScrollReveal();
initStatCounters();
initReadingProgress();
