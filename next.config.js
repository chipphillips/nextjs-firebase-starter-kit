/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        stream: require.resolve('stream-browserify'),
        http2: false,
        perf_hooks: false,
        async_hooks: false,
        crypto: require.resolve('crypto-browserify'),
        http: false,
        https: false,
        os: false,
        path: false,
        zlib: false,
        events: require.resolve('events/'),
      };
    }

    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'your-image-domain.com',
      },
    ],
  },
};

module.exports = nextConfig;
