import ModalComponents from "./Component";
import styled from "styled-components";
import React, { useState } from "react";

const ModalContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <React.Fragment>
        {/* <button onClick={openModal}>주소 찾기</button> */}
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
