import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        'https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png',
      ),
      new URL(
        'https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png',
      ),
      new URL(
        'https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png',
      ),
    ],
  },
}

export default nextConfig
