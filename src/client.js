import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import {
  mockAbouts,
  mockWorks,
  mockSkills,
  mockExperiences,
  mockTestimonials,
  mockBrands,
} from "./mockData";

const viteEnv = typeof import.meta !== "undefined" ? import.meta.env || {} : {};
const nodeEnv = typeof process !== "undefined" ? process.env || {} : {};

const getEnv = (viteKey, legacyKey) => viteEnv[viteKey] ?? nodeEnv[legacyKey];

// Use mock data mode when Sanity credentials are not available
// Or explicitly forced via VITE_USE_MOCK_DATA / REACT_APP_USE_MOCK_DATA=true
const FORCE_MOCK_DATA =
  getEnv("VITE_USE_MOCK_DATA", "REACT_APP_USE_MOCK_DATA") === "true";
const SANITY_PROJECT_ID = getEnv(
  "VITE_SANITY_PROJECT_ID",
  "REACT_APP_SANITY_PROJECT_ID",
);
const SANITY_TOKEN = getEnv("VITE_SANITY_TOKEN", "REACT_APP_SANITY_TOKEN");
const USE_MOCK_DATA = FORCE_MOCK_DATA || !SANITY_PROJECT_ID;

const mockClient = {
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

const sanityConfiguredClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: SANITY_TOKEN,
});

export const client = USE_MOCK_DATA ? mockClient : sanityConfiguredClient;

const builder = USE_MOCK_DATA ? null : imageUrlBuilder(client);

export const urlFor = (source) => {
  // If using mock data, return the source directly (it's already a URL)
  if (USE_MOCK_DATA) {
    return source;
  }
  return builder.image(source);
};
