import { memo } from "react";
import styled from "styled-components";
import colors, { fonts } from "../../asset/theme";

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
  font-size: ${fonts.l};
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  display: inline-block;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
