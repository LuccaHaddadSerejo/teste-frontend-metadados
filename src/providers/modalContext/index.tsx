import { createContext, useState } from "react";
import { iModalContextProps, iModalContextValue } from "./types";

export const ModalContext = createContext({} as iModalContextValue);

export const ModalProvider = ({ children }: iModalContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        toggleModal,
        isModalOpen,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
