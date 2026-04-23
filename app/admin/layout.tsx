import React from 'react'
import OtherNav from '../[components]/OtherNav'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminLayout = async ({children} : Readonly<{children: React.ReactNode}>) => {
  const cookieStore = await cookies()
  const isAdmin = cookieStore.get("isAdmin")?.value
  if (!isAdmin) redirect("/")
  return (
    <main>
        <OtherNav />
        {children}
    </main>
  )
}

export default AdminLayout