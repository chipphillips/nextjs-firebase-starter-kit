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
          fs: false,
          net: false,
          tls: false,
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
          url: require.resolve('url/'),
          zlib: require.resolve('browserify-zlib'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          assert: require.resolve('assert/'),
          os: require.resolve('os-browserify/browser'),
          path: require.resolve('path-browserify'),
        },
      };
      if (config.optimization) {
        config.optimization.splitChunks = {
          ...(config.optimization.splitChunks as object),
          maxInitialRequests: 25,
          minSize: 20000,
        };
      }
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