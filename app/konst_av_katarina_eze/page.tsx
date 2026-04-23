import React from 'react'
import OtherNav from '../[components]/OtherNav'
import ImagesDisplay from '../[components]/ImagesDisplay'
import { cookies } from 'next/headers'

const KonstAvKatarina = async () => {
  const cookieStore = await cookies()
  const isAdmin = cookieStore.get("isAdmin")?.value === "true"
  return (
    <main>
      {/* <Navigation /> */}
      <OtherNav />
      <section className='mt-10 min-h-screen'>
        <p className='w-full flex justify-center items-center font-bold font-main text-3xl text-center text-gold-section-color/70 max-[400px]:break-all'>Konsta av Katarina</p>
        <div>
          <ImagesDisplay adminStatus={isAdmin}/>
        </div>
      </section>
    </main>
  )
}

export default KonstAvKatarina