import { useState } from "react";
import DiaryModal from "../DiaryModal/DiaryModal";
import { Instance } from "../../axios";
import { dateToString } from "../DiaryModal/DiaryModal";
import * as S from "./styles"

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

    const resData = res.data;
    if (resData.length === 0) {
      return;
    }
    setNameData(JSON.parse(resData[resData.length - 1].name));
  };

  return (
    <>
    <S.Form onClick={onLoadDiary}>
      <div>
        <S.DateStyle isPrev={isPrev} isNext={isNext}>
          {date}
          {isToday ? <S.TodayStyle /> : null}
        </S.DateStyle>
      </div>
        
    </S.Form>
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
    </>
  );
};

export default Dates;
