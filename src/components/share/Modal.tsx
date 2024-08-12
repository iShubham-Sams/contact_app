import { Dispatch, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ modalOpen, setModalOpen, children }: { modalOpen: boolean; setModalOpen: Dispatch<React.SetStateAction<boolean>>; children: React.ReactNode }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);
  function onDismiss() {
    setModalOpen(false);
  }

  return createPortal(
    <div className={`${modalOpen ? "modal-backdrop" : ""}`}>
      <dialog ref={dialogRef} open={modalOpen} className={`${modalOpen ? "modal" : ""}`} onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
