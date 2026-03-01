import {
  mockAbouts,
  mockWorks,
  mockSkills,
  mockExperiences,
  mockTestimonials,
  mockBrands,
} from "./mockData";

// In-memory data client: no backend required. Matches the shape of Sanity client (fetch/create) for drop-in use.
const client = {
  // Returns mock array based on query string (e.g. *[_type == "abouts"]). Used by About, Work, Skills, Testimonial.
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
  // Mock contact form submit: returns a fake _id. Used by Footer contact form.
  create: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ _id: `mock-id-${Date.now()}` });
      }, 500);
    }),
};

export { client };

// Image helper: in mock mode we pass URLs directly; urlFor is a no-op. Kept for API compatibility.
export const urlFor = (source) => source;
