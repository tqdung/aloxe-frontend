import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run web-aloxe:serve',
        production: 'nx run web-aloxe:preview',
      },
      ciWebServerCommand: 'nx run web-aloxe:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
