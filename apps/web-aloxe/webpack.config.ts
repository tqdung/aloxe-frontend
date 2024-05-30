/* eslint-disable @typescript-eslint/no-var-requires */
import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import dotenv from 'dotenv';
import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
};

function getProcessEnv() {
  return {
    'process.env': JSON.stringify(dotenv.config().parsed),
  };
}

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  // (config: any) => {
  //   config.devServer.client = {
  //     ...config.devServer.client,
  //     overlay: false
  //   }
  //   console.log(config);
  //   return config;
  // },
);
