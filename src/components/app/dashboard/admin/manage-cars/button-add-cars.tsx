"use client";
import React, { useState } from 'react';
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

export const ButtonAddCars = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          className={ "flex h-10 w-10 items-center rounded-full border border-transparen px-4 py-2 text-sm font-medium shadow-sm focus:outline-none cursor-pointer focus:ring-offset-2"}
          variant='outline'
          size="icon"
          onClick={() => setOpenDialog(true)}
        >
          <CarIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Car</DialogTitle>
        </DialogHeader>
        <FormAddCard setOpenDialog={setOpenDialog} />
      </DialogContent>
    </Dialog>
  )
}
