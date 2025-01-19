import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['run.mocky.io', 'images.unsplash.com'], // Permite cargar imágenes desde este dominio
  },
};

export default nextConfig;
