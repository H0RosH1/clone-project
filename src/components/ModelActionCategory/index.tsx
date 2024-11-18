'use client'
import React from 'react'

interface IModel {
  open: boolean;
  onClose: () => void;
  onAction: () => void;
  id?: string
  name: string;
  detail: string;
  setName: (value: string) => void;
  setDetail: (value: string) => void;
}

export default function ModelActionCategory({ open, onClose, onAction, id, name, detail, setName, setDetail }: IModel) {

  return (
    <div className={`transition-opacity duration-300 ease-in-out ${open === true ? "opacity-100" : "opacity-0"}`}>
      {/* Modal */}
      {open && (
        <div
          className=
          'fixed inset-0 z-50 flex items-center justify-center bg-[#1d2939cc] bg-opacity-50 transition-opacity duration-200 ease-in-out'
        >
          <div className="bg-white rounded-lg w-full max-w-md p-10 relative space-y-2">

            <button
              onClick={onClose}
              className="absolute text-lg font-semibold top-3 right-5 text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-gray-600 text-2xl font-semibold">
              {id ? (<>แก้ไข Category Id: {id}</>) : "เพิ่ม Category"}
            </h2>
            <div className='grid grid-cols-1 gap-x-3'>
              <div className="mb-4 space-y-2">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 w-fit">
                  ชื่อ
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full  p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
              <div className="mb-4 space-y-2">
                <label htmlFor="detail" className="block text-lg font-medium text-gray-700 w-fit">
                  รายละเอียด
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="รายละเอียด"
                  id="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="w-full  p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={onAction}
                type='button'
                disabled={!name || !detail}
                className="mx-auto block border text-[#d1001f] border-[#d1001f] text-xl w-1/2 hover:text-white py-2 rounded-full hover:bg-red-700 disabled:bg-[#d0d5ddcc] disabled:text-[#98a2b3] disabled:border-[#d0d5ddcc] disabled:cursor-not-allowed">
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
