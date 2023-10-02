import React, { memo } from "react";
import styled from "styled-components";
import colors from "../asset/theme";
import { Choice } from "../asset/type";
import Button from "./Button";

interface QAProps {
  question: string;
  choices: Choice[];
  onClick: () => void;
  onClickPrevious: () => void;
  onClickTop: () => void;
}

const QA = memo((props: QAProps) => {
  return (
    <Container>
      <p>{props.question}</p>
      {props.choices.map((choice) => {
        return <Button text={choice.text} onClick={props.onClick} />;
      })}
      <Button text="前へ" onClick={props.onClickPrevious} />
      <Button text="トップへ戻る" onClick={props.onClickTop} />
    </Container>
  );
});

export default QA;

const Container = styled.div``;
