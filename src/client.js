import {
  mockAbouts,
  mockWorks,
  mockSkills,
  mockExperiences,
  mockTestimonials,
  mockBrands,
} from "./mockData";

// Always use mock data so the app works without a Sanity backend (no CORS, no env).
const client = {
  fetch: (query) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (query.includes("abouts")) {
          resolve(mockAbouts);
        } else if (query.includes("works")) {
          resolve(mockWorks);
        } else if (query.includes("skills")) {
          resolve(mockSkills);
        } else if (query.includes("experiences")) {
          resolve(mockExperiences);
        } else if (query.includes("testimonials")) {
          resolve(mockTestimonials);
        } else if (query.includes("brands")) {
          resolve(mockBrands);
        } else {
          resolve([]);
        }
      }, 100);
    }),
  create: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ _id: `mock-id-${Date.now()}` });
      }, 500);
    }),
};

export { client };

export const urlFor = (source) => source;
