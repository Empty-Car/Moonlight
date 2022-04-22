import React, { useEffect, useState } from "react";

const padNumber = (num) => {
  return String(num).padStart(2, "0");
};

const Timer = ({ m, s }) => {
  const [min, setMin] = useState(parseInt(m));
  const [sec, setSec] = useState(parseInt(s));

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
    <div>
      {padNumber(min)}:{padNumber(sec)}
    </div>
  );
};

export default Timer;
