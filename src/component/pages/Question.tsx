import { memo } from "react";
import { CSSObject } from "styled-components";
import { questions } from "../../asset/question";
import ReplayButton from "../button/ReplayButton";
import PreviousButton from "../button/PreviousButton";
import QA from "../QA";
import { Choice } from "../../asset/type";

interface QuestionProps {
  currentQuestionNum: number;
  onClickReplay: () => void;
  onClickChoice: (choice: Choice) => void;
  onClickPrevious: () => void;
}

const Question = memo((props: QuestionProps) => {
  return (
    <>
      {props.currentQuestionNum !== 0 && (
        <ReplayButton
          text="診断をやり直す"
          onClick={props.onClickReplay}
          css={replayButtonStyle}
        />
      )}
      <QA
        currentQuestion={props.currentQuestionNum}
        question={questions[props.currentQuestionNum]}
        onClick={props.onClickChoice}
      />
      {props.currentQuestionNum !== 0 && (
        <PreviousButton
          text="前の質問に戻る"
          onClick={props.onClickPrevious}
          css={previousButtonStyle}
        />
      )}
    </>
  );
});

export default Question;

const replayButtonStyle: CSSObject = {
  position: "absolute",
  top: "12px",
  left: "12px",
};

const previousButtonStyle: CSSObject = {
  position: "absolute",
  bottom: "12px",
  left: "32px",
};
