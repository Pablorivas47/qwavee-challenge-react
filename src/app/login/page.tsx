'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


  const images = [
    '/assets/images/carrusel/carrusel1.jpg',
    '/assets/images/carrusel/carrusel2.jpg',
    '/assets/images/carrusel/carrusel3.jpg',
    '/assets/images/carrusel/carrusel4.jpg',
    '/assets/images/carrusel/carrusel5.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-white"> 
      <div className="flex flex-col lg:flex-row w-full h-full shadow-lg rounded-lg overflow-hidden">

        {/* Carrusel */}
        <section className='relative hidden lg:block lg:w-[65%]'>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={images[currentImageIndex]}
              alt="Login background"
              fill
              sizes="(max-width: 1366px) 70vw, 956px"
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        {/* Formulario */}
        <section className="w-full lg:w-[35%] flex justify-center items-start">
          <LoginForm/>
        </section>
      </div>
    </main>
  );
}