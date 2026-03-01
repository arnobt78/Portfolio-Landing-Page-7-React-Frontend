# Portfolio Landing Page 7 - React, Vite, TailwindCSS Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.4-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.3-green)](https://vite.dev/)
[![SASS](https://img.shields.io/badge/SASS-1.97.3-cc6699)](https://sass-lang.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.34.0-purple)](https://www.framer.com/motion/)

A single-page portfolio template built with **React** and **Vite**, featuring smooth animations, section-based layout, and mock data so you can run and deploy without any backend. Use it as a learning resource, a starter for your own portfolio, or a reference for React patterns, HOCs, and Framer Motion.

- **Live Demo:** [https://portfolio-ui-7.vercel.app/](https://portfolio-ui-7.vercel.app/)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack & Keywords](#tech-stack--keywords)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [How the Project Works](#how-the-project-works)
- [Components & Reuse](#components--reuse)
- [Data Layer & API](#data-layer--api)
- [Features & Functionalities](#features--functionalities)
- [Backend & Deployment](#backend--deployment)
- [Code Snippets](#code-snippets)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Overview

This is a **React + Vite** frontend project (not Create React App). It is a one-page portfolio with sections: **Header**, **About**, **Work** (portfolio with filters), **Skills & Experience**, **Testimonials**, and **Contact**. All content is driven by **mock data** in `src/mockData.js`, so no CMS or API is required to run or deploy. The app uses **Framer Motion** for animations, **SASS** for styling, and a small **wrapper** layer (HOCs) for shared layout and section IDs used by the navbar and navigation dots.

---

## Tech Stack & Keywords

| Category      | Technologies / Terms                 |
| ------------- | ------------------------------------ |
| **Framework** | React 19, Vite 7                     |
| **Styling**   | SASS (SCSS)                          |
| **Animation** | Framer Motion                        |
| **Icons**     | react-icons                          |
| **Data**      | In-memory mock (no backend required) |
| **Linting**   | ESLint (Airbnb + React)              |
| **Deploy**    | Vercel (output: `dist`)              |

**Keywords:** portfolio, React, Vite, single-page, mock data, Framer Motion, SASS, HOC, section navigation, contact form, testimonials, skills, works filter.

---

## Project Structure

```bash
portfolio-ui-7/
├── index.html              # Vite entry HTML (root)
├── vite.config.js          # Vite + React plugin config
├── vercel.json             # Vercel: framework, buildCommand, outputDirectory
├── package.json
├── .env.example             # Optional env vars (see Environment Variables)
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── index.js             # React root (createRoot, StrictMode)
│   ├── index.css            # Global styles
│   ├── App.js               # Main app: Navbar + section containers
│   ├── App.scss
│   ├── client.js            # Data client: mock fetch/create, urlFor (no Sanity in bundle)
│   ├── mockData.js          # All section data (abouts, works, skills, experiences, testimonials, brands)
│   ├── constants/
│   │   ├── index.js
│   │   └── images.js        # Static asset imports (logos, icons, placeholders)
│   ├── components/         # Reusable UI
│   │   ├── Navbar
│   │   ├── SocialMedia
│   │   └── NavigationDots
│   ├── container/           # Section screens (wrapped with AppWrap / MotionWrap)
│   │   ├── Header
│   │   ├── About
│   │   ├── Work
│   │   ├── Skills
│   │   ├── Testimonial
│   │   └── Footer
│   └── wrapper/
│       ├── AppWrap.js       # HOC: layout + SocialMedia + NavigationDots + section id
│       ├── MotionWrap.js    # HOC: Framer Motion scroll-in animation
│       └── index.js
└── backend_sanity_portfolio/  # Optional Sanity CMS schemas (not used by app at runtime)
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 20 and < 25 (see `engines` in `package.json`)

### Install & Run

```bash
# Clone the repository (if needed)
git clone <your-repo-url>
cd portfolio-ui-7

# Install dependencies
npm install

# Start development server (Vite)
npm run dev
```

Open **<http://localhost:5173>** (or the URL Vite prints).

### Build & Preview

```bash
# Production build (output in dist/)
npm run build

# Preview production build locally
npm run preview
```

### Lint

```bash
npm run lint        # Check only
npm run lint:fix    # Auto-fix where possible
```

---

## Environment Variables

The app runs **without any environment variables**. All content comes from `src/mockData.js`.

If you want to document or later switch to a real backend (e.g. Sanity), you can use a `.env` file. Copy from `.env.example`:

```bash
cp .env.example .env
```

**.env.example** documents optional variables (currently unused in code):

| Variable                 | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| `VITE_USE_MOCK_DATA`     | Force mock data (e.g. `true`)                |
| `VITE_USE_SANITY`        | Opt-in to Sanity in production (e.g. `true`) |
| `VITE_SANITY_PROJECT_ID` | Sanity project ID (for future use)           |
| `VITE_SANITY_TOKEN`      | Sanity token (for future use)                |

**Important:** Only variables prefixed with `VITE_` are exposed to the client bundle in Vite. Do not put secrets in `VITE_*` if they must stay server-only.

For **Vercel**: you do not need to set any of these for the current mock-only setup. Build command is `npm run build`, output directory is `dist` (see `vercel.json`).

---

## How the Project Works

1. **Entry:** `index.html` loads `/src/index.js` as a module. `index.js` renders `<App />` into `#root` with `ReactDOM.createRoot` and `StrictMode`.

2. **App:** `App.js` renders a fixed `Navbar` and then the section components in order: `Header`, `About`, `Work`, `Skills`, `Testimonial`, `Footer`. Each section is a **container** that may be wrapped by `AppWrap` and/or `MotionWrap`.

3. **Navigation:** The Navbar and `NavigationDots` use anchor links `#home`, `#about`, `#work`, `#skills`, `#testimonial`, `#contact`. These IDs are set by `AppWrap(Component, idName, classNames)` on the wrapper div.

4. **Data:** Containers that need data call `client.fetch(query)` (or `client.create(...)` in Footer). The **client** in `src/client.js` is a mock implementation that resolves with data from `mockData.js`; there are no HTTP requests. `urlFor(source)` is a no-op that returns `source` (for compatibility with a possible future Sanity image helper).

5. **Styling:** Global and section-specific SCSS are imported in `App.js` and in each container/component. BEM-like class names (`app__section-element`) are used for scoping.

6. **Animations:** Framer Motion is used for scroll-in and hover effects. `MotionWrap` adds a common scroll-in animation to a section content.

---

## Components & Reuse

### Navbar (`src/components/Navbar/Navbar.jsx`)

- Desktop: logo + horizontal links (`#home`, `#about`, `#work`, `#skills`, `#contact`).
- Mobile: hamburger menu that toggles a slide-in list of the same links.
- **Reuse:** Import `Navbar`, place at top of your layout. Ensure your section wrapper divs have matching `id`s (e.g. `id="about"`).

### SocialMedia (`src/components/SocialMedia.jsx`)

- Renders Twitter, Facebook, Instagram icons (no links by default).
- **Reuse:** Replace icons or add `href` in each wrapper. Used inside `AppWrap` on the right side of sections.

### NavigationDots (`src/components/NavigationDots.jsx`)

- Vertical dots for `home`, `about`, `work`, `skills`, `testimonial`, `contact`. Active dot is highlighted via `active` prop.
- **Reuse:** `<NavigationDots active={currentSectionId} />`. Ensure section IDs match the dot keys.

### AppWrap (HOC) (`src/wrapper/AppWrap.js`)

- Wraps a section with: outer div `id={idName}`, `SocialMedia`, inner wrapper with `Component` and a copyright block, and `NavigationDots`.
- **Reuse:** `export default AppWrap(YourSection, 'section-id', 'optional-classNames');`

### MotionWrap (HOC) (`src/wrapper/MotionWrap.js`)

- Wraps a component in a `motion.div` with `whileInView` (e.g. slide-up + fade-in).
- **Reuse:** `export default AppWrap(MotionWrap(YourSection, 'classNames'), 'id', 'wrapperClass');`

### Containers (Header, About, Work, Skills, Testimonial, Footer)

- Each fetches its data (or uses static content) and renders one section. They are composed with `AppWrap` and often `MotionWrap`.
- **Reuse:** Copy a container folder (e.g. `About`), change the `client.fetch` query or replace with local state, and register it in `App.js` and in `container/index.js`. Add a corresponding nav link and dot in `Navbar` and `NavigationDots`.

---

## Data Layer & API

There are **no external API endpoints**. The app uses an in-memory data layer in `src/client.js`:

- **`client.fetch(query)`** — Returns a Promise that resolves with mock arrays keyed by query content (e.g. `abouts`, `works`, `skills`, `experiences`, `testimonials`, `brands`). Query format is Sanity-style (`*[_type == "abouts"]`) but not executed; the client only checks `query.includes('abouts')` etc.

- **`client.create(payload)`** — Returns a Promise that resolves with a fake `{ _id }`. Used by the contact form in Footer; no data is sent anywhere.

- **`urlFor(source)`** — Returns `source` unchanged. Kept so that components can pass image references that would later be resolved by a Sanity image URL builder if you plug one in.

Data lives in **`src/mockData.js`**: `mockAbouts`, `mockWorks`, `mockSkills`, `mockExperiences`, `mockTestimonials`, `mockBrands`. Edit this file to change portfolio content without touching the backend.

---

## Features & Functionalities

| Feature                    | Where                  | Description                                                                                                                                                |
| -------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Single-page navigation** | Navbar, NavigationDots | Anchor links to sections by `id`.                                                                                                                          |
| **Responsive navbar**      | Navbar                 | Hamburger menu on small screens; slide-in list.                                                                                                            |
| **Header**                 | Header                 | Intro line, name, tags, profile image, floating tech circles.                                                                                              |
| **About**                  | About                  | Cards (title, description, image) from mock `abouts`.                                                                                                      |
| **Work / Portfolio**       | Work                   | Grid of projects; filter by **All**, **UI/UX**, **Web App**, **Mobile App**, **React JS**. Each item: image, title, description, tag, links (view / code). |
| **Skills & Experience**    | Skills                 | List of skills (icon, name) and timeline of experiences (year, works with name, company); tooltips on work items via `react-tooltip`.                      |
| **Testimonials**           | Testimonial            | One testimonial at a time; prev/next buttons; brand logos below.                                                                                           |
| **Contact**                | Footer                 | Email/phone links; form (name, email, message). Submit calls `client.create()` and shows a thank-you state (no real backend).                              |
| **Animations**             | Framer Motion          | Scroll-in and hover effects in sections and cards.                                                                                                         |
| **SEO**                    | index.html             | Meta title, description, author, keywords, Open Graph, Twitter Card, canonical URL.                                                                        |

---

## Backend & Deployment

- **Backend:** None required. The app is frontend-only and uses mock data. The optional `backend_sanity_portfolio/` folder contains Sanity schemas for reference only; the running app does not call Sanity.

- **Deployment (Vercel):**
  - Build: `npm run build`
  - Output: `dist`
  - Config: `vercel.json` sets `framework`, `buildCommand`, and `outputDirectory`. No env vars are required for the current mock setup.

---

## Code Snippets

### Using the data client in a container

```jsx
import { client, urlFor } from "../../client";

useEffect(() => {
  client.fetch('*[_type == "abouts"]').then((data) => {
    setAbouts(data);
  });
}, []);

// Render: urlFor(item.imgUrl) for image src
```

### Wrapping a section with AppWrap and MotionWrap

```jsx
import { AppWrap, MotionWrap } from '../../wrapper';

const MySection = () => ( /* ... */ );

export default AppWrap(
  MotionWrap(MySection, 'app__mysection'),
  'mysection',
  'app__whitebg',
);
```

### Adding a new nav item

In **Navbar** and **NavigationDots**, add the same id to the list (e.g. `'mysection'`). In the container, use `AppWrap(Component, 'mysection', ...)` so the section has `id="mysection"`.

---

## Keywords

portfolio, React, Vite, single-page application, mock data, Framer Motion, SASS, HOC, section navigation, contact form, testimonials, skills, works filter, frontend, developer portfolio, open source, headless CMS, Sanity.

---

## Conclusion

This project is a **React + Vite** portfolio template with **mock data**, **Framer Motion**, and **SASS**. It shows how to structure a single-page app with section-based navigation, HOCs for layout and animation, and a simple data client that can be swapped later for a real API. Use it to learn React patterns, to build your own portfolio, or to reuse components and wrappers in other projects.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
