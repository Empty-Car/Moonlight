import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { NonTokenInstance } from "../axios";

const SignupDiv = styled.div``;
const EmailInput = styled.input``;
const NicknameInput = styled.input``;
const PasswordInput = styled.input``;
const ActiveButton = styled.button``;

const Signup = ({ closeModal }) => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { email, name, password } = inputs;

  const onSetHandler = useCallback(
    (e) => {
      const name = e.target.name;
      setInputs({ ...inputs, [name]: e.target.value });
    },
    [inputs]
  );

  const activeButtonClick = async () => {
    const res = await NonTokenInstance.post("/v1/user", {
      email: email,
      name: name,
      password: password,
    });

    closeModal();
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
        Name
        <NicknameInput
          value={name}
          name="name"
          onChange={onSetHandler}
        ></NicknameInput>
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
        <ActiveButton onClick={activeButtonClick}>
          회원가입 완료된거 같은데, 로그인 ㄱ?
        </ActiveButton>
      </div>
    </SignupDiv>
  );
};

export default React.memo(Signup);
