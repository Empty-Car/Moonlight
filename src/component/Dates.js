import { useState } from "react";
import DiaryModal from "./DiaryModal";
import styled, { css } from "styled-components";

const Form = styled.div`
  width: calc(100% / 7);
  padding-top: 5px;
  text-align: left;

  /* border-left: 1px solid #c4c4c4; */
  /* border-right: 1px solid #c4c4c4; */
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
`;

const TodayStyle = styled.div`
  background-color: #f8a6a6;
  width: 70%;
  height: 15px;
  border-radius: 5px;
`;

const DateBox = styled.div``;

const DateStyle = styled.span`
  padding: 10px 1px 1px 10px;
`;

const Dates = ({ date, month, year, isToday }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <Form onDoubleClick={openModal}>
      <DateBox>
        <DateStyle>
          {date}
          {isToday ? <TodayStyle /> : null}
          {/* {idx === todayIdx ? console.log("SUCC") : console.log("FAIL")} */}
        </DateStyle>
      </DateBox>

      <div>
        <DiaryModal isModal={isModal} closeModal={closeModal}></DiaryModal>
      </div>
    </Form>
  );
};

export default Dates;
