import styled from "styled-components";
import Dates from "./Dates";

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 60%;
`;

const CalBody = ({ totalDate, year, month, today }) => {
  const todayIdx = totalDate.indexOf(today);
  const todayMonth = new Date().getMonth() + 1;
  const todayYear = new Date().getFullYear();

  return (
    <Form>
      {totalDate.map((date, idx) => {
        return (
          <Dates
            key={idx}
            date={date}
            month={month}
            year={year}
            isToday={
              todayIdx === idx && month === todayMonth && todayYear === year
            }
          ></Dates>
        );
      })}
    </Form>
  );
};

export default CalBody;
