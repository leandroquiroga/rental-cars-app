"use client";
import React, { ForwardRefExoticComponent, RefAttributes, useEffect, useState} from 'react'
import Link from 'next/link'
import { Icon, LucideProps } from 'lucide-react'
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'
import { resolveTheme } from '@/utils/functions';

type Icon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

interface ListItemProps {
  icon: Icon,
  label: string,
  href: string,
}

export default function ListItems({ label, href, icon: Icon }: ListItemProps) {
  const pathName = usePathname();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  const activePath = pathName === href;
  const effectiveTheme = resolveTheme(theme!, systemTheme!);
  return (
    <div>
      <Link
        href={href}
        className={cn(
          `
            flex
            gap-x-2
            text-sm
            items-center
            p-2
            mt-1
            rounded-lg
            cursor-pointer
          `,
          activePath && effectiveTheme === 'dark' && 'bg-slate-400/20',
          activePath && effectiveTheme === 'light' && 'bg-zinc-800/20',
        )}
      >
        <Icon size={24} strokeWidth={1}/>
        <span>{label}</span>
      </Link>
    </div>
  );
}
