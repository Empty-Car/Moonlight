import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { NonTokenInstance } from "../axios";

const SignupDiv = styled.div``;

const InputStyle = styled.input`
  padding: 12px;
  border: 2px solid #f8a6a6;
  width: 50%;
  height: 20px;
  font-size: 18px;
  box-sizing: border-box;

  margin-top: 10px;
`;

const ActiveButton = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 50px;
  border: none;
  background-color: #f8a6a6;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

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
        <InputStyle
          value={email}
          name="email"
          onChange={onSetHandler}
        ></InputStyle>
      </div>
      <div>
        Name
        <InputStyle
          value={name}
          name="name"
          onChange={onSetHandler}
        ></InputStyle>
      </div>
      <div>
        Password
        <InputStyle
          value={password}
          type="password"
          name="password"
          onChange={onSetHandler}
        ></InputStyle>
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
