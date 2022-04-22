import gsap from "gsap";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { useAudio } from "../hooks/useAudio";
import sound from "../breathChange.mp3";

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

const minuteToMillisec = (time) => {
  return time * 60000;
};

const Meditation = () => {
  const [time, setTime] = useState(1);
  const [isStart, setIsStart] = useState(false);
  const [narration, setNarration] = useState(true);

  const term = 5000;
  const [playing, setPlaying] = useAudio(sound);

  const onClickPlus = () => {
    setTime(time + 1);
  };

  const onClickMinus = () => {
    setTime(time - 1);
  };

  const onClickStart = () => {
    setIsStart(true);

    setTimeout(() => {
      onClickStop();
    }, minuteToMillisec(time) + term + 3000);
  };

  const onClickStop = () => {
    setIsStart(false);
    gsap.killTweensOf("*");
    setNarration(true);
  };

  const breath = (max, min, name) => {
    const intro = () => {
      gsap.to(name, {
        scale: max,
        duration: 4.3,
        onComplete: () => {
          setPlaying();
          outro();
        },
      });
    };

    const outro = () => {
      gsap.to(name, {
        scale: min,
        duration: 4.7,
        onComplete: () => {
          setPlaying();
          intro();
        },
      });
    };

    intro();
  };

  useEffect(() => {
    if (!isStart) return;
    setTimeout(() => {
      setNarration(false);
      breath(2, 1.1, ".ani");
      breath(1.8, 0.9, ".ani1");
      breath(1.6, 0.7, ".ani2");
    }, term);
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
          {narration ? (
            <>
              <div>몸의 긴장을 해소시켜봐요! </div>
              <div>원이 커질 때 숨을 들이마시고, 작아질 때 숨을 내쉬어봐요</div>
            </>
          ) : (
            <Timer m={time} s="0"></Timer>
          )}

          <button onClick={onClickStop}>명상 그만할게..</button>
          <BreathCircle className="ani" color="#EEDCC6"></BreathCircle>
          <BreathCircle className="ani1" color="#CAAE33"></BreathCircle>
          <BreathCircle className="ani2" color="#5B6A27"></BreathCircle>
        </>
      )}
    </>
  );
};

export default Meditation;
