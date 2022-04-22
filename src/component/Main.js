import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const onClickMeditation = () => {
    navigate("meditation");
  };

  return (
    <>
      <button onClick={onClickMeditation}>명상하러 드가자~</button>
    </>
  );
};

export default Main;
