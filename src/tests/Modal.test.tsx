import { render } from "@testing-library/react";
import Modal from "../components/Modal";
import { ModalContext } from "../providers/modalContext";
import "@testing-library/jest-dom";

describe("Modal Component", () => {
  it("renders modal content when isOpen is true", () => {
    const { getByText } = render(
      <ModalContext.Provider
        value={{ isModalOpen: true, toggleModal: () => {} }}>
        <Modal>
          <div data-testid="modal-content">Modal Content</div>
        </Modal>
      </ModalContext.Provider>
    );
    const modalContent = getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });
});
