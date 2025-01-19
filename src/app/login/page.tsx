'use client';

import React, { useState, useEffect } from 'react';
import 'react-toggle-switch/dist/css/switch.min.css';
import Switcher from '../components/Switcher';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importar íconos de FontAwesome
import { loginUser } from '../apis/AuthApi'; // Asumimos que loginUser es una función de autenticación
import { useRouter } from 'next/navigation'; // Importa el hook useRouter
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState<boolean | null>(null); // Inicializa con null para evitar diferencias durante la hidratación
  const router = useRouter(); // Inicializa el hook useRouter

  useEffect(() => {
    setShowPassword(false);
  }, []);

  const handleToggle = () => setRememberMe(!rememberMe);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
  
    try {
      const response = await loginUser(email, password);
      
      // Si la API devuelve éxito
      if (response.status === 200 && response.data.éxito) {
        setSuccessMessage('Login successful!');
        
        // Redirige a la página Home en caso de login exitoso
        router.push('/home');
      } else {
        // Si el login falla, muestra el mensaje de error
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch  {
      // Manejo de errores de la API
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center bg-gray-100 h-full">
      <div className="flex flex-col lg:flex-row w-full h-full  shadow-lg rounded-lg overflow-hidden">
        {/* Imagen para pantallas grandes */}
        <div className="hidden lg:block h-full">
        <Image
          src="/assets/images/imageLogin.jpg"
          alt="Lighthouse"
          fill
          className="object-cover"
          sizes="100vw" // Para pantallas responsivas, opcional
          priority // Si esta imagen es clave para el LCP
        />
        </div>

        {/* Formulario */}
        <div className="w-full px-4 py-8 bg-white max-w-[456px] pt-12">
          <div className="w-full max-w-[360px] mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-[10px] justify-left mb-12">
            <Image
              src="/assets/images/imageLogin.jpg"
              alt="Lighthouse"
              fill
              className="object-cover"
              sizes="100vw" // Opcional: optimiza la carga para pantallas responsivas
              priority // Si es importante para el LCP
            />
            </div>

            {/* Título */}
            <h2 className="text-[20px] font-SfProDisplay font-regular text-[#1a1a1a] mb-6 text-center lg:text-left">
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
                  {/* Icono de ojo */}
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

              {/* Botón Sign In */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold rounded-lg px-4 py-2 ${loading ? 'bg-gray-400' : 'bg-[#007aff] text-white hover:bg-blue-600'} focus:ring-2 focus:ring-blue-500`}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>

              {/* Mensajes de error o éxito */}
              {errorMessage && <p className="mt-4 text-red-500 text-center">{errorMessage}</p>}
              {successMessage && <p className="mt-4 text-green-500 text-center">{successMessage}</p>}

              {/* Divider */}
              <div className="w-full border-t border-[#e5e5e5] mt-8"></div>

              {/* Google Sign In */}
              <div className="text-center mt-8">
                <button className="w-full bg-[#333333] text-[#ffffff] rounded-lg py-2.5 hover:bg-black-200 flex items-center justify-center gap-2">
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
                {/* Parte izquierda del logo */}
                <div className="flex items-center gap-[5px]">
                  <img
                    src="/assets/images/logo-unicorn2.png" // Reemplaza con la URL de la primera parte del logo
                    alt="Logo Part 1"
                    className="h-6 object-contain"
                  />
                  <span className="font-regular text-[12px] text-[#007aff]">@unicorn</span>
                </div>

                {/* Separación máxima */}
                <div className="flex-grow"></div>

                {/* Parte derecha del logo */}
                <div className="font-roboto font-regular text-[12px] text-[#666666]">© perfect login 2025</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
