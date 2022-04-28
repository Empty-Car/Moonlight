import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Daejeon } from "../constant";

const CentersBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  width: 1000px;
`;

const EachCenter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Centers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/");
    }
  }, []);

  return (
    <CentersBox>
      <EachCenter>
        {Object.keys(Daejeon).map((key, idx) => {
          <div>{Daejeon[key]} | {Daejeon[key]}</div>
          
        }}
      </EachCenter>
    </CentersBox>
  );
};

export default Centers;
