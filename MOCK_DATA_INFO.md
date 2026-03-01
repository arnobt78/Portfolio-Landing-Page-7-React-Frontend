# Mock Data Setup

## Overview

This project is **React + Vite** (not Create React App). It uses mock data by default so you can run and deploy without a Sanity CMS backend. All data is pre-populated in `src/mockData.js`.

## How It Works

- **Production (e.g. Vercel)**: Uses mock data from `src/mockData.js` by default — no backend or CORS setup needed.
- **Development**: Uses mock data unless you set `VITE_SANITY_PROJECT_ID` (and optionally `VITE_SANITY_TOKEN`) in `.env` for real Sanity data.

## Mock Data Includes

### About Section

- 4 about cards showcasing different skills and expertise
- Pre-configured images from Unsplash

### Works/Portfolio Section

- 5 sample projects with descriptions
- Categories: UI/UX, Web App, Mobile App, React JS
- Sample images and links

### Skills Section

- 10 popular technologies (React, JavaScript, TypeScript, etc.)
- Icons from DevIcons CDN

### Experience Section

- Work experience from 2021-2023
- Multiple positions per year
- Detailed descriptions

### Testimonials Section

- 4 client testimonials
- Avatar images from Pravatar

### Brands Section

- 4 major tech company logos
- Google, Microsoft, Amazon, Meta

## Features Preserved

All frontend features remain intact:

- ✅ Contact form (submissions are mocked but UI works)
- ✅ All input fields functional
- ✅ All CSS/SCSS styling unchanged
- ✅ All animations and interactions
- ✅ Responsive design
- ✅ Filter functionality in Works section
- ✅ Testimonial navigation

## Switching to Real Sanity Data (development only)

To use real Sanity CMS data locally:

1. Create a `.env` file in the root directory.
2. Add your Sanity credentials (use **Vite** env vars so they are embedded at build time):

   ```
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_TOKEN=your_token
   ```

3. Restart the dev server (`npm run dev`).

The app will use Sanity when credentials are present in development.

## Production (e.g. Vercel)

This project uses **React + Vite** (not Create React App). In production:

- **Mock data is used by default** so the site works without a Sanity backend or CORS setup.
- Do **not** set `VITE_SANITY_PROJECT_ID` (or `VITE_SANITY_TOKEN`) in Vercel if you want mock data.
- To force mock data in production, you can set `VITE_USE_MOCK_DATA=true` in Vercel Environment Variables.
- To use Sanity in production (and fix CORS on the Sanity project), set `VITE_USE_SANITY=true` and your Sanity env vars in Vercel.

No backend or extra config is required for the default production deploy; the built app uses `src/mockData.js` so the portfolio loads correctly.
