# Restorative & Counseling Handbook — Culture Engine

Website for the **Matchbook Learning Schools of Indiana** Restorative Team & Counseling Operating Manual — Wendell Phillips School 63 · 2026–27.

A role-based handbook for the Restorative Team and Counselors: roles, responsibilities, and operating routines defined so the culture system holds steady across people, schedules, and daily pressure.

## Structure

- `index.html` — the full handbook (Parts 0–10 + Appendix) as a single scrolling page with sidebar navigation
- `css/styles.css` — site styles matched to the Matchbook handbook design (red `#E21C24`, ink `#1A1A1A`, gold `#F9DC7C`; Anton / Oswald / Montserrat type)
- `js/main.js` — mobile nav, scrollspy, back-to-top

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

then visit <http://localhost:8000>.

## Publishing

The site is a static page — enable **GitHub Pages** (Settings → Pages → deploy from branch, root folder) to publish it.
