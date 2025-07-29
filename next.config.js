 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [], // Add domains if you use external images
  },

  async redirects() {
    return [
      {
        source: '/dubai-mainland',
        destination: '/mainland/dubai',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/video/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/video/1.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)', // Applies to all routes and static files
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },

  generateEtags: false, // Optional: disables ETag generation
};

module.exports = nextConfig;
