import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run web-driver:serve',
        production: 'nx run web-driver:preview',
      },
      ciWebServerCommand: 'nx run web-driver:serve-static',
    }),
    baseUrl: 'http://localhost:4203',
  },
});
