/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              //   Protocol Here, eg: https, http, etc.
              protocol: 'https',
              // Host Name Here, eg: amazon.com
              hostname: 'fakestoreapi.com',
            },
          ],
    }
};

export default nextConfig;
