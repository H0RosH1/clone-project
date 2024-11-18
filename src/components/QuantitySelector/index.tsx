import React, { useState } from "react";

interface iQuantitySelector {
  pricePerItem: number
}

const QuantitySelector = ({ pricePerItem }: iQuantitySelector) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // const pricePerItem = 499;

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative h-auto">
      <div className="flex h-12 w-full overflow-hidden shadow-white">
        {/* Dropdown ที่แสดงจำนวน */}
        <div
          className={`text-[#d1001f] absolute z-10 flex flex-col bg-white shadow-sm text-title-md-medium text-text-brand transition-[height,opacity] duration-300 ease-in-out ${isDropdownOpen ? "h-52 opacity-100" : "h-0 opacity-0"
            } overflow-hidden bottom-12`}
          onMouseLeave={() => setIsDropdownOpen(false)} // ปิด dropdown เมื่อเมาส์ออกจาก dropdown
        >
          {[...Array(4)].map((_, index) => {
            const value = 4 - index;
            return (
              <button
                key={value}
                type="button"
                className="relative block w-16 px-2 py-4 text-[#d1001f] text-center after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-px after:w-3/4 after:border-b last:after:border-0 hover:bg-gray-100"
                onClick={() => handleQuantityChange(value)}
              >
                {value}
              </button>
            );
          })}
        </div>

        {/* ปุ่มแสดงจำนวน */}
        <button
          type="button"
          aria-label="qty-selector"
          className="text-[#d1001f] w-16 rounded-l-3xl border border-[#d1001f] bg-white text-title-md-medium flex items-center justify-center px-4 py-2"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {quantity}
          <div className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-[#d1001f]"
            >
              <path d="M5.83398 7.9165L10.0007 12.0832L14.1673 7.9165H5.83398Z" />
            </svg>
          </div>
        </button>

        {/* ปุ่ม "ใส่ตะกร้า" */}
        <button
          aria-label="add-to-cart"
          className="bg-[#d1001f] text-white text-body-md-bold flex grow items-center justify-center gap-x-2 px-4 py-2 hover:bg-red-600 focus:outline-none rounded-r-3xl"
        >
          <span>ใส่ตะกร้า&nbsp;</span>
          <span className="inline-block shrink-0 whitespace-nowrap">฿ {quantity * pricePerItem}</span>
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
