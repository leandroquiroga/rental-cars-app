"use client"
import React, { useContext } from 'react'
import { useTheme } from 'next-themes'
import { resolveTheme } from '@/utils/functions'
import { DesignContext } from '@/context/UseDesingProvider'
import { CustomForm } from "@/components/app";
import { DesingContextType } from '@/interfaces'

export const FormAddCard = () => {
  const { editingCar } = useContext(DesignContext) as DesingContextType;
  const { theme, systemTheme } = useTheme();
  const effectiveTheme: "dark" | "light" = resolveTheme(theme!, systemTheme!) as "dark" | "light";

  return (
    <CustomForm
      editingCar={editingCar}
      effectiveTheme={effectiveTheme}
    />
  )
}
