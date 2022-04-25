import React from "react";
import RootRouter from "./route/RootRouter";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 60px;
  padding: 1rem;
  background: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 20px gray;

  z-index: 1;
`;

const LogoStyle = styled.img`
  width: 109px;
  height: 41px;
`;

const App = () => {
  return (
    <>
      <Header>
        <LogoStyle src="img/logo.png"></LogoStyle>
      </Header>
      <RootRouter />
    </>
  );
};

export default App;
