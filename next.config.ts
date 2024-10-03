import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import { Configuration as WebpackConfiguration } from "webpack";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config: WebpackConfiguration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      // Prevent Webpack from trying to bundle these Node.js modules on the client-side
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...(config.resolve?.fallback || {}),
          stream: false,
          crypto: false,
          fs: false,
          os: false,
          path: false,
        },
      };
      if (config.optimization) {
        config.optimization.splitChunks = {
          ...(config.optimization.splitChunks as object),
          maxInitialRequests: 25,
          minSize: 20000,
        };
      }
      config.plugins?.push(new NodePolyfillPlugin());
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/@admin/:path*',
        destination: '/admin/:path*',
      },
    ];
  },
};

export default nextConfig;