"use server"

import { cookies } from "next/headers";

export async function setAdmin() {
  const cookieStore = await cookies();

  cookieStore.set("isAdmin", "true", {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getAdmin() {
    const cookieStore = await cookies()
    const isAdmin = cookieStore.get("isAdmin")
    console.log("server action, ", isAdmin?.value)

    return isAdmin?.value || null
}