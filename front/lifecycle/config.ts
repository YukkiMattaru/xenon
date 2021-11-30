// @DOC: This file contains env and config types. Values come from next.config.js, where they can be received from env variables.
import getRuntimeConfig from 'next/config';

const nextRuntimeConfig = getRuntimeConfig();

// @DOC: Build time env
declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv {
      BUILT_AT?: string;
      GIT_COMMIT?: string;
      GIT_BRANCH?: string;
      DEVELOPMENT_IN_PRODUCTION?: 'true' | 'false';
    }
  }
}

// eslint-disable-next-line no-undef
export const env: NodeJS.ProcessEnv = {
  NODE_ENV: process.env.NODE_ENV,
  BUILT_AT: process.env.BUILT_AT,
  GIT_COMMIT: process.env.GIT_COMMIT,
  GIT_BRANCH: process.env.GIT_BRANCH,
  DEVELOPMENT_IN_PRODUCTION: process.env.DEVELOPMENT_IN_PRODUCTION,
};

// @DOC: Run time config
export interface Config {
  APP_BASE_URL?: string;
  API_BASE_URL?: string;
}

export const config: Config = {
  ...nextRuntimeConfig.publicRuntimeConfig,
  ...nextRuntimeConfig.serverRuntimeConfig,
};
