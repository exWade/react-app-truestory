import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import "../Modal/Modal.scss";

const CreateCardModal = ({children}: {children: React.ReactNode}) => {
    const { closeCreate } = useContext(ModalContext);

  return (
    <>
      <div className="modal" id="modalWindow" onClick={closeCreate}>
        <div
          className="modal-whiteboard flex justify-center"
           role="document"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span className="close" onClick={closeCreate}>
            ×
          </span>
          {children}
        </div>
      </div>
    </>
  );
};

export default CreateCardModal;
