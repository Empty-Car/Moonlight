import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Instance } from "../axios";

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

const MoodButton = styled.button`
  margin-left: 20px;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.backgroundColor};

  border: none;
  outline: none;
`;

const MoodSelectBox = styled.div`
  height: 30px;
  width: 50px;
  display: flex;
`;

const DiaryBox = styled.div`
  width: 80%;
  overflow-y: auto;
`;

const DiaryModal = ({ isModal, closeModal, year, month, date }) => {
  const [isMoods, setIsMoods] = useState(false);
  const [mood, setMood] = useState("gray");

  const modalClose = () => {
    closeModal();
  };

  const onMoodChange = (color) => {
    setMood(color);
    setIsMoods(false);
  };

  const onDiarySave = async () => {
    const res = await Instance.post("/v1/todo", {
      name: "",
      date: "",
    });
  };

  return (
    <div>
      {isModal ? (
        <Background>
          <ModalContainer>
            <CloseButton>
              <MdClose onClick={modalClose} size={35}></MdClose>
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
                  onClick={(e) => {
                    setIsMoods(true);
                  }}
                  backgroundColor={mood}
                ></MoodButton>
                {isMoods && (
                  <MoodSelectBox>
                    <MoodButton
                      onClick={() => onMoodChange("black")}
                      backgroundColor="black"
                    >
                      선택안함
                    </MoodButton>
                    <MoodButton
                      onClick={() => onMoodChange("#BDBDBD")}
                      backgroundColor="#BDBDBD"
                    >
                      최악
                    </MoodButton>
                    <MoodButton
                      onClick={() => onMoodChange("#D3CCA4")}
                      backgroundColor="#D3CCA4"
                    >
                      별로
                    </MoodButton>
                    <MoodButton
                      onClick={() => onMoodChange("#FDD692")}
                      backgroundColor="#FDD692"
                    >
                      보통
                    </MoodButton>
                    <MoodButton
                      onClick={() => onMoodChange("#F8A6A6")}
                      backgroundColor="#F8A6A6"
                    >
                      좋음
                    </MoodButton>
                    <MoodButton
                      onClick={() => onMoodChange("#FF7473")}
                      backgroundColor="#FF7473"
                    >
                      최고
                    </MoodButton>
                    {/* <div>dddddddddddddddddddddd</div> */}
                  </MoodSelectBox>
                )}
              </SelectMood>
              <DiaryBox>
                <input placeholder="오늘 하루를 정리해봐요"></input>
              </DiaryBox>
            </TextBox>
            <button onClick={onDiarySave}>Submit</button>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
};

export default DiaryModal;
