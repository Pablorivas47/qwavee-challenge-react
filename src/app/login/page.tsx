'use client';

import React, { useState } from 'react';
import 'react-toggle-switch/dist/css/switch.min.css';
import Switcher from '../components/Switcher';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Image from 'next/image';
import { usePasswordToggle } from './hooks/UsePasswordToggle';
import { useAuth } from './hooks/UseAuth';
import { useCarousel } from './hooks/UseCarousel';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { showPassword, togglePasswordVisibility } = usePasswordToggle();
  const { handleLogin, loading, errorMessage } = useAuth();

  const images = [
    '/assets/images/carrusel/carrusel1.jpg',
    '/assets/images/carrusel/carrusel2.jpg',
    '/assets/images/carrusel/carrusel3.jpg',
    '/assets/images/carrusel/carrusel4.jpg',
    '/assets/images/carrusel/carrusel5.jpg',
  ];
  
  const currentIndex = useCarousel(images);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  const handleToggle = () => setRememberMe(!rememberMe);
  
  return (
    <main className="flex items-center justify-center bg-gray-100 h-full">
      <div className="flex flex-col lg:flex-row w-full h-full  shadow-lg rounded-lg overflow-hidden ">
        <div className="relative w-[910px] h-[901px] overflow-hidden hidden xl:block ">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 transition-opacity duration-1000 ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`Carrusel image ${index + 1}`}
                width={910}
                height={901}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Formulario  */}
        <div className="mx-auto w-full px-4 py-8 bg-white max-w-[456px] pt-12 ">
          <div className="w-full max-w-[360px] mx-auto">
            {/* Logo */}
            <div className="justify-left sm:transform-none sm:static mb-12 absolute top-[80%] left-1/2 transform -translate-x-1/2 ">
              <Image
                src="/assets/images/ui-unicorn-logo.png"
                alt="Logo"
                width={148}
                height={148}
              />
            </div>


            {/* Título */}
            <h2 className="text-[20px] font-SfProDisplay font-regular text-[#1a1a1a] mb-6 text-left">
              Nice to see you again
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Input de Email */}
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email" className="text-[11px] text-gray-600 ml-2">
                  Login
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full font-normal text-[15px] text-black border-[#f2f2f2] bg-[#f2f2f2] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Input de Password */}
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="password" className="text-[11px] font-medium text-gray-600 ml-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full font-normal text-[15px] text-black border-[#f2f2f2] bg-[#f2f2f2] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Ajusta el padding para el icono
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Switcher */}
              <div className="flex items-center justify-between mb-6">
                <label className="inline-flex items-center">
                  <Switcher on={rememberMe} onClick={handleToggle} className="" />
                  <span className="text-[12px] text-gray-600 ml-2">Remember me</span>
                </label>
                <a href="#" className="text-[12px] text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Boton Sign In */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold rounded-lg px-4 py-2 transition-all duration-300 ${
                  loading
                    ? 'bg-gray-400'
                    : 'bg-[#007aff] text-white hover:bg-blue-600 hover:scale-105 hover:shadow-lg'
                } focus:ring-2 focus:ring-blue-500`}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>

              {/* Mensajes de error o éxito */}
              {errorMessage && <p className="mt-4 text-red-500 text-center">{errorMessage}</p>}

              {/* Divider */}
              <div className="w-full border-t border-[#e5e5e5] mt-8"></div>

              {/* Google Sign In */}
              <div className="text-center mt-8">
                <button className="w-full bg-[#333333] text-[#ffffff] rounded-lg py-2.5 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Image
                  src="/assets/icons/google.svg"
                  alt="Google Icon"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                  Or sign in with Google
                </button>
                <p className="font-sfprodisplay font-normal text-[12px] text-[#1a1a1a] mt-6">
                  Don’t have an account?{' '}
                  <a href="#" className="font-sfprodisplay font-normal text-[12px] text-[#007aff] hover:underline">
                    Sign up now
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-between mt-[220px]">
                <div className="flex items-center gap-[5px]">
                <Image
                  src="/assets/images/logo-unicorn2.png"
                  alt="Logo Part 1"
                  width={24}
                  height={24} 
                  className="object-contain"
                />
                  <span className="font-regular text-[12px] text-[#007aff]">@unicorn</span>
                </div>
                <div className="flex-grow"></div>
                <div className="font-roboto font-regular text-[12px] text-[#666666]">© perfect login 2025</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
