import { memo } from "react";
import styled, { CSSObject } from "styled-components";
import ReplayButton from "../button/ReplayButton";
import PreviousButton from "../button/PreviousButton";
import { QuestionType, QuestionAnswer } from "../../asset/type";
import Wave from "react-wavify";
import QA from "../QA";

interface QuestionProps {
  currentQuestionTitle: string;
  onClickReplay: () => void;
  onClickChoice: (choice: QuestionAnswer, title: string) => void;
  onClickPrevious: () => void;
  currentQuestion: QuestionType;
}

const Question = memo((props: QuestionProps) => {
  return (
    <>
      <ReplayButton
        text="TOPに戻る"
        onClick={props.onClickReplay}
        css={replayButtonStyle}
      />
      <QA
        onClick={props.onClickChoice}
        currentQuestion={props.currentQuestion}
      />
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

const WaveWrapper = styled(Wave)`
  width: 100%;
  display: inline-block;
  position: absolute;
  z-index: -1;
  height: 100%;
`;
