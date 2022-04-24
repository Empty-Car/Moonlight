import { useNavigate } from "react-router-dom";

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
    <>
      <div>
        <button onClick={onClickMeditation}>명상하러 드가자~</button>
      </div>
      <div>
        <button onClick={onClickRecordEmotion}>감정을 기록하러 드가자~</button>
      </div>
      <div>
        <button onClick={onClickReminisce}>회상하러 드가자~</button>
      </div>
    </>
  );
};

export default Main;
