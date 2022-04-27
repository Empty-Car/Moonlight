import { useState, useEffect } from "react";
import DiaryModal from "./DiaryModal";
import styled, { css } from "styled-components";

const Form = styled.div`
  width: calc(100% / 7);
  height: 100px;
  padding-top: 5px;
  text-align: left;
  font-size: 20;
  font-weight: 600px;

  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  box-sizing: border-box;
`;

const TodayStyle = styled.div`
  background-color: #f8a6a6;
  width: 70%;
  height: 20px;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 7px;
`;

const DateStyle = styled.span`
  padding: 10px 1px 1px 10px;
  font-weight: bold;

  ${(props) =>
    props.isPrev &&
    css`
      color: #c4c4c4;
    `}

  ${(props) =>
    props.isNext &&
    css`
      color: #c4c4c4;
    `}
`;

const Dates = ({ idx, date, month, year, isToday, isPrev, isNext }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <Form onDoubleClick={openModal}>
      <div>
        <DateStyle isPrev={isPrev} isNext={isNext}>
          {date}
          {isToday ? <TodayStyle /> : null}
        </DateStyle>
      </div>

      <div>
        <DiaryModal
          isModal={isModal}
          closeModal={closeModal}
          year={year}
          month={isPrev ? month - 1 : month && isNext ? month + 1 : month}
          date={date}
        ></DiaryModal>
      </div>
    </Form>
  );
};

export default Dates;
