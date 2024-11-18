import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
// import { getCookie } from "./utils/cookie";

export default async function middleware(request: NextRequest) {
  // const lang = getCookie("NEXT_LOCALE");
  // สร้าง middleware สำหรับจัดการ i18n
  const handleI18nRouting = createMiddleware({
    locales: ["en", "th"],
    defaultLocale: "en",
  });

  // เรียกใช้ middleware เพื่อกำหนดเส้นทาง (routing)
  const response = handleI18nRouting(request);


  // ถ้าไม่มี token ให้เปลี่ยนเส้นทางไปที่หน้า login
  // if (!token) {
  //   return NextResponse.redirect(new URL(`/${lang?.value}/login`, request.url));
  // }

  // ส่งกลับ response
  if (!response) {
    return NextResponse.next();
  }
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(th|en)/:path*"],
};
