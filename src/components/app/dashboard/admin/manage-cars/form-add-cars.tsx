"use client"
import React, { useContext } from 'react'
import { useTheme } from 'next-themes'
import { resolveTheme } from '@/utils/functions'
import { DesignContext } from '@/context/UseDesingProvider'
import { Cars } from '@/hooks/useDatabase'
import { CustomForm } from "@/components/app";


export type FormFieldName =  "name" | "cv" | "transmission" | "people" | "photo" | "engine" | "type" | "priceDay" | "isPublished"

type DesingContexType = {
  toogleModal: () => void;
  editingCar: Cars | null;
}

export const FormAddCard = () => {
  const { editingCar } = useContext(DesignContext) as DesingContexType;
  const { theme, systemTheme } = useTheme();
  const effectiveTheme: "dark" | "light" = resolveTheme(theme!, systemTheme!) as "dark" | "light";

  return (
    <CustomForm
      editingCar={editingCar}
      effectiveTheme={effectiveTheme}
    />
  )
}
