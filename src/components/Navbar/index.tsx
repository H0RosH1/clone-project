'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import MenuLocale from '../MenuLocale'
import { useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import LoginModal from '../LoginModel'
import DrawerCatagory from '../DrawerCatagory'
import { getCookie } from '@/utils/cookie'


export default function Navber() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const locale = useLocale()
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchCookie = async () => {
      const userCookie = await getCookie("user");
      if (userCookie) {
        setUser(userCookie);
      }
    };
    
    fetchCookie();
  }, [user]);

  const changeLanguage = (value: "th" | "en") => {
    router.replace(pathname, { locale: value });
  };

  const onCloseLoginMedel = () => {
    setOpenModel(false)
  }

  const onOpenCategory = () => {
    setCategoryOpen(true)
  }

  const onCloseCategory = () => {
    setCategoryOpen(false)
  }

  return (
    <header className="bg-white fixed w-screen shadow z-50 py-1">
      <nav aria-label="Global" className="mx-auto lg:container flex items-center justify-between px-10 py-4">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="img"
              src="https://www.swensens1112.com/images/desktop-header-logo.svg"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex lg:flex-1 lg:justify-end gap-8 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.swensens1112.com/images/mobile-cart.svg"
            alt="shopping"
            className={`h-8 w-auto cursor-pointer ${pathname === "/" ? "" : "hidden"}`}
            onClick={() => setCategoryOpen(true)}
          />
          {user ? (
            <div className='flex items-center gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <p className='text-lg '>{user}</p>
            </div>
          ) : (
            <button onClick={() => setOpenModel(true)} className="hidden lg:block text-xl leading-6 text-white bg-[#d0001f] hover:bg-[#ff3a57] p-2 px-4 rounded-full">
              เข้าสู่ระบบ&#47;ลงทะเบียน
            </button>
          )}
          <div className='hidden lg:flex items-center gap-2'>
            <MenuLocale />
          </div>
        </div>
      </nav>
      <LoginModal open={openModel} onClose={onCloseLoginMedel} />


      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-[#1d2939cc] bg-opacity-80 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <TransitionChild>
          <div className="fixed inset-0 z-10" />
          <DialogPanel transition className="fixed inset-y-0 left-0 z-10 w-5/6 overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 duration-200 ease-in-out data-[closed]:opacity-0 data-[closed]:-translate-x-full">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-red-500"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-3 py-6">
                  <div className='text-xl font-semibold mb-10'>
                    Login to begin your ice cream journey
                  </div>
                  <Link
                    href="#"
                    className="flex gap-2 rounded-lg px-3 py-2 text-xl leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    คำสั่งซื้อและสั่งอีกครั้ง
                  </Link>
                  <Link
                    href="#"
                    className="flex gap-2 rounded-lg px-3 py-2 text-xl leading-7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                    โปรไฟล์
                  </Link>
                  <Link
                    href="#"
                    className="ml-8 block rounded-lg px-3 py-2 text-xl leading-7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    เปลี่ยนรหัสผ่าน
                  </Link>
                  <Link
                    href="#"
                    className="ml-8 block rounded-lg px-3 py-2.5 text-xl leading-7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    บัตรเครดิตของฉัน
                  </Link>
                  <Link
                    href="#"
                    className="ml-8 block rounded-lg px-3 py-2.5 text-xl leading-7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    สมุดที่อยู่
                  </Link>
                  {/* dropdown */}
                  <div>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="relative w-full text-left block rounded-lg px-3 py-2.5 text-xl leading-7 font-medium text-gray-900 hover:bg-gray-50"
                    >
                      ภาษา&nbsp;-&nbsp;
                      <span className='uppercase'>
                        {locale}
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="absolute right-0 top-1/4 h-5 w-5 flex-none duration-500 group-data-[open]:rotate-180 " />
                    </button>
                    <div
                      className={`mt-2 ml-8 w-auto overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      style={{ transitionProperty: "max-height, opacity" }}
                    >
                      <ul>
                        <li className="px-4 py-2 flex gap-2 mb-1 text-xl uppercase hover:bg-gray-50" onClick={() => changeLanguage("en")}>
                          {locale === "en" &&
                            <div className="bg-[#d0001f] flex h-auto w-[4px] rounded-xs bg-border-brand"></div>
                          }
                          Engish
                        </li>
                        <li className="px-4 py-2 flex gap-2 text-xl hover:bg-gray-50" onClick={() => changeLanguage("th")}>
                          {locale === "th" &&
                            <div className="bg-[#d0001f] flex h-auto w-[4px] rounded-xs bg-border-brand"></div>
                          }
                          ภาษาไทย
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link href="#" className="flex gap-2 justify-center items-center px-3 py-2.5 text-xl leading-7 text-white bg-[#d0001f] hover:bg-[#ff3a57] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white">
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>

                    เข้าสู่ระบบ&#47;ลงทะเบียน
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
      <DrawerCatagory open={categoryOpen} onOpen={onOpenCategory} onClose={onCloseCategory} />
    </header >
  )
}
