import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'web-aloxe',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['web-authentication', 'web-customer', 'web-driver'],
  additionalShared: [
    {
      libraryName: '@emotion',
      sharedConfig: {
        eager: true,
        singleton: true,
        requiredVersion: false,
      },
    },
    {
      libraryName: '@chakra-ui',
      sharedConfig: {
        eager: true,
        singleton: true,
        requiredVersion: false,
      },
    },
    {
      libraryName: 'react-router-dom',
      sharedConfig: {
        singleton: true,
        requiredVersion: false,
      },
    },
    {
      libraryName: 'react-query',
      sharedConfig: {
        singleton: true,
        requiredVersion: false,
      },
    },
  ],
};

export default config;
