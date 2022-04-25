import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const MainBox = styled.div`
  padding-top: 100px;
`

const Main = () => {
  const navigate = useNavigate();

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
    <MainBox>
      <div>
        <button onClick={onClickMeditation}>명상하러 드가자~</button>
      </div>
      <div>
        <button onClick={onClickRecordEmotion}>감정을 기록하러 드가자~</button>
      </div>
      <div>
        <button onClick={onClickReminisce}>회상하러 드가자~</button>
      </div>
    </MainBox>
  );
};

export default Main;
