'use client'
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import React from 'react'

interface IModel {
  open: boolean;
  onClose: () => void;
  onAction: () => void;
  id?: string
  name: string;
  detail: string;
  urlImage: string;
  price: number;
  quantity: number;
  promotion: boolean;
  categoryId: number;
  setName: (value: string) => void;
  setDetail: (value: string) => void;
  setUrlImage: (value: string) => void;
  setPrice: (value: number) => void;
  setQuantity: (value: number) => void;
  setPromotion: (value: boolean) => void;
  setCategoryId: (value: number) => void;
}

export default function ModelActionProduct({
  open,
  onClose,
  onAction,
  id,
  name,
  detail,
  urlImage,
  price,
  quantity,
  promotion,
  categoryId,
  setName,
  setDetail,
  setUrlImage,
  setPrice,
  setQuantity,
  setPromotion,
  setCategoryId
}: IModel) {

  const { categorys } = useAppSelector((state: RootState) => state.category);
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure only numbers or an empty string are accepted
    if (!value || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setPrice(Number(value));
    }
  };

  const handleQuaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure only numbers or an empty string are accepted
    if (!value || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setQuantity(Number(value));
    }
  };

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
              {id ? (<>แก้ไข Product Id: {id}</>) : "เพิ่ม Category"}
            </h2>
            <div className='grid grid-cols-1 gap-x-3 max-h-96 overflow-auto'>
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
              <div className="mb-4 space-y-2">
                <label htmlFor="urlImage" className="block text-lg font-medium text-gray-700 w-fit">
                  url รูปภาพ
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="url Image"
                  id="urlImage"
                  value={urlImage}
                  onChange={(e) => setUrlImage(e.target.value)}
                  className="w-full  p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
              <div className="mb-4 space-y-2">
                <label htmlFor="price" className="block text-lg font-medium text-gray-700 w-fit">
                  ราคา
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="ราคา"
                  id="price"
                  value={price}
                  onChange={handlePriceChange}
                  min="0"
                  className="w-full p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
              <div className="mb-4 space-y-2">
                <label htmlFor="quantity" className="block text-lg font-medium text-gray-700 w-fit">
                  จำนวน
                  <samp className="text-xs text-red-700 ml-1">*</samp>
                </label>
                <input
                  type="text"
                  placeholder="จำนวน"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuaChange}
                  min="0"
                  className="w-full p-4 border rounded-md focus:outline-gray-400 hover:bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="options" className="block mb-2 text-sm text-gray-700">
                  Select an option
                </label>
                <select
                  id="options"
                  value={categoryId}
                  onChange={(e) => setCategoryId(Number(e.target.value))}
                  className="w-full p-4 border rounded-md focus:outline-gray-400"
                >
                  <option value={0} disabled>
                    -- Select an option --
                  </option>
                  {categorys?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2 my-4">
                <input
                  type="checkbox"
                  id="promotion"
                  checked={promotion}
                  onChange={(e) => setPromotion(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="promotion" className="text-gray-700 cursor-pointer text-lg">
                  มี Promotion
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={onAction}
                type='button'
                disabled={!name || !detail || !urlImage || !price || categoryId === 0}
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
