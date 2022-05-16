import React from "react";
import styled from "styled-components";
import Signup from "../Signup/Signup";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 500px;
  height: 600px;
  padding: 16px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;

const SignupModal = ({ isModal, closeModal }) => {
  return (
    <div>
      {isModal ? (
        <Background>
          <ModalContainer>
            <div>
              <MdClose onClick={closeModal}></MdClose>
            </div>
            <Signup closeModal={closeModal}></Signup>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
};

export default React.memo(SignupModal);
