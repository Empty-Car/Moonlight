import { useState } from "react";
import styled, { css } from "styled-components";
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
`;

const CloseButton = styled.div`
  text-align: right;
`;

const TextBox = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`;

const TitleInput = styled.input`
  outline: none;
  border: none;
  width: 80%;
  font-size: 40px;
`;

const DisplayDate = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const SelectMood = styled.div`
  margin-top: 10px;
  font-weight: 600px;
  font-size: 15px;

  display: flex;
`;

const MoodButton = styled.div`
  margin-left: 20px;
  width: 20px;
  height: 20px;
  border: 2px solid black;
`;

const DiaryModal = ({ isModal, closeModal, year, month, date }) => {
  const [isMoods, setIsMoods] = useState(false);

  return (
    <div>
      {isModal ? (
        <Background>
          <ModalContainer>
            <CloseButton>
              <MdClose onClick={closeModal} size={35}></MdClose>
            </CloseButton>
            <TextBox>
              <div>
                <TitleInput placeholder="제목 입력"></TitleInput>
              </div>
              <div>
                <DisplayDate>
                  {year}년 {month}월 {date}일
                </DisplayDate>
              </div>
              <SelectMood>
                <div>오늘의 기분은 어떤 색이었나요? :</div>
                
                <MoodButton
                  onClick={() => {
                    setIsMoods(true);
                  }}
                ></MoodButton>
              </SelectMood>
            </TextBox>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
};

export default DiaryModal;
