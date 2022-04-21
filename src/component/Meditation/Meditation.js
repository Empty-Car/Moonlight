import gsap from "gsap";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BreathCircle = styled.div`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const breath = (max, min, name) => {
  const intro = () => {
    gsap.to(name, { scale: max, duration: 4.3, onComplete: outro });
  };

  const outro = () => {
    gsap.to(name, { scale: min, duration: 4.7, onComplete: intro });
  };

  intro();
};

const Meditation = () => {
  const [time, setTime] = useState(1);
  const [isStart, setIsStart] = useState(false);

  const onClickPlus = () => {
    setTime(time + 1);
  };

  const onClickMinus = () => {
    setTime(time - 1);
  };

  const onClickStart = () => {
    setIsStart(true);
  };

  const onClickStop = () => {
    setIsStart(false);
  };

  useEffect(() => {
    breath(2, 1.1, ".ani");
    breath(1.8, 0.9, ".ani1");
    breath(1.6, 0.7, ".ani2");
  }, [isStart]);

  return (
    <>
      <div>{time}</div>
      <button onClick={time >= 10 ? undefined : onClickPlus}>+1</button>
      <button onClick={time <= 1 ? undefined : onClickMinus}>-1</button>

      <button onClick={onClickStart}>명상 시작</button>
      <button onClick={onClickStop}>명상 그만할게..</button>
      {isStart && (
        <>
          <BreathCircle className="ani" color="#EEDCC6"></BreathCircle>
          <BreathCircle className="ani1" color="#CAAE33"></BreathCircle>
          <BreathCircle className="ani2" color="#5B6A27"></BreathCircle>
        </>
      )}
    </>
  );
};

export default Meditation;
