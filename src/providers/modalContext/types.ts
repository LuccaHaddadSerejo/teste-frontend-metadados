import React from "react";

export interface iModalContextProps {
  children: React.ReactNode;
}

export interface iModalContextValue {
  toggleModal: () => void;
  isModalOpen: boolean;
}
