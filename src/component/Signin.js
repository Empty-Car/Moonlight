import React, { useState } from "react";
import styled from "styled-components";
import { NonTokenInstance } from "../axios";
import SignupModal from "./SignupModal";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userIdState } from "../recoil";

const SignupDiv = styled.div`
  margin-top: 200px;
`;
const EmailInput = styled.input``;
const PasswordInput = styled.input``;
const ActiveButton = styled.button``;
const SignupButton = styled.button``;

const Signin = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const setUserId = useSetRecoilState(userIdState);

  const onSetHandler = (e) => {
    const name = e.target.name;
    setInputs({ ...inputs, [name]: e.target.value });
  };

  const activeButtonClick = async () => {
    const res = await NonTokenInstance.post("/v1/user/token", {
      email: email,
      password: password,
    });

    navigate("main");

    const resData = res.data;
    setUserId(resData.user_id);
    localStorage.setItem("token", resData.token);
  };

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <SignupDiv>
      <div>
        Email
        <EmailInput
          value={email}
          name="email"
          onChange={onSetHandler}
        ></EmailInput>
      </div>
      <div>
        Password
        <PasswordInput
          value={password}
          type="password"
          name="password"
          onChange={onSetHandler}
        ></PasswordInput>
      </div>
      <div>
        <ActiveButton onClick={activeButtonClick}>로그인완료</ActiveButton>
      </div>
      <div>
        <SignupButton onClick={openModal}>회원가입하러가기</SignupButton>
        <SignupModal isModal={isModal} closeModal={closeModal}></SignupModal>
      </div>
    </SignupDiv>
  );
};

export default Signin;
