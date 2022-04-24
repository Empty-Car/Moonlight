import gsap from "gsap";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { useAudio } from "../hooks/useAudio";
import sound from "../breathChange.mp3";

const MeditationBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlusMinusButtonBox = styled.div`
  margin-top: 50px;
`;

const PlusMinusButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  flex-wrap: wrap;
  color: ${(props) => props.color};
  background-color: white;
  border: none;
  outline: none;
  font-size: 40px;
`;
const ActiveButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;

  width: 540px;
  height: 60px;
  font-size: 24px;

  margin-top: 200px;
`;

const LightLetter = styled.div`
  color: #c4c4c4;
  height: 30px;
  font-size: 20px;
`;

const DisplayMeditationTime = styled.div`
  width: 216;
  height: 121;
  font-size: 100px;
`;

const NarrationText = styled.div`
  width: 600px;
  height: 50px;
  font-size: 40px;
`;

const BreathCircle = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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

  const term = 500000;
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
      breath(1.5, 1.1, ".ani");
      // breath(1.8, 0.9, ".ani1");
      // breath(1.6, 0.7, ".ani2");
    }, term);
  }, [isStart]);

  return (
    <MeditationBox>
      {!isStart && (
        <>
          <DisplayMeditationTime>{time}:00</DisplayMeditationTime>
          <LightLetter>명상 시간은 최소 1분에서 최대 10분입니다.</LightLetter>
          <PlusMinusButtonBox>
            <PlusMinusButton
              onClick={time >= 10 ? undefined : onClickPlus}
              color="#858585"
            >
              +1:00
            </PlusMinusButton>
            <PlusMinusButton
              onClick={time <= 1 ? undefined : onClickMinus}
              color="#F8A6A6"
            >
              -1:00
            </PlusMinusButton>
          </PlusMinusButtonBox>
          <ActiveButton onClick={onClickStart} backgroundColor="#F8A6A6">
            명상 시작
          </ActiveButton>
        </>
      )}
      {isStart && (
        <>
          {narration ? (
            <>
              <Timer m="0" s={term / 1000}></Timer>
              <NarrationText>몸의 긴장을 해소시켜봐요! </NarrationText>
              <LightLetter>
                원이 커질 때 숨을 들이마시고, 작아질 때 숨을 내쉬어봐요
              </LightLetter>
            </>
          ) : (
            <div>
              <Timer m={time} s="0"></Timer>
              <BreathCircle
                className="ani"
                color="#FFF0F0"
                width="300px"
                height="300px"
              ></BreathCircle>
              <BreathCircle
                color="#FBC4C4"
                width="250px"
                height="250px"
              ></BreathCircle>
              <BreathCircle
                color="#F8A6A6"
                width="200px"
                height="200px"
              ></BreathCircle>
            </div>
          )}
          <ActiveButton onClick={onClickStop}>다음에 명상하기</ActiveButton>
        </>
      )}
    </MeditationBox>
  );
};

export default Meditation;
