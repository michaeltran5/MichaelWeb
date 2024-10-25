const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/<repository-name>' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/<repository-name>/' : '',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig