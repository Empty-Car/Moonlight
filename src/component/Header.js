import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 60px;
  padding: 1rem;
  background: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 20px gray;

  z-index: 1;
`;

const LogoStyle = styled.img`
  width: 109px;
  height: 41px;
`;

const NavigateButton = styled.button`
  border: none;
  outline: none;
  background-color: white;
  font-size: 15px;
  font-weight: bold;

  margin-right: 40px;

  ${(props) =>
    props.isClicked &&
    css`
      border-bottom: 3px solid #F8A6A6;
    `}
`;

const Header = () => {
  const navigate = useNavigate();
  const [meditationClicked, setMeditationClicked] = useState(false);
  const [diaryClicked, setDiaryClicked] = useState(false);
  const [centerClicked, setCenterClicked] = useState(false);

  const onClickMain = () => {
    navigate("/");
  };

  const onClickMeditation = () => {
    navigate("meditation");
    setMeditationClicked(true);
    setDiaryClicked(false);
    setCenterClicked(false);
  };

  const onClickRecordEmotion = () => {
    navigate("record-emotion");
    setDiaryClicked(true);
    setMeditationClicked(false);
    setCenterClicked(false);
  };

  const onClickReminisce = () => {
    navigate("reminisce");
    setCenterClicked(true);
    setDiaryClicked(false);
    setMeditationClicked(false);
  };

  return (
    <HeaderBox>
      <LogoStyle src="img/logo.png" onClick={onClickMain}></LogoStyle>
      <div>
        <NavigateButton
          onClick={onClickMeditation}
          isClicked={meditationClicked}
        >
          명상
        </NavigateButton>
        <NavigateButton onClick={onClickRecordEmotion} isClicked={diaryClicked}>
          감정 일기
        </NavigateButton>
        <NavigateButton onClick={onClickReminisce} isClicked={centerClicked}>
          정신건강복지센터
        </NavigateButton>
      </div>
    </HeaderBox>
  );
};

export default Header;
