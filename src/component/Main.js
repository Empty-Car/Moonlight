import styled from "styled-components";

const MainBox = styled.div`
  padding-top: 100px;
  /* background-color: black;
  height: 500px;
  width: 100%; */
`

const Slogan = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: bold;
`;

const Main = () => {
  return (
    <MainBox>
      <Slogan>
        <div>Lean On Us</div>
      </Slogan>
    </MainBox>
  );
};

export default Main;
