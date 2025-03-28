"use client"
import React, { PropsWithChildren } from "react";
import { NavbarDashboard, Sidebar } from "@/components/app";

export default function LayoutDashboard({ children }: PropsWithChildren<object>) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden h-full xl:block xl:fixed w-80">
        <Sidebar />
      </div>
      <div className="w-full h-full xl:ml-80">
        <NavbarDashboard />
        <div className="p-6 h-max">
          {children}
        </div>
      </div>
    </div>
  )
}