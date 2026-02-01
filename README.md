# Research Publications — Rohan Pandey

A focused, interactive site showcasing **published papers** and **in-progress research** by Rohan Pandey. Built to stand out with a distinctive dark UI, smooth animations, and filtering.

## Features

- **Published** — 6 papers with arXiv links and short descriptions
- **In progress & reports** — RL for polynomials, ThinkSwitch, cancer modeling, backdoor research, TD-MPC2
- **Search** — by title or topic
- **Filters** — All / Published / In progress / Math / ML / Biology
- **Card tilt** — subtle 3D tilt on hover
- **Staggered entrance** — cards animate in on load
- **Accessible** — semantic HTML, focus styles, reduced-motion respected
- **Link back** — to [developerFolio](https://rohan-pandey1729.github.io/developerFolio/)

## Run locally

Serve the folder over HTTP (e.g. with Python or Node):

```bash
# Python 3
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then open `http://localhost:8000` (or the port shown).

## Deploy on GitHub Pages

1. Create a new repo (e.g. `publications`) or use this folder as the repo root.
2. Push `index.html`, `styles.css`, `script.js` (and optionally `README.md`, `LICENSE`).
3. In the repo: **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Branch: **main** (or default), folder: **/ (root)**. Save.
6. After a minute or two, the site will be at `https://<username>.github.io/<repo>/`.

If the repo is named `publications`, the URL will be `https://<username>.github.io/publications/`.

## Links used

- **arXiv** — `https://arxiv.org/abs/<id>` for published papers
- **Google Drive** — CAR T-cell poster (UW Population Health Award), Backdoor poster, TD-MPC2 paper
- **Portfolio** — [developerFolio](https://rohan-pandey1729.github.io/developerFolio/)
- **Contact** — rpande.1729@gmail.com

To change links or add papers, edit `script.js` (arrays `PUBLISHED` and `IN_PROGRESS`) and re-deploy.
