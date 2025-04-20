"use client"
import { createContext, useState } from 'react';
import { Cars } from '@/hooks/useDatabase';

export const DesignContext = createContext({});

export const DesingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editingCar, setEditingCar] = useState<Cars | null>(null);

  const toogleModal = () => setIsOpenModal(!isOpenModal);
  const clearEditingCar = () => setEditingCar(null);

  return (
    <DesignContext.Provider value={{
      toogleModal,
      isOpenModal,
      editingCar,
      setEditingCar,
      clearEditingCar
    }}>
      {children}
    </DesignContext.Provider>
  );
}