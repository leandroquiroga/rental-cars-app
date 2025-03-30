"use client"

import React, { PropsWithChildren } from 'react'
import Image from 'next/image'

export default function AuthLayout({ children }: PropsWithChildren<object>) {
  return (
    <div className='grid lg:grid-cols-1 h-full justify-center items-center'>
      <div className='flex flex-col justify-center items-center p-10'>
        <div className='flex m-2 h-full justify-center items-center'>
          <Image
            src='/logo.svg'
            width={30}
            height={30}
            alt='logo'
          />
          <h1 className='flex justify-center mx-3'>Rental Cars</h1>
        </div>
        {children}
      </div>
     </div>
  )
}
