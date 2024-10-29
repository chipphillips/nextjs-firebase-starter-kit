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
      };
    }

    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    return config;
  },
  experimental: {},
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'your-image-domain.com'
    ],
  },
};

module.exports = nextConfig;
