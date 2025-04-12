"use client";
import React from 'react'
// import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import { Button } from '@/components/ui/button'
// import { Toaster } from '@/components/ui/sonner'
// import { Fuel, Gauge, Gen, Trash, Users, Wrench } from 'lucide-react';
import { Cars, useDataBase } from '@/hooks/useDatabase';
import { SkeletonCars } from '@/components/app/Skeleton/SkeletonCars';


interface PropsListCars {
  userId: string;
}

export const ListCars = ({userId}: PropsListCars) => {
  const { response, loading, error } = useDataBase('findMany', 'asc', userId);
  
  if (loading) return (<SkeletonCars />);
  if (error) return <div>Error</div>
  return (
    <div className='grid grid-cols-2 gap-6 my-4 lg:grid-cols-3'>
      {
        response?.map((car: Cars) => (
          <div key={car.id} className='relative rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out'>
            <Image
              src={car.photo}
              alt={car.name}
              width={600}
              height={600}
              className='rounded-xl object-cover img-cars'
            />
            {car.isPublished
              ? <p className='absolute top-0 right-0 w-full p-2 text-center bg-green-300'>Published</p>
              : <p className='absolute top-0 right-0 w-full p-2 text-center bg-red-300'>Not Published</p>}

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
