/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '*', // Match any host
            pathname: '**',
        },
    ],
    },
};
module.exports = nextConfig;