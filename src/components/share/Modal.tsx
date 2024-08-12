import { useEffect, useRef } from "react";

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
  return (
    <div className={`${modalOpen ? "modal-backdrop" : ""}`}>
      <dialog ref={dialogRef} open={modalOpen} className={`${modalOpen ? "modal" : ""}`} onClose={setModalOpen}>
        {children}
        <button onClick={setModalOpen} className="close-button" />
      </dialog>
    </div>
  );
}
