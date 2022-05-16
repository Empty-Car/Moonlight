import styled from "styled-components";

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Nav = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Year = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const ButtonBox = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const TodayButton = styled.button`
  outline: none;
  border: none;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const Days = styled.div`
  display: flex;
`;

export const Day = styled.div`
  width: calc(100% / 7);
  text-align: center;
  font-size: 20px;
  font-weight: bold;

  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
`;
