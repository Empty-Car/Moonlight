import { useState } from "react";
import DiaryModal from "./DiaryModal";
import styled, { css } from "styled-components";
import { Instance } from "../axios";
import { dateToString } from "./DiaryModal";

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

const Dates = ({ date, month, year, isToday, isPrev, isNext }) => {
  const [isModal, setIsModal] = useState(false);
  const [nameData, setNameData] = useState("");

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const onLoadDiary = async () => {
    openModal();

    const userId = localStorage.getItem("user_id");
    const res = await Instance.get(
      `/v1/todo/${dateToString(`${year}-${month}-${date}`)}/user/${userId}`
    );
    console.log(res.data);

    const resData = res.data;
    if (resData.length === 0) {
      return;
    }
    setNameData(JSON.parse(resData[resData.length - 1].name));
  };

  return (
    <Form onDoubleClick={onLoadDiary}>
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
          nameData={nameData}
        />
      </div>
    </Form>
  );
};

export default Dates;
