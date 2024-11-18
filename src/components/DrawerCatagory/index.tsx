"use client"

import { usePathname } from "@/i18n/navigation";
import { useEffect } from "react";

type DrawerCatagory = {
  open: boolean;
  onOpen: () => void
  onClose: () => void
}

const DrawerCatagory = ({ open, onOpen, onClose }: DrawerCatagory) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className={pathname === "/" ? "" : "hidden"}>
      {/* Drawer */}
      <button className={`hidden lg:block fixed top-1/3 rounded-2xl bg-[#e60022] p-8 pr-14 duration-300 transition-all shadow-xl	 hover:-right-3 ${open ? "-right-10" : "-right-6"}`} onClick={onOpen}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[14px] block m-auto">
          <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z" fill="white">
          </path>
        </svg>
        <p className="text-center text-white">
          ตะกร้า
        </p>
      </button>
      <div
        className={`fixed top-[15%] right-0 z-40 h-[75%] p-4 shadow-md transition-transform ${open ? "translate-x-0" : "translate-x-96"
          } bg-white w-80`}
        aria-labelledby="drawer-label"
      >
        {/* ปุ่มปิด Drawer */}
        <button
          onClick={onClose}
          className="text-gray-400 rounded-full bg-[#344054] text-xs w-6 h-6 absolute -top-3 -left-3 end-2.5 flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        {/* เนื้อหาใน Drawer */}
        <div className="flex h-full flex-col items-center justify-center">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[14px] text-gray-400">
            <path d="M30.736 22.1667C32.0193 22.1667 33.0693 21.1167 33.0693 19.8333V15.1667H37.736C39.0193 15.1667 40.0693 14.1167 40.0693 12.8333C40.0693 11.55 39.0193 10.5 37.736 10.5H33.0693V5.83333C33.0693 4.55 32.0193 3.5 30.736 3.5C29.4527 3.5 28.4027 4.55 28.4027 5.83333V10.5H23.736C22.4527 10.5 21.4027 11.55 21.4027 12.8333C21.4027 14.1167 22.4527 15.1667 23.736 15.1667H28.4027V19.8333C28.4027 21.1167 29.4527 22.1667 30.736 22.1667ZM19.0693 43.1667C16.5027 43.1667 14.426 45.2667 14.426 47.8333C14.426 50.4 16.5027 52.5 19.0693 52.5C21.636 52.5 23.736 50.4 23.736 47.8333C23.736 45.2667 21.636 43.1667 19.0693 43.1667ZM42.4027 43.1667C39.836 43.1667 37.7593 45.2667 37.7593 47.8333C37.7593 50.4 39.836 52.5 42.4027 52.5C44.9693 52.5 47.0693 50.4 47.0693 47.8333C47.0693 45.2667 44.9693 43.1667 42.4027 43.1667ZM21.636 31.5H39.0193C40.7693 31.5 42.3093 30.5433 43.1027 29.0967L50.6627 14.77C51.246 13.65 50.8493 12.25 49.7293 11.6433C48.586 11.0133 47.1627 11.4567 46.556 12.6L39.0193 26.8333H22.6393L12.6993 5.83333H7.40267C6.11934 5.83333 5.06934 6.88333 5.06934 8.16667C5.06934 9.45 6.11934 10.5 7.40267 10.5H9.736L18.136 28.21L14.986 33.9033C13.2827 37.03 15.5227 40.8333 19.0693 40.8333H44.736C46.0193 40.8333 47.0693 39.7833 47.0693 38.5C47.0693 37.2167 46.0193 36.1667 44.736 36.1667H19.0693L21.636 31.5Z" fill="currentColor"></path></svg>

          <p className="text-gray-400 text-lg text-center">
            เริ่มเพิ่มสินค้าลงในรถเข็นของคุณ
          </p>
        </div>
      </div>

      {/* Overlay ปิด Drawer เมื่อคลิกข้างนอก */}
      {open && (
        <div
          onClick={() => onClose()}
          className="fixed inset-0 bg-opacity-50"
        ></div>
      )}
    </div>
  );
};

export default DrawerCatagory;
