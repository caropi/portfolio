import React, { useState, useEffect } from "react";
import PopupModalInner from "@common/Popup/PopupModalInner";

export default function PopupModal() {
  const [close, setClose] = useState(false);

  const isOpen = localStorage.modal ? "d-none" : "d-block";
  useEffect(() => {
    localStorage.modal = close;
  });
  return (
    <div
      className={`position-absolute z-index-100 col-5 ${isOpen} bg-beige rounded shadow`}
    >
      <PopupModalInner closeModal={setClose} />
    </div>
  );
}
