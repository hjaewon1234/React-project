import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const ModalComponents = (props) => {
  const { open, close, header } = props;

  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };
  return (
    <>
      <ModalCompoStyled>
        <div className={open ? "openModal modal" : "modal"}>
          {open ? (
            <section>
              <header>
                {header}
                <button className="close" onClick={close}>
                  &times;
                </button>
              </header>
              <main>
                {props.children}
                <DaumPostcode
                  autoClose
                  onComplete={complete}
                  onClose={close}
                ></DaumPostcode>
              </main>
              <footer>
                <button className="close" onClick={close}>
                  닫기
                </button>
              </footer>
            </section>
          ) : (
            <>1</>
          )}
        </div>
      </ModalCompoStyled>
    </>
  );
};

export default ModalComponents;

const ModalCompoStyled = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  .modal > section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }
  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  .modal > section > footer {
    padding: 12px 16px;
    text-align: right;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal > section > footer button {
    width: 45%;
    padding: 6px 12px;
    color: #fff;
    background-color: rgb(240, 165, 0);
    border-radius: 5px;
    font-size: 16px;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
