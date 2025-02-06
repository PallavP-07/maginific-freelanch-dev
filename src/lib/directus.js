import { createDirectus, rest } from '@directus/sdk';
import { readItems } from "@directus/sdk";
const directus = createDirectus(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}`).with(
    rest({
      onRequest: (options) => ({ ...options, cache: 'no-store' }),
    })
  );
  //  export default directus;
  export const fetchCollectionData = async (collection, queryParams = {}) => {
    try {
      const response = await directus.request(
       readItems(collection,queryParams)
      );
      return {
        response
      }
    } catch (error) {
      console.error(`Error fetching ${collection}:`, error);
      return { response: null };
    }
  };