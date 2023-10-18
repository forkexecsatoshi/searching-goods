import { memo } from "react";
import { CSSObject } from "styled-components";
import ReplayButton from "../button/ReplayButton";
import PreviousButton from "../button/PreviousButton";
import { QuestionType } from "../../asset/type";
import QA from "../QA";

interface QuestionProps {
  currentQuestionTitle: string;
  onClickReplay: () => void;
  onClickChoice: (choice: string, title: string) => void;
  onClickPrevious: () => void;
  currentQuestion: QuestionType;
}

const Question = memo((props: QuestionProps) => {
  return (
    <>
      {props.currentQuestionTitle !== "" && (
        <ReplayButton
          text="診断をやり直す"
          onClick={props.onClickReplay}
          css={replayButtonStyle}
        />
      )}
      <QA
        onClick={props.onClickChoice}
        currentQuestion={props.currentQuestion}
      />
      {props.currentQuestionTitle !== "" && (
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
