import { Calendar, Car, Heart, BookText } from "lucide-react";

export const dataGenerateSidebar = [
  {
    index: 1,
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    index: 2,
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves",
  },
  {
    index: 3,
    icon: Heart,
    label: "Favorites",
    href: "/favorites",
  },
]

export const dataGenerateSidebarAdmin = [
  {
    index: 1,
    icon: BookText,
    label: "Manage Your Cars",
    href: "/dashboard/admin/manage-cars",
  },
  {
    index: 2,
    icon: Calendar,
    label: "All Reserves",
    href: "/dashboard/admin/all-reserves",
  }
]