/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        dirs: ["pages", "utils", "components", "api", "styles", "theme"],
    },
};

module.exports = nextConfig;
