/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // habilitando isso irá habilitar SSR para Tailwind
  },
}

module.exports = nextConfig
