import { useState } from "react";
import DiaryModal from "./DiaryModal";
import styled from "styled-components";

const Form = styled.li`
  position: relative;
  width: calc(100% / 7);
  text-align: right;
`;

const DateNum = styled.div``;

const TodayStyle = styled.span``;
// const Lists = styled.div``
// const List  =styled.span``

const Dates = ({ lastDate, firstDate, date, findToday, month, year, idx }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <Form onDoubleClick={openModal}>
      <DateNum
        idx={idx}
        lastDate={lastDate}
        firstDate={firstDate}
        findToday={findToday}
      >
        <TodayStyle findToday={findToday}>{date}</TodayStyle>
      </DateNum>

      <div>
        <DiaryModal isModal={isModal} closeModal={closeModal}></DiaryModal>
      </div>
    </Form>
  );
};

export default Dates;
