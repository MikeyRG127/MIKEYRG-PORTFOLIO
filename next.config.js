
/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
        formats: ["image/webp", "image/avif"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                port: '',
                pathname: '/l9s2o85o5b/profile.png?updatedAt=1717636016869',
            },
        ],
    },
}

module.exports = nextConfig
