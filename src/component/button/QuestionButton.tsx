import { memo } from "react";
import styled from "styled-components";
import colors, { fonts, media } from "../../asset/theme";

interface QuestionButtonProps {
  text: string;
  iconUrl?: string;
  onClick: () => void;
}

const QuestionButton = memo((props: QuestionButtonProps) => {
  return (
    <Container onClick={props.onClick}>
      {props.iconUrl &&
        <IconImg
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.iconUrl})`,
          }}
        />
      }
      {props.text}
      <ArrowIcon
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.425 14.1124L12.35 7.04992C12.2338 6.93276 12.0955 6.83977 11.9432 6.77631C11.7909 6.71285 11.6275 6.68018 11.4625 6.68018C11.2975 6.68018 11.1341 6.71285 10.9818 6.77631C10.8294 6.83977 10.6912 6.93276 10.575 7.04992C10.3422 7.28413 10.2115 7.60094 10.2115 7.93117C10.2115 8.26141 10.3422 8.57822 10.575 8.81242L16.7625 15.0624L10.575 21.2499C10.3422 21.4841 10.2115 21.8009 10.2115 22.1312C10.2115 22.4614 10.3422 22.7782 10.575 23.0124C10.6907 23.1305 10.8288 23.2245 10.9811 23.2889C11.1335 23.3532 11.2971 23.3867 11.4625 23.3874C11.6279 23.3867 11.7915 23.3532 11.9438 23.2889C12.0962 23.2245 12.2342 23.1305 12.35 23.0124L19.425 15.9499C19.5519 15.8329 19.6531 15.6908 19.7224 15.5327C19.7916 15.3746 19.8274 15.2038 19.8274 15.0312C19.8274 14.8585 19.7916 14.6878 19.7224 14.5297C19.6531 14.3715 19.5519 14.2295 19.425 14.1124Z"
          fill="#333333"
        />
      </ArrowIcon>
    </Container>
  );
});

export default QuestionButton;

const Container = styled.button`
  color: ${colors.black};
  background-color: ${colors.white};
  font-size: ${fonts.l};
  text-decoration: none;
  border-radius: 8px;
  display: flex;
  width: 400px;
  max-width: 100%;
  padding: 14px 10px;
  justify-content: center;
  gap: 12px;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  &:hover {
    svg {
      transform: translateX(6px);
    }
  }
  @media (max-width: ${media.sp}) {
    font-size: ${fonts.m};
  }
`;

const IconImg = styled.div`
  width: 24px;
  height: 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ArrowIcon = styled.svg`
  transition: 0.5s;
  position: absolute;
  top: 14px;
  right: 6px;
`;
