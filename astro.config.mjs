import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical host. Until DNS for dhirennarola.com is active, GitHub Pages
// serves the same build at dhirennarola.github.io/portfolio and 301s over
// once the custom domain is configured (see DOMAIN-SETUP.md).
export default defineConfig({
  site: 'https://dhirennarola.com',
  // Dev-only: expose on LAN + allow ngrok tunnels for mobile-device testing
  server: { host: true },
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.app', '.ngrok.io'],
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thanks') && !page.includes('/privacy'),
    }),
  ],
  // Old GitHub-Pages-era URLs → new structure (emitted as static redirect pages)
  redirects: {
    // V2 service slug renames
    '/services/ai-automation': '/services/ai-odoo',
    '/services/integrations-compliance': '/services/integrations-einvoicing',
    '/erp-rescue.html': '/services/erp-rescue',
    '/meeting.html': '/contact',
    '/all-projects.html': '/work',
    '/project.html': '/work',
    '/case-study-automotive-ksa.html': '/work/ksa-automotive-erp',
    '/case-study-pharma-manufacturing.html': '/work/pharma-manufacturing-erp',
    '/case-study-facility-elevator.html': '/work/elevator-maintenance-automation',
    '/case-study-it-billing.html': '/work/it-services-billing',
    '/odoo-for-automotive-ksa.html': '/industries/automotive-ksa',
    '/odoo-for-manufacturing.html': '/industries/manufacturing',
    '/odoo-for-facility-management.html': '/industries/facility-management',
  },
});
