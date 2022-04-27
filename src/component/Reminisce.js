import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reminisce = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/");
    }
  }, []);

  return <></>;
};

export default Reminisce;
