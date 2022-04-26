import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 900px;
  height: 600px;
  padding: 16px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;

const DiaryModal = ({ isModal, closeModal }) => {
  return (
    <div>
      {isModal ? (
        <Background>
          <ModalContainer>
            <div>
              <MdClose onClick={closeModal}></MdClose>
            </div>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
};

export default DiaryModal;
