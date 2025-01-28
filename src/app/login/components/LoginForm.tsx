import { useActionState, useState } from 'react';
import Image from 'next/image';
import { useFormStatus } from 'react-dom';
import { login } from '@/app/api/auth/login/login';
import Switcher from '@/app/components/Switcher';
import PasswordInput from './PasswordInput';


export default function LoginForm() {
  const { pending } = useFormStatus();
  const [state, loginAction] = useActionState(login, undefined);
  const [rememberMe, setRememberMe] = useState(false);
  const handleToggle = () => setRememberMe(!rememberMe);

  return (
    <div className="min-h-screen flex flex-col md:w-[90%] w-[100%] px-5">
      <div className="flex-grow flex flex-col w-full max-w-md mx-auto space-y-6">
        {/* Logo */}
        <section className="flex flex-col items-center md:items-start md:block my-9">
            <div className="w-full">
                <Image
                src="/assets/images/ui-unicorn-logo.png"
                alt="Logo"
                width={148}
                height={148}
                className="absolute sm:relative left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 translate-y-[95vh] sm:translate-y-0"
                />
            </div>
        </section>

        {/* Título */}
        <h2 className="text-[20px] text-left font-semibold typography--poppins text-[#1a1a1a] ">
          Nice to see you again
        </h2>

        <form  action={loginAction}>
          {/* Input de Email */}
            <section className="space-y-4">
                <section className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-[11px] text-[#333333] font-sfprodisplay ml-4 hidden md:block ">
                    Login
                    </label>
                    <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full font-normal text-[15px] text-black bg-[#f2f2f2] rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
                    />
                </section>

            {/* Input de Password */}
                <section className=" space-y-2">
                    <label htmlFor="password" className="text-[11px] text-[#333333] font-sfprodisplay ml-4 hidden md:block">
                    Password
                    </label>
                    <PasswordInput
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        required
                        aria-label="Password"
                    />
                </section>
            </section>

            {/* Switcher */}
            <section className="flex justify-between items-center mt-5 ">
                <div className="flex items-center gap-4">
                    <Switcher on={rememberMe} onClick={handleToggle} className="" /> 
                    <label
                        htmlFor="remember"
                        className="text-[12px] text-[#1A1A1A] font-sfprodisplay"
                        aria-label="Remember me">Remember me
                    </label>
                </div>
                
                <a href="#" className="text-[12px] font-sfprodisplay-display text-[#007AFF] hover:underline">
                  Forgot password?
                </a>
            </section>

            {/* Botón Sign In */}
            <section className="mt-[32px]">
                <button
                    type="submit"
                    disabled={pending}
                    className="w-full text-[15px] font-bold font-roboto text-white rounded-lg px-4 py-2 transition-all duration-300 bg-[#007aff]  hover:bg-blue-600 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-blue-500"
                >
                    Sign in
                </button>
            </section>

            {/* Divider */}
            <div className="w-full border-t border-[#e5e5e5] mt-8"></div>

            {/* Google Sign In */}
            <section className="text-center mt-8">
                <button className="w-full text-[12px] font-sfprodisplay text-[#ffffff] bg-[#333333]  rounded-lg py-2.5 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
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
            </section>

            {/* Footer */}
            <section className="flex items-center justify-between mt-[220px] mb-12">
                    <div className='flex flex-row text-[#007AFF] font-roboto text-[12px] font-normal gap-2'>
                        <Image
                            src="/assets/images/logo-unicorn2.png"
                            alt="Logo Part 1"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        @unicorn
                    </div>
                <div className="flex-grow"></div>
                <div className="font-roboto font-regular text-[12px] text-[#666666]">© perfect login 2025</div>
            </section>
        </form>
      </div>
    </div>
  );
}
