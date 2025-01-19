import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-center py-8">
      {/* Imagen al inicio */}
      <div className="mb-20">
      <Image
          src="/assets/images/ui-unicorn-logo.png" // Reemplaza con la ruta de tu imagen
          alt="Footer Logo"
          width={150} // Ajusta el ancho
          height={89} // Ajusta la altura
          className="mx-auto"
        />
      </div>

      {/* Iconos de redes sociales */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="#"
          className="text-[#072a52] hover:text-blue-800 text-2xl"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-[#072a52] hover:text-blue-800 text-2xl"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-[#072a52] hover:text-blue-800 text-2xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-[#072a52] hover:text-blue-800 text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Párrafo en color azul */}
      <p className="text-[#072a52] text-sm mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </p>
    </footer>
  );
}
