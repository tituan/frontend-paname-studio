/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
  img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://cdn.jsdelivr.net;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com https://www.googletagmanager.com;
  frame-src https://www.googletagmanager.com;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'www.googletagmanager.com',
      'fonts.gstatic.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
        ],
      },
    ];
  },

  // On ajoute le proxy ici
  async rewrites() {
    return [
      {
        source: '/spotify/:path*',
        destination: 'http://localhost:3001/spotify/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
