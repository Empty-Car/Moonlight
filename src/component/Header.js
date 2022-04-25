import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Header = () => {
  const navigate = useNavigate();

  const onClickMain = () => {
    navigate("/");
  };

  const onClickMeditation = () => {
    navigate("meditation");
  };

  const onClickReminisce = () => {
    navigate("reminisce");
  };

  const onClickRecordEmotion = () => {
    navigate("record-emotion");
  };

  return (
    <HeaderBox>
      <LogoStyle src="img/logo.png" onClick={onClickMain}></LogoStyle>
      <div>
        <button onClick={onClickMeditation}>명상하러 드가자~</button>
      </div>
      <div>
        <button onClick={onClickRecordEmotion}>감정을 기록하러 드가자~</button>
      </div>
      <div>
        <button onClick={onClickReminisce}>회상하러 드가자~</button>
      </div>
    </HeaderBox>
  );
};

export default Header;
