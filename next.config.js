const nextConfig = {
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/plant-type',
        destination: '/shop',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

