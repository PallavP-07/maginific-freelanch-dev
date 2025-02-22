
import { readItems,createDirectus, readItem, rest } from "@directus/sdk";

const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_DIRECTUS_API_URL is not defined in environment variables.");
}

 const directus = createDirectus(API_URL).with(rest());


export const fetchCollectionData = async (collection, queryParams = {}) => {
  try {
    const response = await directus.request(readItems(collection, queryParams));
    return {
      response,
    };
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    return { response: null };
  }
};


export const fetchCollectionDataWithID = async (collection, id, queryParams = {}) => {
  try {
    const response = await directus.request(readItem(collection, id, queryParams)); 
    return { response };
  } catch (error) {
    console.error(`Error fetching ${collection} with ID ${id}:`, error);
    return { response: null };
  }
};


export const fetchCollectionDataBySlug = async (collection, slug, queryParams = {}) => {
  try {
    const response = await directus.request(
      readItems(collection, {
        filter: { slug: { _eq: slug } }, 
        limit: 1, 
        ...queryParams,
      })
    );

    return {response}// Return the first matching item or null
  } catch (error) {
    console.error(`Error fetching ${collection} with slug ${slug}:`, error);
    return null;
  }
};