export default function imageLoader({ src, width, quality }) {
    const isDev = process.env.NODE_ENV === 'development'
    const baseUrl = isDev ? '' : '/MichaelWeb'
    return `${baseUrl}${src}`
}