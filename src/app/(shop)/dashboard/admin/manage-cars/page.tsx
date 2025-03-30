import React from 'react'
import { ButtonAddCars } from '@/components/app'

export default function ManageCarsPage() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className='text-xl font-bold'>
          Manage your Cars
        </h2>
        <ButtonAddCars />
      </div>
    </>
  )
}
