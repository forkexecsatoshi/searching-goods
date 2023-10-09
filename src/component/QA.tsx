import { memo } from "react";
import styled from "styled-components";
import { Choice, Question } from "../asset/type";
import Button from "./button/Button";
import colors from "../asset/theme";

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
            <Button
              key={`item_${index}`}
              text={choice.text}
              onClick={() => props.onClick(choice)}
            />
          );
        })}
      </ButtonWrapper>
    </Container>
  );
});

export default QA;

// styled-componentsというライブラリを用いてこのようにcssを記述することができる
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  height: 80%;
  background: ${colors.primaryBg};
  width: 100%;
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
