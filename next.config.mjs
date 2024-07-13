/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.timbu.cloud',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
