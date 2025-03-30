import React from 'react'
import { Separator } from "@/components/ui/separator";
import ListItems from './list-item'
import { dataGenerateSidebar, dataGenerateSidebarAdmin } from '@/data/sidebar/sidebar.data'

export default function SidebarItems() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>

        <div className="p-2 md:p-6">
          <p className='mb-2'> GENERAL </p>
            {dataGenerateSidebar.map((item) => (
              <ListItems
                key={item.index}
                icon={item.icon}
                href={item.href}
                label={item.label}
              />
            ))}
            <div>
          </div>
          
        </div>

        <Separator className="my-2" />
        
        <div className='p-2 md:p-6'>
          <p className='mb-2'> ADMIN </p>
              {dataGenerateSidebarAdmin.map((item) => (
                <ListItems
                  key={item.index}
                  icon={item.icon}
                  href={item.href}
                  label={item.label}
                />
              ))}
        </div>
      </div>
      <footer className='p-3 mt-3 text-center'>
        <div className="p-2 md:p-6">
        <Separator className="my-2" />
        <div className='mb-2'>
          <h1 className='text-center text-sm'>© 2025 All rights reserved</h1>
        </div>
        </div>
      </footer>
    </div>
  )
}
