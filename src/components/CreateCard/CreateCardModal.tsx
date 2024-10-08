import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../context/ModalContext";
import "../Modal/Modal.scss";

const CreateCardModal = ({children}: {children: React.ReactNode}) => {    const ref = useRef();
    const { modalCreate, closeCreate } = useContext(ModalContext);   

    useEffect(() => {
      if (modalCreate) {
        ref.current?.showModal();
      } else {
        ref.current?.close();
      }
    }, [modalCreate]);

  return (
      <dialog className="modal" onCancel={closeCreate} ref={ref} id="modalWindow">
        <div
          className="modal-whiteboard flex justify-center"
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
        >
          
          {children}
        </div>
      </dialog>
  );
};

export default CreateCardModal;
