import { useRouter } from '@/i18n/navigation';
import React from 'react'

interface IModel {
  open: boolean;
  onClose: () => void
}

export default function RegisterSuccessModel({ open, onClose }: IModel) {
  const router = useRouter()

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

            <h2 className="text-gray-600 text-4xl font-semibold mb-4 text-center">
              สมัครสมาชิกสำเร็จ
            </h2>

            <button onClick={() => router.push("/login")} type='button' className="mx-auto block bg-[#d1001f] text-xl w-3/4 text-white py-2 rounded-full hover:bg-red-700">
              ไปที่หน้า Login
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
