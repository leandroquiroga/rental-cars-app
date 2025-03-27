import { cn } from '@/lib/utils'
import { Icon, LucideProps } from 'lucide-react'
import Link from 'next/link'
import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

type Icon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

interface ListItemProps {
  icon: Icon,
  label: string,
  href: string,
}

export default function ListItems({ label, href, icon: Icon }: ListItemProps) {
  const pathName = usePathname();
  const { theme } = useTheme();  
  const activePath = pathName === href;

  console.log({ theme, activePath, pathName, href });
  return (
    <div>
      
      <Link href={href} className={cn(`flex gap-2 text-sm items-center p-2 rounded-lg cursor-pointer`,  activePath && theme === 'ligth' ? 'bg-gray-300' : 'bg-gray-100')}>
        <Icon size={24} />
        <span>{label}</span>
      </Link>
    </div>
  )
}
