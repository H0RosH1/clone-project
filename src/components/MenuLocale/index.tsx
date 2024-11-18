'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import React from 'react'

export default function MenuLocale() {

  const locale = useLocale()
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (value: "th" | "en") => {
    router.replace(pathname, { locale: value });
  };

  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <div className='text-2xl'>
              TH
            </div>
          </div>
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute -right-5 z-10 w-32 p-1 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <button
            onClick={() => changeLanguage("en")}
            className={`block text-center w-full px-4 py-2 rounded-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none
              ${locale === "en" ? "bg-red-200" : ""}`}
          >
            EN
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => changeLanguage("th")}
            className={`block text-center w-full px-4 py-2 rounded-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none
              ${locale === "th" ? "bg-red-200" : ""}`}
          >
            TH
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
