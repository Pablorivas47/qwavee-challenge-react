import React from 'react';
import Image from 'next/image';

interface NatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const NatureCard: React.FC<NatureCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={{ textAlign: 'left', width: '308px' }}>
      <div style={{ width: '308px', height: '263px', overflow: 'hidden' }}>
      <Image
          src={imageUrl} // Ruta de la imagen
          alt={title} // Texto alternativo
          layout="fill" // Ocupa todo el contenedor
          objectFit="cover" // Se asegura de que la imagen cubra el área sin distorsión
          priority // Carga prioritaria si es una imagen clave
        />
      </div>
      <h3 style={{ fontSize: '35px', fontWeight: 'bold', marginTop: '15px' }}>{title}</h3>
      <p
        style={{
          fontSize: '23px',
          fontWeight: 'bold',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default NatureCard;


