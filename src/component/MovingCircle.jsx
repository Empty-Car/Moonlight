import gsap from "gsap";
import React, { useEffect } from "react";
import styled from "styled-components";

const BreathCircle = styled.div`
  background-color: ${props => props.color};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
`;

const breath = (max, min, name) => {
  
  const intro = () => {
    gsap.to(name, {scale : max, duration: 4.3, onComplete: outro})
  }
  
  const outro = () => {
    gsap.to(name, {scale: min, duration: 4.7, onComplete: intro})
  }

  intro();
}


const MovingCircle = () => {
  useEffect(() => {
    breath(2, 1.1, ".ani")
    breath(1.8, 0.9,".ani1")
    breath(1.6, 0.7, ".ani2")
  }, [])

  return (<>
  <BreathCircle className="ani" color="#EEDCC6"></BreathCircle>
  <BreathCircle className="ani1" color="#CAAE33"></BreathCircle>
  <BreathCircle className="ani2" color="#5B6A27"></BreathCircle>
  </>);
};

export default MovingCircle;
