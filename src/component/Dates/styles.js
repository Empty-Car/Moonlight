
import styled, { css } from "styled-components";

export const Form = styled.div`
width: calc(100% / 7);
height: 100px;
padding-top: 5px;
text-align: left;
font-size: 20;
font-weight: 600px;

border-left: 1px solid #c4c4c4;
border-right: 1px solid #c4c4c4;
border-top: 1px solid #c4c4c4;
border-bottom: 1px solid #c4c4c4;
box-sizing: border-box;
`;

export const TodayStyle = styled.div`
background-color: #f8a6a6;
width: 70%;
height: 20px;
border-radius: 5px;
margin-top: 40px;
margin-left: 7px;
`;

export const DateStyle = styled.span`
padding: 10px 1px 1px 10px;
font-weight: bold;

${(props) =>
  props.isPrev &&
  css`
    color: #c4c4c4;
  `}

${(props) =>
  props.isNext &&
  css`
    color: #c4c4c4;
  `}
`;
