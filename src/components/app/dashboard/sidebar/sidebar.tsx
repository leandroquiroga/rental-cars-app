"use client";
import { useAuth } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import LogoDashboard from "../logo-dashboard/logo-dashboard";
import SidebarItems from "./sidebar-items";

export function Sidebar() {
  const { userId } = useAuth();

  console.log({ userId });
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full border-r">
        <LogoDashboard />
        <Separator />
        <SidebarItems />
      </div>
    </div>
  );
}