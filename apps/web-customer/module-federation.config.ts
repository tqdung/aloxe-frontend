import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'web-customer',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
