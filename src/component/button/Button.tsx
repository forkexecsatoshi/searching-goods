import { memo } from "react";
import styled from "styled-components";
import colors from "../../asset/theme";

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
  background: ${colors.primary};
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  display: inline-block;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;
