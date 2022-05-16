import styled from "styled-components";
import { WISESAYING } from "../../constant";

const MainBox = styled.div`
  margin-top: 100px;
  /* background-color: ;
  height: 500px;
  width: 100%; */
`

const Slogan = styled.div`
  position: absolute;
  width: 90%;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Main = () => {
  return (
    <MainBox>
      <Slogan>
        {WISESAYING[Math.floor(Math.random()*3+1)]}
      </Slogan>
    </MainBox>
  );
};

export default Main;
