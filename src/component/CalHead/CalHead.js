import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import * as S from "./styles"

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalHead = ({ year, month, goToday, setMonth, setYear }) => {
  const onNextMonth = () => {
    setMonth((month) => month + 1);

    if (month >= 12) {
      setMonth(1);
      setYear((year) => year + 1);
    }
  };

  const onPrevMonth = () => {
    setMonth((month) => month - 1);

    if (month <= 1) {
      setMonth(12);
      setYear((year) => year - 1);
    }
  };

  return (
    <S.Form>
      <S.Nav>
        <S.Year>
          {year}년 {month}월
        </S.Year>
        <S.ButtonBox>
          <MdKeyboardArrowLeft onClick={onPrevMonth} size={32} />
          <S.TodayButton onClick={() => goToday()}>Today</S.TodayButton>
          <MdKeyboardArrowRight onClick={onNextMonth} size={32} />
        </S.ButtonBox>
      </S.Nav>
      <S.Days>
        {DAY.map((day, idx) => {
          return <S.Day key={idx}>{day}</S.Day>;
        })}
      </S.Days>
    </S.Form>
  );
};

export default CalHead;
