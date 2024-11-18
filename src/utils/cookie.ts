"use server"
import { cookies } from "next/headers";

// Get cookie by name
const getCookie = async (name: string) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(name);
  return cookie?.value || null;
};

// Set cookie with optional parameters
const setCookie = (
  name: string,
  value: string,
  options: {
    path?: string;
    maxAge?: number;
    httpOnly?: boolean;
  } = {}
) => {
  const cookieStore = cookies();
  cookieStore.set({
    name,
    value,
    path: options.path || "/",
    maxAge: options.maxAge || 60 * 60 * 24, // Default: 1 day
    httpOnly: options.httpOnly || false,
  });
};

// Delete cookie by name
const deleteCookie = (name: string) => {
  const cookieStore = cookies();
  cookieStore.delete(name);
};

export { getCookie, setCookie, deleteCookie };
