'use client';


import DatePickerForm from '@/components/DatePicker';
import PasswordInput from '@/components/PasswordInput';
import RegisterSuccessModel from '@/components/RegisterSuccessModel';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ResgisterPage() {
  const pathname = usePathname();
  const router = useRouter()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [dateBirth, setDateBirth] = useState<Date | null>(null);
  const [tel, setTel] = useState("");
  const [selectedGender, setSelectedGender] = useState("1");
  const [openModel, setOpenModel] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setDateBirth(date);
  };

  const onCloseMedel = () => {
    setOpenModel(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.log("firstName", firstName);
      console.log("lastName", lastName);
      console.log("email", email);
      console.log("password", password);
      console.log("dateBirth", dateBirth);
      console.log("tel", tel);
      console.log("selectedGender", selectedGender);


      const register = await axios.post("http://localhost:9000/api/user/register", { 
        firtsName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        dateBirth: dateBirth,
        tel: tel,
        genderId: Number(selectedGender)
      })
      console.log(register.data);
      setOpenModel(true)
      // await setCookie("token", login.data.data.token)
      // await setCookie("user", `${login.data.data.firtsName} ${login.data.data.lastName}`)
      // router.push('/')
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
            className='flex text-gray-900 text-xl justify-center items-center focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg p-2.5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            กลับ
          </button>
          <div className='flex items-center gap-4'>
            <div className="text-xl">
              มีบัญชีสมาชิกอยู่แล้วใช่หรือไม่
            </div>
            <Link href="/login" className="flex gap-2 justify-center items-center bg-white px-3 py-2.5 text-xl leading-7 text-[#ff3a57] border border-[#ff3a57] hover:bg-[#ff3a57] hover:text-white rounded-full">
              เข้าสู่ระบบ
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
            สมัครสมาชิกฟรี! รับสิทธิประโยชน์และส่วนลดมากมาย
          </div>

          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-x-3'>
              <div className="mb-4 space-y-2">
                <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 w-fit">
                  ชื่อ
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  id="firstName"
                  value={firstName} // รับค่าจาก props
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full  p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
              <div className="mb-4 space-y-2">
                <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 w-fit">
                  นามสกุล
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="นามสกุล "
                  id="lastName"
                  value={lastName} // รับค่าจาก props
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full  p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
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
              <div className="mb-4 space-y-2">
                <label htmlFor="birthDay" className="block text-lg font-medium text-gray-700 w-fit">
                  วันเกิด
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <DatePickerForm id="birthDay" value={dateBirth} placeholder="dd/mm/yyyy" onChange={handleDateChange} />
              </div>
              <div className="mb-4 space-y-2">
                <label htmlFor="tel" className="block text-lg font-medium text-gray-700 w-fit">
                  เบอร์โทรศัพท์
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                  id="tel"
                  value={tel} // รับค่าจาก props
                  onChange={(e) => setTel(e.target.value)}
                  className="w-full  p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
            </div>
            <div className="mb-4 space-y-2">
              <div className="block text-lg font-medium text-gray-700 w-fit">
                เพศ
                <samp className="text-xs text-red-700 ml-1">*</samp>
              </div>
              <div className="flex space-x-8">
                <label className="flex w-fit cursor-pointer items-center space-x-2">
                  <input
                    className="h-5 w-5 cursor-pointer accent-red-600 rounded-full border border-slate-300 checked:border-red-400 transition-all"
                    type="radio"
                    value="1"
                    name="gender"
                    checked={selectedGender === '1'}
                    onChange={handleChange}
                  />
                  <span className="text-label-medium text-text-primary">ชาย</span>
                </label>
                <label className="flex w-fit cursor-pointer items-center space-x-2">
                  <input
                    className="h-5 w-5 cursor-pointer accent-red-600 rounded-full border border-slate-300 checked:border-red-400 transition-all"
                    type="radio"
                    value="2"
                    name="gender"
                    checked={selectedGender === '2'}
                    onChange={handleChange}
                  />
                  <span className="text-label-medium text-text-primary">หญิง</span>
                </label>
                <label className="flex w-fit cursor-pointer items-center space-x-2">
                  <input
                    className="h-5 w-5 cursor-pointer accent-red-600 rounded-full border border-slate-300 checked:border-red-400 transition-all"
                    type="radio"
                    value="3"
                    name="gender"
                    checked={selectedGender === '3'}
                    onChange={handleChange}
                  />
                  <span className="text-label-medium text-text-primary">ไม่ระบุ</span>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4 border-t-2 pt-4">
              <input type="checkbox" className="h-5 w-5 cursor-pointer accent-red-600 border-gray-200 rounded-md disabled:opacity-50" id="pdc" />
              <label htmlFor='pdc' className="cursor-pointer">ฉันได้อ่านและยอมรับ
                <span className='text-[#2578e5] underline mx-2'>ข้อกำหนดการใช้งาน</span>และ<span className='text-[#2578e5] underline'>นโยบายความเป็นส่วนตัว</span> ของสเวนเซ่นส์
              </label>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <input type="checkbox" className=" h-[20px] w-[20px] te cursor-pointer accent-red-600 border-gray-200 rounded-md disabled:opacity-50" id="pdc2" />
              <label htmlFor='pdc2' className="cursor-pointer">
                ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และ<span className='text-[#2578e5] underline'>บริษัทในเครือ</span> โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง<span className='text-[#2578e5] underline mx-2'>นโยบายความเป็นส่วนตัว</span>เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#d1001f] text-xl text-white py-4 rounded-full hover:bg-red-700 disabled:bg-[#d0d5ddcc] disabled:text-[#98a2b3] disabled:cursor-not-allowed"
              disabled={!email || !password || !firstName || !lastName || !tel || !dateBirth}
            >
              สร้างบัญชี
            </button>

          </form>
        </div>
      </div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fbanner%2Fregister-banner.jpg&w=1920&q=75"
          alt="img"
          className='size-full object-cover hidden h-full min-h-screen w-full shrink-0 md:col-span-5 lg:block'
        />
      </div>
      <RegisterSuccessModel open={openModel} onClose={onCloseMedel} />
    </div>
  );
}
