import axios from 'axios';

// Create an Axios instance
const directus = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DIRECTUS_API_URL, // Base URL from .env
  timeout: 5000, // Set a timeout for API requests
});

// Generic GET function
export const getData = async (endpoint) => {
  try {
    const response = await directus.get(`/items/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error; // Propagate error to handle in the calling component
  }
};

// Add more API functions as needed
export default directus;
