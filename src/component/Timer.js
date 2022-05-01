import React, { useEffect, useCallback, useState } from "react";
import styled, { css } from "styled-components";

const TimerBox = styled.div`
  font-size: 100px;
  font-weight: 600px;
  margin-bottom: 40px;

  ${(props) =>
    !props.narration &&
    css`
      font-size: 30px;
      color: white;
      margin-bottom: 0px;
    `}
`;

const Timer = ({ m, s, narration }) => {
  const [min, setMin] = useState(parseInt(m));
  const [sec, setSec] = useState(parseInt(s));

  const padNumber = useCallback((num) => {
    return String(num).padStart(2, "0");
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(sec) > 0) {
        setSec(parseInt(sec) - 1);
      }
      if (parseInt(sec) === 0) {
        if (parseInt(min) === 0) {
          clearInterval(countdown);
        } else {
          setMin(parseInt(min) - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [min, sec]);

  return (
    <TimerBox narration={narration}>
      {narration ? (
        <div>{sec}</div>
      ) : (
        <div>
          {padNumber(min)}:{padNumber(sec)}
        </div>
      )}
    </TimerBox>
  );
};

export default React.memo(Timer);
