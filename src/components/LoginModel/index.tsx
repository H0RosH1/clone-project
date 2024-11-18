'use client'

import { useState } from "react";
import PasswordInput from "../PasswordInput";
import axios from "axios";
import { setCookie } from "@/utils/cookie";
import { Link } from "@/i18n/navigation";

type LoginModel = {
  open: boolean;
  onClose: () => void
}

export default function LoginModal({ open, onClose }: LoginModel) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const login = await axios.post("http://localhost:9000/api/user/login", { email, password })
      console.log(login.data);
      await setCookie("token", login.data.data.token)
      await setCookie("user", `${login.data.data.firtsName} ${login.data.data.lastName}`)
      window.location.reload();
      onClose()
    } catch (error) {
      if (error instanceof Error)
        console.log(error.message);
    }
  }

  return (
    <div className={`transition-opacity duration-300 ease-in-out ${open === true ? "opacity-100" : "opacity-0"}`}>
      {/* Modal */}
      {open && (
        <div
          className=
          'fixed inset-0 z-50 flex items-center justify-center bg-[#1d2939cc] bg-opacity-50 transition-opacity duration-200 ease-in-out'
        >
          <div className="bg-white rounded-lg w-full max-w-md p-10 relative">

            <button
              onClick={onClose}
              className="absolute text-lg font-semibold top-3 right-5 text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-gray-600 text-4xl font-bold mb-4">
              ยินดีต้อนรับสมาชิก Swensen&#39;s เข้าสู่ระบบแล้วเริ่มสั่งไอศกรีมกันเลย!
            </h2>

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
                className="w-full bg-[#d1001f] text-white py-2 rounded-full hover:bg-red-700 disabled:bg-[#d0d5ddcc] disabled:text-[#98a2b3] disabled:cursor-not-allowed"
                disabled={!email || !password}
              >
                เข้าสู่ระบบ
              </button>
            </form>

            <div className="text-center text-lg mt-4">
              ยังไม่มีบัญชีใช่หรือไม่?{" "}
              <Link onClick={onClose} href="/register" className="text-[#2578e5] font-semibold">
                สร้างบัญชี
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
