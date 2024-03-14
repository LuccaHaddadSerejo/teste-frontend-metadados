// Modal as a separate component
import React from "react";
import { StyledModalMain, StyledWrapper } from "./style";

interface iModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal = ({ open, children }: iModalProps) => {
  return (
    <StyledWrapper isOpen={open}>
      <StyledModalMain>
        <div className="modal-body">{children}</div>
        <div className="btn-container"></div>
      </StyledModalMain>
    </StyledWrapper>
  );
};

export default Modal;
