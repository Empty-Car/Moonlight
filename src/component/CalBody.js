import styled from "styled-components";
import Dates from "./Dates";

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CalBody = ({ totalDate, today, year, month }) => {
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;

  return (
    <Form>
      {totalDate.map((date, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            date={date}
            findToday={findToday === idx && month === getMonth && findToday}
            month={month}
            year={year}
          ></Dates>
        );
      })}
    </Form>
  );
};

export default CalBody;
