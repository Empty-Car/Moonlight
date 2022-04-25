import gsap from "gsap";
import React, { useEffect, useState, useCallback } from "react";
import styled, { css } from "styled-components";
import Timer from "./Timer";
import { useAudio } from "../hooks/useAudio";
import sound from "../breathChange.mp3";

const MeditationBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

const PlusMinusButtonBox = styled.div`
  margin-top: 50px;
`;

const PlusMinusButton = styled.button`
  cursor: pointer;

  display: inline-block;
  vertical-align: middle;
  flex-wrap: wrap;
  color: ${(props) => props.color};
  background-color: white;
  border: none;
  outline: none;
  font-size: 40px;
  margin-left: 30px;
  margin-right: 30px;
`;

const ActiveButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: bold;

  width: 540px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;

  margin-top: 150px;

  ${(props) =>
    props.isStart &&
    css`
      position: absolute;
      left: 50%;
      bottom: 100px;
      transform: translate(-50%, 50%);

      & .hovered {
        display: none;
      }

      &:hover {
        & .not-hover {
          display: none;
        }

        & .hovered {
          display: unset;
        }
      }
    `}
`;

const LightLetter = styled.div`
  color: #c4c4c4;
  height: 30px;
  font-size: 20px;
  text-align: center;

  ${(props) =>
    props.narration &&
    css`
      margin-top: 30px;
    `}
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
  text-align: center;
  font-weight: 600px;
`;

const BreathCircle = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  position: absolute;
  top: 40%;
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

  const [meditationTimeout, setMeditationTimeout] = useState(null);
  const [narrationTimeout, setNarrationTimeout] = useState(null);

  const term = 5000;
  const [playing, setPlaying] = useAudio(sound);

  const onClickPlus = useCallback ( () => {
    
    setTime(time + 1);
  }, [time]);

  const onClickMinus = useCallback(() => {
    setTime(time - 1);
  }, [time]) 
    

  const onClickStart = () => {
    setIsStart(true);

    setMeditationTimeout(
      setTimeout(() => {
        onClickStop();
      }, minuteToMillisec(time) + term + 3000)
    );
  };

  const onClickStop = () => {
    setIsStart(false);
    gsap.killTweensOf("*");
    setNarration(true);
    clearTimeout(narrationTimeout);
    clearTimeout(meditationTimeout);
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

    setNarrationTimeout(
      setTimeout(() => {
        setNarration(false);

        setTimeout(() => {
          breath(1.6, 1.1, ".ani");
          breath(1.4, 0.9, ".ani1");
          breath(1.2, 0.7, ".ani2");
        }, 10);
      }, term)
    );
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
              color="#F8A6A6"
            >
              +1:00
            </PlusMinusButton>
            <PlusMinusButton
              onClick={time <= 1 ? undefined : onClickMinus}
              color="#858585"
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
              <Timer m="0" s={term / 1000} narration={narration}></Timer>
              <NarrationText>몸의 긴장을 해소시켜봐요! </NarrationText>
              <LightLetter narration={narration}>
                원이 커질 때 숨을 들이마시고, 작아질 때 숨을 내쉬어봐요
              </LightLetter>
              <ActiveButton onClick={onClickStop} backgroundColor="#c4c4c4">
                다음에 명상하기
              </ActiveButton>
            </>
          ) : (
            <div>
              <BreathCircle
                className="ani"
                color="#FFF0F0"
                width="300px"
                height="300px"
              ></BreathCircle>
              <BreathCircle
                className="ani1"
                color="#FBC4C4"
                width="250px"
                height="250px"
              ></BreathCircle>
              <BreathCircle
                className="ani2"
                color="#F8A6A6"
                width="200px"
                height="200px"
              ></BreathCircle>
              <ActiveButton
                onClick={onClickStop}
                backgroundColor="#c4c4c4"
                isStart={isStart}
                narration={narration}
              >
                <span className="not-hover">
                  <Timer m={time} s="0" narration={narration}></Timer>
                </span>
                <span className="hovered">명상 그만하기</span>
              </ActiveButton>
            </div>
          )}
        </>
      )}
    </MeditationBox>
  );
};

export default Meditation;
