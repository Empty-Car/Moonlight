import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 900px;
  height: 600px;
  padding: 16px;
  background-color: white;
`;

export const CloseButton = styled.div`
  text-align: right;
`;

export const TextBox = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`;

export const TitleInput = styled.input`
  outline: none;
  border: none;
  width: 80%;
  font-size: 40px;
`;

export const DisplayDate = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const SelectMood = styled.div`
  margin-top: 10px;
  font-weight: 600px;
  font-size: 15px;

  display: flex;
`;

export const Bounding = styled.div`
  height: 35px;
  width: 3px;
  background-color: black;

  margin-left: 20px;
`;

export const MoodSelectBox = styled.div`
  height: 30px;
  width: 50px;
  display: flex;
`;

export const DiaryInput = styled.input`
  outline: none;
  width: 80%;
  resize: none;
  border: none;
  height: 60px;

  font-size: 20px;
`;

export const SaveButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #ff7473;
  color: white;
  width: 100px;
  height: 30px;

  margin-left: 700px;
  margin-top: 300px;
`;