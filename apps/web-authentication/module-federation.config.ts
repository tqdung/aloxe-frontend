import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'web-authentication',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
