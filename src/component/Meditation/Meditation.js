import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
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

const minuteToMillisec = (time) => {
  return time * 60000;
};

const minuteToSec = (time) => {
  return time * 60;
};

const padNumber = (num) => {
  return String(num).padStart(2, "0");
};

const Meditation = () => {
  const [time, setTime] = useState(1);
  console.log(time);
  const [isStart, setIsStart] = useState(false);

  let initialTime = useRef(minuteToSec(time));
  console.log(initialTime);
  const interval = useRef(null);
  const [min, setMin] = useState(padNumber(time));
  const [sec, setSec] = useState(padNumber("0"));

  useEffect(() => {
    if (!isStart) return;

    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60));
      setMin(padNumber(parseInt(initialTime.current / 60)));
    }, 1000);

    return () => clearInterval(interval.current);
  }, [isStart]);

  const onClickPlus = () => {
    setTime(time + 1);
  };

  const onClickMinus = () => {
    setTime(time - 1);
  };

  const onClickStart = () => {
    setIsStart(true);

    initialTime.current *= 2;

    setTimeout(() => {
      onClickStop();
    }, minuteToMillisec(time));
  };

  const onClickStop = () => {
    setIsStart(false);
    gsap.killTweensOf("*");
  };

  useEffect(() => {
    if (!isStart) return;

    breath(2, 1.1, ".ani");
    breath(1.8, 0.9, ".ani1");
    breath(1.6, 0.7, ".ani2");
  }, [isStart]);

  return (
    <>
      {!isStart && (
        <>
          <div>{time}분 동안 명상을 하시려구여~? ^^</div>
          <button onClick={time >= 10 ? undefined : onClickPlus}>+1min</button>
          <button onClick={time <= 1 ? undefined : onClickMinus}>-1min</button>
          <button onClick={onClickStart}>명상 시작</button>
        </>
      )}
      {isStart && (
        <>
          <button onClick={onClickStop}>명상 그만할게..</button>
          <div>
            {min}:{sec}
          </div>
          <BreathCircle className="ani" color="#EEDCC6"></BreathCircle>
          <BreathCircle className="ani1" color="#CAAE33"></BreathCircle>
          <BreathCircle className="ani2" color="#5B6A27"></BreathCircle>
        </>
      )}
    </>
  );
};

export default Meditation;
