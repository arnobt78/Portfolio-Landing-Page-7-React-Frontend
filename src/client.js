import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
  mockAbouts,
  mockWorks,
  mockSkills,
  mockExperiences,
  mockTestimonials,
  mockBrands,
} from './mockData';

// Use mock data mode when Sanity credentials are not available
const USE_MOCK_DATA = !process.env.REACT_APP_SANITY_PROJECT_ID;

// Force mock data for now (remove this line later if you want to use Sanity)
// eslint-disable-next-line no-console
console.log('Mock Data Mode:', USE_MOCK_DATA, 'Project ID:', process.env.REACT_APP_SANITY_PROJECT_ID);

export const client = USE_MOCK_DATA
  ? {
    fetch: (query) => new Promise((resolve) => {
      setTimeout(() => {
        // Parse the query to determine what data to return
        // eslint-disable-next-line no-console
        console.log('Fetching mock data for query:', query);
        if (query.includes('abouts')) {
          // eslint-disable-next-line no-console
          console.log('Returning mockAbouts:', mockAbouts.length, 'items');
          resolve(mockAbouts);
        } else if (query.includes('works')) {
          // eslint-disable-next-line no-console
          console.log('Returning mockWorks:', mockWorks.length, 'items');
          resolve(mockWorks);
        } else if (query.includes('skills')) {
          resolve(mockSkills);
        } else if (query.includes('experiences')) {
          resolve(mockExperiences);
        } else if (query.includes('testimonials')) {
          resolve(mockTestimonials);
        } else if (query.includes('brands')) {
          resolve(mockBrands);
        } else {
          resolve([]);
        }
      }, 100); // Simulate network delay
    }),
    create: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve({ _id: `mock-id-${Date.now()}` });
      }, 500);
    }),
  }
  : sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
  });

const builder = USE_MOCK_DATA ? null : imageUrlBuilder(client);

export const urlFor = (source) => {
  // If using mock data, return the source directly (it's already a URL)
  if (USE_MOCK_DATA) {
    return source;
  }
  return builder.image(source);
};
