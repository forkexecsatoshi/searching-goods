import { memo } from "react";
import styled from "styled-components";
import { Choice, Question } from "../asset/type";
import Button from "./Button";

interface QAProps {
  question: Question;
  onClick: (value: Choice) => void;
  onClickPrevious: () => void;
  onClickTop: () => void;
}

const QA = memo((props: QAProps) => {
  return (
    <Container>
      <h2>{props.question[0]["title"]}</h2>
      <ButtonWrapper>
        {props.question[1].map((choice) => {
          return (
            <Button text={choice.text} onClick={() => props.onClick(choice)} />
          );
        })}
      </ButtonWrapper>
      <BackButtonWrapper>
        <Button text="前へ" onClick={props.onClickPrevious} />
        <Button text="トップへ戻る" onClick={props.onClickTop} />
      </BackButtonWrapper>
    </Container>
  );
});

export default QA;

// styled-componentsというライブラリを用いてこのようにcssを記述することができる
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  button {
    width: 45%;
  }
`;

const BackButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  button {
    width: 30%;
  }
`;
