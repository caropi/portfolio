import React from "react";

export default function PopupModalInner({ closeModal }) {
  return (
    <div>
      <p onClick={() => closeModal(true)}>close modal</p>

      <h1 className="h5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga
        error doloremque magnam. Omnis, odit veritatis fugiat saepe, tempore
        iure ut, quaerat accusantium consequuntur aliquid eius tempora quidem ea
        architecto?
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
        asperiores odit tempora numquam minus minima voluptatem provident
        aliquam impedit quibusdam nihil quos officia? Nisi facere temporibus,
        atque praesentium voluptatibus adipisci.
      </p>
    </div>
  );
}
