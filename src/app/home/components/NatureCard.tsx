import React from 'react';
import Image from 'next/image';

interface NatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const NatureCard: React.FC<NatureCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="text-left w-[308px]">
      <div className="relative w-[308px] h-[263px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <h3 className="text-[35px] font-bold mt-4">{title}</h3>
      <p className="text-[23px] font-bold overflow-hidden text-ellipsis whitespace-nowrap">
        {description}
      </p>
    </div>
  );
};

export default NatureCard;