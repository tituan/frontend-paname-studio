/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const ContentSecurityPolicy = isDev
  ? `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
    img-src 'self' data: https://www.googletagmanager.com https://cdn.jsdelivr.net;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self';
    frame-src https://www.googletagmanager.com;
  `
  : `
    default-src 'self';
    script-src 'self' https://www.googletagmanager.com https://cdn.jsdelivr.net;
    style-src 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net;
    img-src 'self' data: https://www.googletagmanager.com https://cdn.jsdelivr.net;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self';
    frame-src https://www.googletagmanager.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
  `;

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
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

