'use client';


import PasswordInput from '@/components/PasswordInput';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { setCookie } from '@/utils/cookie';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function LoginPage() {
  const pathname = usePathname();
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const login = await axios.post("http://localhost:9000/api/user/login", { email, password })
      console.log(login.data);
      await setCookie("token", login.data.data.token)
      await setCookie("user", `${login.data.data.firtsName} ${login.data.data.lastName}`)
      router.push('/')
    } catch (error) {
      if (error instanceof Error)
        console.log(error.message);
    }
  }

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-36'>
      <div className='space-y-4 py-8'>
        <div className='hidden lg:flex items-center w-full justify-between'>
          <button
            onClick={() => router.back()}
            className='flex text-gray-900 text-xl justify-center items-center bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg p-2.5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            กลับ
          </button>
          <div className='flex items-center gap-4'>
            <div className="text-xl">
              ยังไม่มีบัญชีใช่หรือไม่
            </div>
            <Link href="/register" className="flex gap-2 justify-center items-center bg-white px-3 py-2.5 text-xl leading-7 text-[#ff3a57] border border-[#ff3a57] hover:bg-[#ff3a57] hover:text-white rounded-full">
              สร้างบัญชี
            </Link>
          </div>
        </div>
        <div className='bg-white w-full shadow-md py-8 lg:py-12 px-8 rounded-md space-y-4'>
          <button
            onClick={() => router.back()}
            className='lg:hidden flex text-gray-900 py-2.5 text-xl justify-center items-center bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            กลับ
          </button>
          <div className="text-4xl font-medium">
            ยินดีต้อนรับสมาชิก Swensen's เข้าสู่ระบบแล้วเริ่มสั่งไอศกรีมกันเลย!
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 space-y-2">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 w-fit">
                อีเมล
                <samp className="text-xs text-red-700 ml-1">*</samp>
              </label>
              <input
                type="email"
                placeholder="อีเมล"
                id="email"
                value={email} // รับค่าจาก props
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
              />
            </div>
            <div className="mb-4 space-y-2">
              <label htmlFor="pwd" className="block text-lg font-medium text-gray-700 w-fit">
                รหัสผ่าน
                <samp className="text-xs text-red-700 ml-1">*</samp>
              </label>
              <PasswordInput
                id="pwd"
                value={password}
                onChange={setPassword}
                placeholder="รหัสผ่าน" />
            </div>

            <div className="text-lg text-[#2578e5] mb-4">
              <a href="#">ลืมรหัสผ่าน?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d1001f] text-xl text-white py-4 rounded-full hover:bg-red-700 disabled:bg-[#d0d5ddcc] disabled:text-[#98a2b3] disabled:cursor-not-allowed"
              disabled={!email || !password}
            >
              เข้าสู่ระบบ
            </button>
          </form>
          <div className="text-center text-lg mt-4">
            ยังไม่มีบัญชีใช่หรือไม่?{" "}
            <a href="#" className="text-[#2578e5] font-semibold">
              สร้างบัญชี
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fbanner%2Fregister-banner.jpg&w=1920&q=75"
          alt="img"
          className='size-full object-cover hidden h-full min-h-screen w-full shrink-0 md:col-span-5 lg:block'
        />
      </div>
    </div>
  );
}
