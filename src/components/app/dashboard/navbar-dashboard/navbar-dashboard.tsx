import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import SidebarItems from '../sidebar/sidebar-items'
import { UserButton } from '@clerk/nextjs'


export function NavbarDashboard() {
  return (
    <nav className='flex items-center justify-between w-ful h-20 px-2 border-b gap-x-4 md:px-6 bg-background '>
      <div className='block xl:hidden'>
        <Sheet>
          <SheetTrigger className='flex items-center'>
            <Menu />
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetTitle />
            <SidebarItems />
          </SheetContent>
        </Sheet>
      </div>

      <div className='flex items-center justify-end w-full gap-x-2'>
        {/* Realizar la autenticacion para ver este boton */}
        <UserButton />
      </div>
    </nav>
  )
}
