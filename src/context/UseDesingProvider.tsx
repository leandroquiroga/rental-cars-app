"use client"
import { createContext, useState } from 'react';

export const DesignContext = createContext({});

export const DesingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);


  const toogleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <DesignContext.Provider value={{ toogleModal, isOpenModal }}>
      {children}
    </DesignContext.Provider>
  );
}