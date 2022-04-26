import { useEffect, useState } from "react";
import styled from "styled-components";
import CalBody from "./CalBody";
import CalHead from "./CalHead";

const Calendar = styled.div`
  margin-top: 100px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const EmotionDiary = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);
  const [today, setToday] = useState(0);

  const changeDate = (month) => {
    let prevMonthLastDate = new Date(YEAR, month - 1, 0).getDate();
    let prevMonthLastDay = new Date(YEAR, month - 1, 0).getDay();

    const thisMonthLastDate = new Date(YEAR, month, 0).getDate();
    const thisMonthLastDay = new Date(YEAR, month, 0).getDay();

    let prevMonthDateArr = [];
    if (prevMonthLastDay !== 6) {
      for (let i = 0; i < prevMonthLastDay + 1; i++) {
        prevMonthDateArr.unshift(prevMonthLastDate - i);
      }
    }

    let nextMonthDateArr = [];
    if (thisMonthLastDay !== 6) {
      for (let i = 1; i < 7 - thisMonthLastDay; i++) {
        nextMonthDateArr.push(i);
      }
    }

    let thisMonthDateArr = [];
    thisMonthDateArr = [...Array(thisMonthLastDate + 1).keys()].slice(1);

    return prevMonthDateArr.concat(thisMonthDateArr, nextMonthDateArr);
  };

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  const goToToday = () => {
    let goDate = new Date().getDate();
    let goMonth = new Date().getMonth() + 1;
    let goYear = new Date().getFullYear();
    setMonth(goMonth);
    setToday(goDate);
    setYear(goYear);
  };

  return (
    <Calendar>
      <CalHead
        year={year}
        month={month}
        goToday={goToToday}
        setMonth={setMonth}
        setYear={setYear}
      ></CalHead>
      <CalBody
        totalDate={totalDate}
        today={today}
        year={year}
        month={month}
      ></CalBody>
    </Calendar>
  );
};

export default EmotionDiary;
