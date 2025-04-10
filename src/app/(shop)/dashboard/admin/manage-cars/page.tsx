import React from 'react'
import { ButtonAddCars, ListCars } from '@/components/app'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
// import prisma from '@/lib/db';

export default async function ManageCarsPage() {
  const { userId } = await auth();

  if (!userId) return redirect('/');

  const cars: [] = []
  // const cars = await prisma.car.findMany({where: { userid: userId }, orderBy: { createdAt: 'desc' }});

  console.log({cars}, {userId});
  return (
    <div className='h-screen'>
      <div className="flex max-w-4xl mx-auto flex-col gap-4">
        <h2 className='text-xl font-bold text-center'>
          Manage your Cars
        </h2>
        {
          !cars.length ? (<p> No hay autos disponibles </p> ) : <ListCars />      
        }
      </div>
      <div className='block absolute bottom-10 right-5'>
        <ButtonAddCars />
      </div>
    </div>
  )
}
