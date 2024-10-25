const nextConfig = {
    output: 'export',
    basePath: '/MichaelWeb',
    assetPrefix: '/MichaelWeb',
    images: {
        unoptimized: true,
        loader: 'custom',
        loaderFile: './image-loader.js',
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    trailingSlash: true,
}

export default nextConfig