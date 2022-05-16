import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Daejeon } from "../../constant";
import Center from "../Center/Center";
import * as S from "./styles"

const CentersList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <S.CentersBox>
      <S.EachCenter>
        {Daejeon.map((info, idx) => (
          <Center
            key={idx}
            centerName={info.centerName}
            location={info.location}
            phonecall={info.phonecall}
          ></Center>
        ))}
      </S.EachCenter>
    </S.CentersBox>
  );
};

export default CentersList;
