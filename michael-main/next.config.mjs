const nextConfig = {
    output: 'export',
    basePath: '/MichaelWeb',
    assetPrefix: '/MichaelWeb/',
    images: {
        unoptimized: true,
        remotePatterns: [],
        loader: 'custom',
        loaderFile: './image-loader.js'
    },
    trailingSlash: true,
}

export default nextConfig