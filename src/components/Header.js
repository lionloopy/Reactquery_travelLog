import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

function Header(props) {
  const style = {
    cursor: "pointer",
    position: "absolute",
    left: "40px",
    fontSize: "25px",
  };

  const navigate = useNavigate();

  return (
    <HeaderBox>
      <FaHome
        style={style}
        onClick={() => {
          navigate("/");
        }}
      />
      <Title>{props.children}</Title>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.div`
  margin-top: 2rem;
  display: flex;
  font-family: "Happiness-Sans-Title";
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 auto;
  font-family: "Happiness-Sans-Title";
`;
