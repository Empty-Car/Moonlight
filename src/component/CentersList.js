import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Daejeon } from "../constant";
import Center from "./Center";

const CentersBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  width: 90%;
`;

const EachCenter = styled.div``;

const CentersList = () => {
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
        {Daejeon.map((info, idx) => (
          <Center
            key={idx}
            centerName={info.centerName}
            location={info.location}
            phonecall={info.phonecall}
          ></Center>
        ))}
      </EachCenter>
    </CentersBox>
  );
};

export default CentersList;
