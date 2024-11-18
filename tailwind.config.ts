import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // สแกนไฟล์ในโฟลเดอร์ pages
    "./components/**/*.{js,ts,jsx,tsx}", // สแกนไฟล์ในโฟลเดอร์ components
    "./src/app/**/*.{js,ts,jsx,tsx}", // สแกนโฟลเดอร์ app ถ้าใช้ App Router
    "./src/**/*.{js,ts,jsx,tsx}", // ถ้าคุณใช้โฟลเดอร์ src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
