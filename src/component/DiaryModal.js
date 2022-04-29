import { useState, useEffect } from "react";
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

const Bounding = styled.div`
  height: 35px;
  width: 3px;
  background-color: black;

  margin-left: 20px;
`;

const MoodSelectBox = styled.div`
  height: 30px;
  width: 50px;
  display: flex;
`;

const DiaryInput = styled.input`
  outline: none;
  width: 80%;
  resize: none;
  border: none;
  height: 60px;
`;

const SaveButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;

  display: flex;
  justify-content: flex-end;
`;

export const dateToString = (date) => {
  const d = new Date(date);

  return `${d.getFullYear()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
};

const DiaryModal = ({ isModal, closeModal, year, month, date, nameData }) => {
  const [isMoods, setIsMoods] = useState(false);
  const { title, mood, diary } = nameData || { title: "", mood: "", diary: "" };
  const [colorMood, setColorMood] = useState("gray");

  const [name, setName] = useState({
    title: title,
    mood: mood,
    diary: diary,
  });

  useEffect(() => {
    setName({
      mood: nameData.mood,
      title: nameData.title,
      diary: nameData.diary,
    });
  }, [nameData]);

  const onMoodChange = (e) => {
    const color = e.target.name;
    setColorMood(color);
    setIsMoods(false);
    setName({ ...name, mood: color });
  };

  const onDiarySave = async () => {
    const res = await Instance.post("/v1/todo", {
      name: JSON.stringify(name),
      date: dateToString(`${year}-${month}-${date}`),
    });
  };

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
                <TitleInput
                  placeholder="제목 입력"
                  onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="title"
                  value={name.title}
                ></TitleInput>
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
                  backgroundColor={colorMood}
                  selectedMood={true}
                ></MoodButton>
                {isMoods && (
                  <MoodSelectBox>
                    <div>
                      <Bounding />
                    </div>
                    <MoodButton
                      onClick={onMoodChange}
                      backgroundColor="black"
                      name="black"
                    >
                      선택안함
                    </MoodButton>
                    <MoodButton
                      onClick={onMoodChange}
                      backgroundColor="#BDBDBD"
                      name="#BDBDBD"
                    >
                      최악
                    </MoodButton>
                    <MoodButton
                      onClick={onMoodChange}
                      backgroundColor="#D3CCA4"
                      name="#D3CCA4"
                    >
                      별로
                    </MoodButton>
                    <MoodButton
                      onClick={onMoodChange}
                      backgroundColor="#FDD692"
                      name="#FDD692"
                    >
                      보통
                    </MoodButton>
                    <MoodButton
                      onClick={onMoodChange}
                      backgroundColor="#F8A6A6"
                      name="#F8A6A6"
                    >
                      좋음
                    </MoodButton>
                    <MoodButton
                      onClick={onMoodChange}
                      backgroundColor="#FF7473"
                      name="#FF7473"
                    >
                      최고
                    </MoodButton>
                  </MoodSelectBox>
                )}
              </SelectMood>
              <div>
                <DiaryInput
                  placeholder="오늘 하루를 정리해봐요"
                  onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="diary"
                  value={name.diary}
                ></DiaryInput>
              </div>
            </TextBox>
            <SaveButton onClick={onDiarySave}>저장하기</SaveButton>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
};

export default DiaryModal;
