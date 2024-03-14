// Modal as a separate component
import React, { useContext } from "react";
import { StyledModalMain, StyledWrapper } from "./style";
import { ModalContext } from "../../providers/modalContext";

interface iModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: iModalProps) => {
  const { isModalOpen } = useContext(ModalContext);
  return (
    <StyledWrapper isOpen={isModalOpen}>
      <StyledModalMain isOpen={isModalOpen}>
        <div className="modal-body">{children}</div>
        <div className="btn-container"></div>
      </StyledModalMain>
    </StyledWrapper>
  );
};

export default Modal;
