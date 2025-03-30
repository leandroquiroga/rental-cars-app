"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { FormAddCard } from './form-add-cars';

export const ButtonAddCars = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          className={ "flex items-center gap-2 rounded-md border border-transparen px-4 py-2 text-sm font-medium shadow-sm focus:outline-none cursor-pointer focus:ring-offset-2"}
          variant='outline'
          onClick={() => setOpenDialog(true)}
        >
          <PlusCircle className="h-4 w-4" />
          Add Cars
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Car</DialogTitle>
          <DialogDescription>
            <FormAddCard />
          </DialogDescription>
        </DialogHeader>
        {/* Add your form or content here */}
      </DialogContent>
    </Dialog>
  )
}
