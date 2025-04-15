"use client";
import React from 'react'
// import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import { Button } from '@/components/ui/button'
// import { Toaster } from '@/components/ui/sonner'
// import { Fuel, Gauge, Gen, Trash, Users, Wrench } from 'lucide-react';
import { Cars, useDataBase } from '@/hooks/useDatabase';
import { SkeletonCars } from '@/components/app/skeleton/skeleton-cars';


interface PropsListCars {
  userId: string;
}

export const ListCars = ({userId}: PropsListCars) => {
  const { response, loading, error } = useDataBase('findMany', 'asc', userId);
  
  if (loading) return (<SkeletonCars />);
  if (error) return <div>Error</div>
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-4 lg:grid-cols-3'>
      {
        response?.map((car: Cars) => (
          <div key={car.id} className='relative rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out'>

            <div className="relative w-full h-48 lg:h-64">
              <Image
                src={car.photo}
                alt={car.name}
                fill
                className='rounded-xl object-cover'
              />
            </div>
            {car.isPublished
              ? <p className='absolute top-0 right-0 w-full p-2 text-center rounded-t-lg bg-green-300'>Published</p>
              : <p className='absolute top-0 right-0 w-full p-2 text-center rounded-t-lg bg-red-300'>Not Published</p>}

            <div className='relative p-3'>
              <div className='flex flex-col mb-3 gap-x-4'>
                <p>{car.name}</p>
              </div>
            </div>
          
          </div>
        ))
      }
    </div>
  )
}
