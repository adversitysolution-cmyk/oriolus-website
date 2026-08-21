# Daily Spanz - Dual Implementation Repository

This workspace is cleanly organized into two distinct, dedicated folders:

---

## 📁 1. [`HTML/`](./HTML/) (Original Static Web Template)
Contains the 100% untouched original static HTML5/CSS3/jQuery project.

### Contents:
- All **25 original HTML pages** (`index.html`, `about.html`, `procedures.html`, `massage-therapy.html`, `shop.html`, `checkout.html`, etc.)
- `css/` (17 stylesheets)
- `js/` (20 JavaScript libraries and custom scripts)
- `fonts/` (FontAwesome, Flaticon, Glyphicons)
- `images/` (19 image directories)
- `inc/sendmail.php` (PHP contact mailer)
- `assets/` (Revolution slider, lightboxes, timepicker, language-switcher)

### How to Run:
Open `HTML/index.html` directly in any web browser or serve with Live Server / Apache / Nginx.

---

## ⚛️ 2. [`React/`](./React/) (Pure React Vite Application)
Contains **ONLY** the React single-page application. No HTML template pages are placed inside this folder.

### Contents:
- **`src/`**
  - `pages/` (All 25 React page components in JSX)
  - `components/` (Header, Footer, HeroSlider, Breadcrumb, ScrollToTop, Sidebars, etc.)
  - `layouts/` (MainLayout)
  - `App.jsx` (Client-side routing with React Router)
  - `main.jsx` (Application root entry)
- **`public/`** (Static assets: `assets/`, `css/`, `fonts/`, `images/`)
- **`index.html`** (Single-page app root entry `<div id="root"></div>`)
- **`package.json`** & **`vite.config.js`**

### How to Run the React App:
```bash
cd React
npm install
npm run dev
```

### How to Build for Production:
```bash
cd React
npm run build
```
Production bundle is compiled into `React/dist/`.
