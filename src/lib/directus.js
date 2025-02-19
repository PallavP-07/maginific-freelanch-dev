
import { readItems,createDirectus, readItem, rest } from "@directus/sdk";
const directus = createDirectus(
  `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}`
).with(rest());
//  export default directus;
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
