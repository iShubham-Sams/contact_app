import { Dispatch, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ modalOpen, setModalOpen, children }: { modalOpen: boolean; setModalOpen: () => void; children: React.ReactNode }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);
  return createPortal(
    <div className={`${modalOpen ? "modal-backdrop" : ""}`}>
      <dialog ref={dialogRef} open={modalOpen} className={`${modalOpen ? "modal" : ""}`} onClose={setModalOpen}>
        {children}
        <button onClick={setModalOpen} className="close-button" />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
