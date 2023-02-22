import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../fonts/font.css";
import Button from "../element/Button";

function Footer() {
  const navigate = useNavigate();
  return (
    <FooterBox>
      <ButtonBox>
        <Button
          onClick={() => navigate("/list")}
          size="large"
          label="내 기록함 들어가기"
        />
      </ButtonBox>
    </FooterBox>
  );
}

export default Footer;

const FooterBox = styled.div`
  width: 100%;
  height: 160px;
  font-family: "LeeSeoyun";
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-top: 40px;
`;
