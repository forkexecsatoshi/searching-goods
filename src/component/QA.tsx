import { memo } from "react";
import styled from "styled-components";
import { Choice, Question } from "../asset/type";
import QuestionButton from "./button/QuestionButton";
import Wave from "react-wavify";

interface QAProps {
  question: Question;
  currentQuestion: number;
  onClick: (value: Choice) => void;
}

const QA = memo((props: QAProps) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Question</Title>
        <Content>{props.question[0]["title"]}</Content>
      </TitleWrapper>
      <ButtonWrapper>
        {props.question[1].map((choice, index) => {
          return (
            <QuestionButton
              key={`item_${index}`}
              text={choice.text}
              onClick={() => props.onClick(choice)}
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
