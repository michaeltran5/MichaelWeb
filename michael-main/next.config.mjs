/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: '/michael-main',
    assetPrefix: '/michael-main',
    trailingSlash: true,
    distDir: 'dist',   // Optional: specifies build output directory
    reactStrictMode: true,  // Good practice to keep this enabled
};

export default nextConfig;
