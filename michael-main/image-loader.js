export default function myImageLoader({ src, width, quality }) {
    const isDev = process.env.NODE_ENV !== 'production'
    const prefix = isDev ? '' : '/MichaelWeb'
    return `${prefix}${src}?w=${width}&q=${quality || 75}`
}