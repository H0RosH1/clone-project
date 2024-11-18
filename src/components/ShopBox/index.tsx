import React from 'react'
import QuantitySelector from '../QuantitySelector'

interface IShopBox{
  urlIamge: string
  alt?: string
  price: number
  detail: string
  promotion: boolean
}

export default function ShopBox({ urlIamge, alt, price, detail, promotion }: IShopBox) {
  return (
    <div className="relative group h-auto w-full rounded-2xl border box-content overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={urlIamge}
        alt={alt}
        className="w-full"
      />
      <div className="p-5">
        <p className="text-[#d1001f] font-semibold">$ {price}</p>
        <p className="text-[#344054] font-semibold text-xl text-ellipsis overflow-hidden line-clamp-2">
          {detail}
        </p>
      </div>
      {/* ปุ่มซ่อนอยู่ */}
      <div className="absolute bottom-0 left-0 w-full opacity-0 transform translate-y-5 bg-white group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 lg:block hidden">
        {!promotion ? (<button className="w-full bg-[#d1001f] text-white text-xl py-2 rounded-full font-semibold hover:bg-[#ff3a57]">
          ดูรายละเอียด
        </button>) : (<QuantitySelector pricePerItem={price} />)}
        
      </div>

      <button className="flex lg:hidden bg-[#d1001f] text-xl text-white rounded-full absolute top-1/2 right-5 w-[32px] items-center justify-center bg-background-brand p-[2px] shadow-[0px_8px_16px_-4px_rgba(3,6,15,0.32)]">
        +
      </button>
      
      {/* <QuantitySelector /> */}
    </div>

  )
}
