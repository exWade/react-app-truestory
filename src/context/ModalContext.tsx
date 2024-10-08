import React, { createContext, useState } from "react";
import { IModalContext } from "../types/models";

// описываем структуру контекста, типизация

// Это значение используется по умолчанию, если провайдер контекста не предоставляет фактическое значение, что редко бывает.
export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
  modalCreate: false,
  openCreate: () => {},
  closeCreate: () => {},
});

// Компонент провайдера контекста
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);

  const open = () => {
    setModal(true);
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => {
    setModal(false);
    document.documentElement.style.overflow = "";
  };

  const openCreate = () => {
    setModalCreate(true);
    document.documentElement.style.overflow = "hidden";
  };
  const closeCreate = () => {
    setModalCreate(false);
    document.documentElement.style.overflow = "";
  };

  return (
    // оборачивает все дочерние компоненты и предоставляет значения контекста
    <ModalContext.Provider
      value={{ modal, open, close, modalCreate, openCreate, closeCreate }}
    >
      {children}
    </ModalContext.Provider>
  );
};
