import React, { createContext, useState } from "react";

// описываем структуру контекста, типизация
interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;

  modalCreate: boolean;
  openCreate: () => void;
  closeCreate: () => void;
  
}
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
    document.body.style.overflowY = "hidden";
  };
  const close = () => {
    setModal(false);
    document.body.style.overflowY = "overlay";
  };

  const openCreate = () => {
    setModalCreate(true);
    document.body.style.overflowY = "hidden";
  };
  const closeCreate = () => {
    setModalCreate(false);
    document.body.style.overflowY = "overlay";
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
