import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

const Nav = styled.section`
  display: flex;
`;

const Year = styled.div`
  /* text-align: left; */
`;

const ButtonBox = styled.div`
  cursor: pointer;
`;

const Button = styled.button``;

const Days = styled.div`
  display: flex;
`;

const Day = styled.div`
  width: calc(100% / 7);
  text-align: center;

  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
`;

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
    <Form>
      <Nav>
        <Year>
          {year}년 {month}월
        </Year>
        <ButtonBox>
          <MdKeyboardArrowLeft onClick={onPrevMonth} />
          <Button onClick={() => goToday()}>Today</Button>
          <MdKeyboardArrowRight onClick={onNextMonth} />
        </ButtonBox>
      </Nav>
      <Days>
        {DAY.map((day, idx) => {
          return <Day key={idx}>{day}</Day>;
        })}
      </Days>
    </Form>
  );
};

export default CalHead;
