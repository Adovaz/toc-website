import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/discord': 'https://discord.gg/wHNrGSpfwd'
  },

  adapter: cloudflare()
});