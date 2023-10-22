import { memo } from "react";
import styled, { CSSObject } from "styled-components";
import colors, { fonts } from "../../asset/theme";

interface PreviousButtonProps {
  text: string;
  onClick: () => void;
  css?: CSSObject;
}

const PreviousButton = memo((props: PreviousButtonProps) => {
  return (
    <Container onClick={props.onClick} style={props.css!}>
      {props.text}
      <Icon
        width="129"
        height="12"
        viewBox="0 0 129 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1L2 11H127.5"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Icon>
    </Container>
  );
});

export default PreviousButton;

const Container = styled.p`
  color: ${colors.black};
  font-size: ${fonts.m};
  cursor: pointer;
  position: relative;
  &:hover {
    svg {
      transform: translateX(-6px);
    }
  }
`;

const Icon = styled.svg`
  transition: 0.3s;
  position: absolute;
  top: 16px;
  right: -2px;
`;
