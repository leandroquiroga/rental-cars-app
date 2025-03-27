import React, { PropsWithChildren } from "react";

import { Sidebar } from "@/components/app";


export default function LayoutDashboard({children}: PropsWithChildren<object>) {
  return (
    <div className="flex w-full h-full">
      <div className="h-full xl:block w-80 xl:fixed">  {/* Colocar la propiedad hidden en un futuro */}
        <Sidebar />
      </div>
      <div className="w-full h-full xl:ml-80">
        NavarDashboard...
        <div className="p-6 h-max">
          {children}
        </div>
      </div>
    </div>
  )
}