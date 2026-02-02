# Mock Data Setup

## Overview

This project now uses mock data instead of requiring a Sanity CMS account. All the data is pre-populated and ready to use!

## How It Works

The application automatically detects whether Sanity credentials are configured:

- **Without Sanity credentials**: Uses mock data from `src/mockData.js`
- **With Sanity credentials**: Uses real Sanity CMS data

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

## Switching to Real Sanity Data

To use real Sanity CMS data:
nal

- ✅ All CSS/SCSS styling unchanged
- ✅ All animations and interactions
- ✅ Responsive design
- ✅ Filter functionality in Works section
- ✅ Testimonial navigation

## Switching to Real Sanity Data

To use real Sanity CMS data:

1. Create a `.env` file in the root directory
2. Add your Sanity credentials:

   ```
   REACT_APP_SANITY_PROJECT_ID=your_project_id
   REACT_APP_SANITY_TOKEN=your_token
   ```

3. Restart the development server

The app will automatically switch from mock data to Sanity data!

## No Changes Required For Deployment

The mock data setup works seamlessly on Vercel and other deployment platforms without any additional configuration.
