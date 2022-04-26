import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Form = styled.section``;

const Nav = styled.section``;

const Year = styled.div``;

const ButtonBox = styled.div``;

const Button = styled.button``;

const Days = styled.div``;

const Day = styled.div``;

const DAY = ["일", "월", "화", "수", "목", "금", "토"];

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
