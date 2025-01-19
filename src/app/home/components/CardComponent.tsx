import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Usamos react-icons para el ícono de la flecha
import Image from 'next/image';

interface CardVariationsProps {
  image: string; // Ruta de la imagen
  title: string; // Título de la tarjeta
}

export default function CardVariations({
  image,
  title,
}: CardVariationsProps) {
  return (
    <div className=" shadow-md overflow-hidden w-[271px] h-[412px]">
      <div className="relative w-full h-full">
        {/* Imagen de la tarjeta */}
        <Image 
          src={image} 
          alt={title} 
          layout="fill" // Hace que la imagen ocupe todo el contenedor
          objectFit="cover" // Mantiene la proporción y llena el contenedor
          priority // Carga prioritaria para imágenes visibles inicialmente
        />
        
        {/* Título y flecha */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center">
            {title}
            <FaArrowRight className="text-white ml-8" />
          </h3>
        </div>
      </div>
    </div>
  );
}
