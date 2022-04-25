import styled from "styled-components";
import { useState, useCallback } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Calendar = styled.div`
  margin-top: 50px;
  background-color: gray;

  width: 1120px;
  height: 800px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DayButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DayButton = styled.button`
  flex: none;

  width: 150px;
`;

const EmotionDiary = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [days, setDays] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
  });

  const [dayOfWeek, setDayOfWeek] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });

  const onUpdateDays = () => {
    const lastDate = new Date(year, month, 0).getDate();

    var dayArr = [];
    for (var i = 1; i <= lastDate; i++) {
      dayArr.push(i);
    }
    setDays({ ...days, [month]: dayArr });
  };

  const daysIndayOfWeek = () => {
    var ddddArr = [];
    for (var i = 0; i < days[month].length; i++) {
      ddddArr.push(new Date(year, month, days[month][i]).getDay());
    }
    setDayOfWeek({...dayOfWeek, []})
  };

  const onNextMonth = useCallback(() => {
    setMonth((month) => month + 1);

    if (month >= 12) {
      setMonth(1);
      setYear((year) => year + 1);
    }

    onUpdateDays();
  }, [month, year]);

  const onPriorMonth = useCallback(() => {
    setMonth((month) => month - 1);

    if (month <= 1) {
      setMonth(12);
      setYear((year) => year - 1);
    }

    onUpdateDays();
  }, [month, year]);

  return (
    <Calendar>
      <div>
        <MdKeyboardArrowLeft onClick={onPriorMonth} />
        {year}년 {month}월
        <MdKeyboardArrowRight onClick={onNextMonth} />
      </div>
      <DayButtonBox>
        {days[month].map((day, idx) => (
          <DayButton key={idx}>{day}</DayButton>
        ))}
      </DayButtonBox>

      <div onClick={daysIndayOfWeek}>ddddddd</div>
    </Calendar>
  );
};

export default EmotionDiary;
