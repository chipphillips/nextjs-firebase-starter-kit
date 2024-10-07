import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'your-image-domain.com'
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
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
      };
    }
    if (config.optimization) {
      config.optimization.splitChunks = {
        ...(config.optimization.splitChunks || {}),
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
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
