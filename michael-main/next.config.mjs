const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/MichaelWeb' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/MichaelWeb/' : '',
    images: {
        unoptimized: true,
    },
}

export default nextConfig;  // Not