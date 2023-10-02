import React, { memo } from "react";
import styled from "styled-components";
import colors from "../asset/theme";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = memo((props: ButtonProps) => {
  return <Container onClick={props.onClick}>{props.text}</Container>;
});

export default Button;

const Container = styled.button`
  color: ${colors.white};
  display: block;
  padding: 20px 60px;
  text-align: center;
  background-color: ${colors.blue};
  font-weight: 600;
  font-size: 18px;
  border: 2px solid ${colors.blue};
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.blue};
    transition: 0.7s;
  }
`;
