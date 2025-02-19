import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface CardVariationsProps {
  image: string; 
  title: string; 
}

export default function CardVariations({
  image,
  title,
}: CardVariationsProps) {
  return (
    <div className=" shadow-md">
      <div className="relative w-full h-full">
        <div className=" relative w-[150px] h-[300px] phone:w-[271px] phone:h-[412px]">
          <Image 
            src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            priority 
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white flex items-center justify-between">
          <h3 className="text-sm phone:text-lg font-bold flex items-center">
            {title}
            <FaArrowRight className="text-white ml-8" />
          </h3>
        </div>
      </div>
    </div>
  );
}
