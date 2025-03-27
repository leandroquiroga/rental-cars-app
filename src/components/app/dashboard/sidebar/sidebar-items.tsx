import { dataGenerateSidebar } from '@/data/sidebar/sidebar.data'
import React from 'react'
import ListItems from './list-item'

export default function SidebarItems() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <div className="p-2 md:p-6">
          <div className='mb-2'>
            GENERAL
            {dataGenerateSidebar.map((item) => (
              <ListItems
                key={item.index}
                icon={item.icon}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
