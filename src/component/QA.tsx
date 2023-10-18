import { memo } from "react";
import styled from "styled-components";
import { QuestionType } from "../asset/type";
import QuestionButton from "./button/QuestionButton";
import Wave from "react-wavify";

interface QAProps {
  onClick: (choice: string, title: string) => void;
  currentQuestion: QuestionType;
}

const QA = memo((props: QAProps) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Question</Title>
        <Content>{props.currentQuestion[0]["title"]}</Content>
      </TitleWrapper>
      <ButtonWrapper>
        {props.currentQuestion[1].map((choice, index) => {
          return (
            <QuestionButton
              key={`item_${index}`}
              text={choice}
              onClick={() =>
                props.onClick(choice, props.currentQuestion[0]["answer"])
              }
            />
          );
        })}
      </ButtonWrapper>
      <WaveWrapper fill="url(#gradient)">
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="119.718"
            y2="38.196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9D6FF" />
            <stop offset="1" stopColor="#CDE7FF" />
          </linearGradient>
        </defs>
      </WaveWrapper>
    </Container>
  );
});

export default QA;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  height: 80%;
  width: 100%;
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  font-family: "Dancing Script", cursive;
`;

const Content = styled.h2`
  font-weight: 500;
  font-size: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const WaveWrapper = styled(Wave)`
  width: 100%;
  display: inline-block;
  position: absolute;
  z-index: -1;
  height: 100%;
`;
