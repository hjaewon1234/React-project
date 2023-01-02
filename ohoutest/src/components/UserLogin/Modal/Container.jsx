import ModalComponents from "./Component";
import React, { useState } from "react";

const ModalContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <React.Fragment>
        <ModalComponents
          open={modalOpen}
          close={closeModal}
          header="주소 찾기"
        ></ModalComponents>
      </React.Fragment>
    </>
  );
};

export default ModalContainer;
