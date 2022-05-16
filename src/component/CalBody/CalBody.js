import Dates from "../Dates/Dates";
import * as S from "./styles"

const CalBody = ({ totalDate, year, month, today, prevLength, thisLength }) => {
  const todayMonth = new Date().getMonth() + 1;
  const todayYear = new Date().getFullYear();

  const copyTotalDate = [...totalDate];
  for (let i = 0; i < prevLength; i++) {
    copyTotalDate.shift();
  }

  const todayIdx = copyTotalDate.indexOf(today) + prevLength;
  const nextMonthIdx = prevLength + thisLength;

  return (
    <S.Form>
      {totalDate.map((date, idx) => {
        return (
          <Dates
            key={idx}
            date={date}
            month={month}
            year={year}
            isToday={
              todayIdx === idx &&
              todayMonth === month &&
              todayYear === year &&
              todayIdx > prevLength
            }
            isPrev={idx < prevLength}
            isNext={idx >= nextMonthIdx}
          ></Dates>
        );
      })}
    </S.Form>
  );
};

export default CalBody;
