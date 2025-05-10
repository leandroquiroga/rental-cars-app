"use client";
import React, { useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button';
import { CarIcon } from 'lucide-react';
import { FormAddCard } from './form-add-cars';
import { DesignContext } from '@/context/UseDesingProvider';
import { DesingContextType } from '@/interfaces';


export const ButtonAddCars = () => {
  const { toogleModal, isOpenModal, clearEditingCar } = useContext(DesignContext) as DesingContextType;

  const handleButtonClick = () => {
    toogleModal();
    clearEditingCar();
  }
  return (
    <Dialog open={isOpenModal} onOpenChange={toogleModal}>
      <DialogTrigger asChild>
        <Button
          className={ "flex h-10 w-10 items-center rounded-full border border-transparen px-4 py-2 text-sm font-medium shadow-sm focus:outline-none cursor-pointer focus:ring-offset-2"}
          variant='outline'
          size="icon"
          onClick={handleButtonClick}
        >
          <CarIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Car</DialogTitle>
        </DialogHeader>
        <FormAddCard/>
      </DialogContent>
    </Dialog>
  )
}
