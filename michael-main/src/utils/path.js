// src/utils/path.js
export function getAssetPath(path) {
    if (!path) return '';
    const basePath = process.env.NODE_ENV === 'production' ? '/MichaelWeb' : '';
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
}