import React from "react";
import styled from "styled-components";
import colors from "../asset/theme";

const Button = () => {
  return <Container>ボタンテキスト</Container>;
};

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

  &:hover {
    background-color: ${colors.white};
    color: ${colors.blue};
    transition: 0.7s;
  }
`;
