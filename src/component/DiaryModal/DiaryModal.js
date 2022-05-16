import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Instance } from "../../axios";
import * as S from "./styles";
import MoodButton from "../MoodButton/MoodButton";

export const dateToString = (date) => {
  const d = new Date(date);

  return `${d.getFullYear()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
};

const buttonColors = [
  { black: "선택안함" },
  { "#BDBDBD": "최악" },
  { "#D3CCA4": "별로" },
  { "#FDD692": "보통" },
  { "#F8A6A6": "좋음" },
  { "#FF7473": "최고" },
];

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
        <S.Background>
          <S.ModalContainer>
            <S.CloseButton>
              <MdClose onClick={closeModal} size={35}></MdClose>
            </S.CloseButton>
            <S.TextBox>
              <div>
                <S.TitleInput
                  placeholder="제목 입력"
                  onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="title"
                  value={name.title}
                ></S.TitleInput>
              </div>
              <div>
                <S.DisplayDate>
                  {year}년 {month}월 {date}일
                </S.DisplayDate>
              </div>
              <S.SelectMood>
                <div>오늘의 기분은 어떤 색이었나요? :</div>

                <MoodButton
                  onClick={() => setIsMoods(true)}
                  backgroundColor={colorMood}
                  selectedMood={true}
                ></MoodButton>
                {isMoods && (
                  <S.MoodSelectBox>
                    <div>
                      <S.Bounding />
                    </div>
                    {buttonColors.map((ele) => (
                      <MoodButton
                        backgroundColor={ele.key}
                        name={ele.key}
                        text={ele.value}
                        onMoodChange={onMoodChange}
                      />
                    ))}
                  </S.MoodSelectBox>
                )}
              </S.SelectMood>
              <div>
                <S.DiaryInput
                  placeholder="오늘 하루를 정리해봐요"
                  onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="diary"
                  value={name.diary}
                ></S.DiaryInput>
              </div>
            </S.TextBox>
            <S.SaveButton onClick={onDiarySave}>저장하기</S.SaveButton>
          </S.ModalContainer>
        </S.Background>
      ) : null}
    </div>
  );
};

export default DiaryModal;
