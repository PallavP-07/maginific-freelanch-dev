import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://magnific-directus-2p92s.ondigitalocean.app/').with(
    rest({
      onRequest: (options) => ({ ...options, cache: 'no-store' }),
    })
  );
export default directus;