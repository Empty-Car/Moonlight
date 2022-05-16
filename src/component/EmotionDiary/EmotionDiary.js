import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CalBody from "../CalBody/CalBody";
import CalHead from "../CalHead/CalHead";
import { useNavigate } from "react-router-dom";

const Calendar = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmotionDiary = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);
  const [today, setToday] = useState(new Date().getDate());

  const [lenPrevMonth, setLenPrevMonth] = useState(0);
  const [lenThisMonth, setLenThisMonth] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/");
    }
  }, []);

  const changeDate = useCallback((month) => {
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

    setLenPrevMonth(prevMonthDateArr.length);
    setLenThisMonth(thisMonthDateArr.length);

    return prevMonthDateArr.concat(thisMonthDateArr, nextMonthDateArr);
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  const goToToday = useCallback(() => {
    let goDate = new Date().getDate();
    let goMonth = new Date().getMonth() + 1;
    let goYear = new Date().getFullYear();
    setToday(goDate);
    setMonth(goMonth);
    setYear(goYear);
  }, []);

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
        year={year}
        month={month}
        today={today}
        prevLength={lenPrevMonth}
        thisLength={lenThisMonth}
      ></CalBody>
    </Calendar>
  );
};

export default EmotionDiary;
