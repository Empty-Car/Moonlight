import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { NonTokenInstance } from "../axios";
import SignupModal from "./SignupModal";
import { useNavigate } from "react-router-dom";

const SignupDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const InputStyle = styled.input`
  padding: 12px;
  border: 2px solid #f8a6a6;
  width: 500px;
  font-size: 18px;
  box-sizing: border-box;

  margin-top: 10px;
`;

const ActiveButton = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 50px;
  border: none;
  background-color: #f8a6a6;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const SignupButton = styled.button`
  width: 120px;
  height: 50px;
  margin-top: 50px;
  margin-left: 30px;
  border: none;
  background-color: #f8a6a6;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const Signin = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const onSetHandler = useCallback(e => {
    const name = e.target.name;
    setInputs({ ...inputs, [name]: e.target.value });
  }, [inputs]);

  const activeButtonClick = async () => {
    const res = await NonTokenInstance.post("/v1/user/token", {
      email: email,
      password: password,
    });

    navigate("main");

    const resData = res.data;
    localStorage.setItem("token", resData.token);
    localStorage.setItem("user_id", resData.user_id);
  };

  const openModal = useCallback(() => {
    setIsModal(true);
    console.log("openModal");
  }, []);
  const closeModal = useCallback(() => {
    setIsModal(false);
  }, []);

  return (
    <SignupDiv>
      <div>
        <InputStyle
          value={email}
          name="email"
          onChange={onSetHandler}
          placeholder="이메일 입력:)"
        ></InputStyle>
      </div>
      <div>
        <InputStyle
          value={password}
          type="password"
          name="password"
          placeholder="비밀번호 입력^^"
          onChange={onSetHandler}
        ></InputStyle>
      </div>
      <ActiveButton onClick={activeButtonClick}>로그인완료</ActiveButton>
      <SignupButton onClick={openModal}>회원가입하러가기</SignupButton>
      <SignupModal isModal={isModal} closeModal={closeModal}></SignupModal>
    </SignupDiv>
  );
};

export default Signin;
