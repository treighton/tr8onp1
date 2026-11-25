import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default {
  reactStrictMode: true,
  // Keep the cache handler out of transpilePackages: it breaks the handler's edge-runtime entry.
  cacheHandler: require.resolve("./cacheHandler.mjs"),
  cacheMaxMemorySize: 0,
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  transpilePackages: [
    "@pantheon-systems/css-client",
    "@pantheon-systems/puck-css",
    "@pantheon-systems/p1-next-sdk",
  ],
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      yjs: require.resolve("yjs"),
    };
    return config;
  },
};
