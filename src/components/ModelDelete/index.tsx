'use client'
import React from 'react'

interface IModel {
  title: string
  open: boolean;
  onClose: () => void;
  onAction: () => void;
}

export default function ModelDelete({ title, open, onClose, onAction }: IModel) {

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

            <h2 className="text-gray-600 text-2xl font-semibold mb-8 text-center">
              {title}
            </h2>
            

            <div className="flex gap-4">
              <button onClick={onAction} type='button' className="mx-auto block border text-[#d1001f] border-[#d1001f] text-xl w-1/2 hover:text-white py-2 rounded-full hover:bg-red-700">
                ยืนยัน
              </button>
              <button onClick={onClose} type='button' className="mx-auto block bg-[#d1001f] text-xl w-1/2 text-white py-2 rounded-full hover:bg-red-700">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
