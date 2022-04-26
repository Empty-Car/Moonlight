import styled from "styled-components";
import Dates from "./Dates";

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 70vh;
`;

const CalBody = ({ totalDate, year, month, today }) => {
  const todayIdx = totalDate.indexOf(today);

  return (
    <Form>
      {totalDate.map((date, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            date={date}
            month={month}
            year={year}
            todayIdx={todayIdx}
          ></Dates>
        );
      })}
    </Form>
  );
};

export default CalBody;
