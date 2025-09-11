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
      // Allow proper caching for sitemap and robots.txt
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      // No cache for videos
      {
        source: '/video/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      // No cache for HTML pages only (not static files)
      {
        source: '/((?!sitemap\\.xml|robots\\.txt|images/|video/|logo\\.png).*)',
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

  generateEtags: false,
};

module.exports = nextConfig;
