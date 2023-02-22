import React from "react";
import styled, { css } from "styled-components";

function Button(props) {
  const { label, onClick, size } = props;
  return (
    <AllButton onClick={onClick} size={size}>
      {label}
    </AllButton>
  );
}

export default Button;

const AllButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px 25px;
  font-family: "LeeSeoyun";
  font-size: 17px;
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          padding: 35px 100px;
        `;
      case "medium":
        return css`
          position: absolute;
          top: 450px;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case "small":
        return css`
          position: absolute;
          top: 110%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case "hover":
        return css`
          margin-top: 20px;
          &:hover {
            background-color: rgb(232, 196, 196);
          }
        `;
      default:
        return css`
          margin-top: 10px;
        `;
    }
  }}
`;
