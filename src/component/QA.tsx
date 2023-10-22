import { memo } from "react";
import styled from "styled-components";
import { QuestionType, QuestionAnswer } from "../asset/type";
import QuestionButton from "./button/QuestionButton";
import { fonts, media } from "../asset/theme";

interface QAProps {
  onClick: (choice: QuestionAnswer, title: string) => void;
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
              text={choice.text}
              onClick={() =>
                props.onClick(choice, props.currentQuestion[0]["answer"])
              }
            />
          );
        })}
      </ButtonWrapper>
    </Container>
  );
});

export default QA;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  height: 80%;
  width: 90%;
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
  font-size: ${fonts.xxl};
  font-family: "Dancing Script", cursive;
`;

const Content = styled.h2`
  font-weight: 500;
  font-size: ${fonts.xl};
  @media (max-width: ${media.sp}) {
    font-size: ${fonts.l};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
