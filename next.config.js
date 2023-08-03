const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
            {
                protocol: "https",
                hostname: "1drv.ms",
                pathname: "/i/**"
            }
        ]
    }
}

module.exports = nextConfig
