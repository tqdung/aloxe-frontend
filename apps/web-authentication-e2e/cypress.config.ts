import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run web-authentication:serve',
        production: 'nx run web-authentication:preview',
      },
      ciWebServerCommand: 'nx run web-authentication:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
