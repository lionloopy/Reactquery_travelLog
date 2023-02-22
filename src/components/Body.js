import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import travel01 from "../img/travel01.jpg";
import "../fonts/font.css";
import img from "../img/img.png";
import Button from "../element/Button";

function Body() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBox>
        Travel
        <HeaderImg src={img} alt="" />
        Log
      </HeaderBox>
      <WrapBox>
        <Img src={travel01} alt="main" />
        <TitleBox>"여행을 기록하세요"</TitleBox>
        <Button
          onClick={() => navigate("/log")}
          label="기록하기"
          size="medium"
        />
      </WrapBox>
    </>
  );
}

export default Body;

const HeaderBox = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Happiness-Sans-Title";
  font-size: 20px;
`;

const HeaderImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const WrapBox = styled.div`
  width: 100%;
  height: 450px;
`;

const Img = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 10px;
  position: relative;
  opacity: 0.8;
`;

const TitleBox = styled.h1`
  position: absolute;
  text-align: center;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "InkLipquid";
`;
