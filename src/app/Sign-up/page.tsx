"use client";

import { type MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { EyeIcon, EyeOff, MailIcon, UserIcon } from 'lucide-react';
import Image from 'next/image';

const SignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must contain at least 8 character(s).").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  name: z.string().min(1, "Name is required"),
});

const Register = () => {
  const [information, setInformation] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleRegister = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setError('');

    if (information.password !== information.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      SignUpSchema.parse({
        email: information.email,
        password: information.password,
        name: information.name
      });

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: information.email,
          password: information.password,
          name: information.name
        })
      });
      const data = await response.json() as { message?: string };
      if (!response.ok) throw new Error(data.message ?? 'Registration failed');

      await signIn('credentials', {
        email: information.email,
        password: information.password,
        callbackUrl: '/board'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0]!.message);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className='overflow-hidden'>
      <div className="flex flex-col w-screen min-h-screen h-full bg-[url('/background.png'),linear-gradient(to_right_bottom,#2563eb,#4338ca)]">
        <div className='flex-1 z-10 flex justify-center items-center backdrop-blur-sm'>
          <motion.div
            key="register"
            {...fadeInOut}
            className='flex flex-col justify-start flex-1'
          >
            <form className='bg-white text-gray-800 h-full relative rounded-lg overflow-hidden shadow-lg p-8 w-full max-w-md mx-auto'>
              <div className="flex-shrink-0 py-3 px-4 gap-2 rounded-lg mb-6 flex justify-center">
                <Image src="/logo.svg" alt="Logo" width={24} height={26} />
                <h2 className="text-black text-3xl font-semibold">Story Board</h2>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 mb-4 text-center text-sm font-medium"
                >
                  {error}
                </motion.p>
              )}
              <div className='relative'>
                <input
                  type="text"
                  required
                  value={information.name}
                  onChange={(e) => setInformation({ ...information, name: e.target.value })}
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <UserIcon className="absolute right-4 top-4 text-gray-400" />
              </div>
              <div className='relative'>
                <input
                  type="email"
                  required
                  value={information.email}
                  onChange={(e) => setInformation({ ...information, email: e.target.value })}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <MailIcon className="absolute right-4 top-4 text-gray-400" />
              </div>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={information.password}
                  onChange={(e) => setInformation({ ...information, password: e.target.value })}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type='button' onClick={() => { setShowPassword(prev => !prev) }}>
                  {
                    showPassword ?
                      <EyeOff className="absolute right-4 top-4 text-gray-400" />
                      :
                      <EyeIcon className="absolute right-4 top-4 text-gray-400" />
                  }
                </button>
              </div>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={information.confirmPassword}
                  onChange={(e) => setInformation({ ...information, confirmPassword: e.target.value })}
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type='button' onClick={() => { setShowPassword(prev => !prev) }}>
                  {
                    showPassword ?
                      <EyeOff className="absolute right-4 top-4 text-gray-400" />
                      :
                      <EyeIcon className="absolute right-4 top-4 text-gray-400" />
                  }
                </button>
              </div>
              <button
                onClick={handleRegister}
                type='submit'
                className="bg-blue-600 text-white rounded-lg p-3 w-full mb-4 hover:bg-blue-700 transition duration-300"
              >
                Register
              </button>
              <p className="text-gray-600 text-sm text-center">
                Already have an account? <a href="/sign-in" className="text-blue-500 hover:underline">Sign in</a>
              </p>
              <div className="relative flex items-center justify-center m-6">
                <hr className="w-full border-t border-gray-300" />
                <span className="absolute px-4 text-sm text-gray-500 bg-white">
                  Or sign in with
                </span>
              </div>
              <button
                type='button'
                onClick={() => signIn('discord', { callbackUrl: '/board' })}
                className="bg-white gap-2 text-gray-700 border border-gray-300 rounded-lg p-3 w-full flex items-center justify-center hover:bg-gray-50 transition duration-300"
              >
                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" /></svg>
                Sign up with Discord
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;