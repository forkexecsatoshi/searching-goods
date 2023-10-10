import { useState } from "react";
import styled, { css } from "styled-components";
import Container from "react-bootstrap/Container";
import { Choice, Stage } from "./asset/type";
import colors from "./asset/theme";
import Start from "./component/pages/Start";
import Question from "./component/pages/Question";
import Finish from "./component/pages/Finish";

const App = () => {
  // 回答済みの選択肢を格納する
  const [answeredQuestion, setAnsweredQuestion] = useState<Choice[]>([]);
  // 前回回答した番号
  const [previousQuestionNum, setPreviousQuestionNum] = useState<number>(0);
  // 直近で回答した番号
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(0);
  // アンケート終了かどうか
  const [currentStage, setCurrentStage] = useState<Stage>("top");

  // 診断をスタートするボタンをクリックした時の関数
  const onClickStart = () => {
    setCurrentStage("question");
  };

  // TOPに戻るまたは診断をやり直す時の関数
  const onClickRetry = (nextStage: Stage) => {
    setAnsweredQuestion([]);
    setPreviousQuestionNum(0);
    setCurrentQuestionNum(0);
    setCurrentStage(nextStage);
  };

  // 選択肢をクリックした時の関数
  const onClickChoice = (choice: Choice) => {
    // 回答済みの選択肢に現在選択した項目を追加
    setAnsweredQuestion((prev) => [...prev, choice]);

    // 選択肢がクリックされた場合
    if (!Number.isNaN(choice.value)) {
      // 前回回答した番号を更新
      setPreviousQuestionNum(currentQuestionNum);
      // 次の設問に移動する
      setCurrentQuestionNum(choice.value);
    } else {
      // アンケート終了
      setCurrentStage("finish");
    }
  };

  // 前へ戻るをクリック時の関数
  const onClickPrevious = () => {
    setCurrentQuestionNum(previousQuestionNum);
    setAnsweredQuestion((prev) => [prev.pop()!]);
  };

  const stageDom = {
    top: <Start onClick={onClickStart} />,
    question: (
      <Question
        currentQuestionNum={currentQuestionNum}
        onClickReplay={() => onClickRetry("question")}
        onClickChoice={onClickChoice}
        onClickPrevious={onClickPrevious}
      />
    ),
    finish: (
      <Finish
        answeredQuestion={answeredQuestion}
        onClickTop={() => onClickRetry("top")}
        onClickRetry={() => onClickRetry("question")}
      />
    ),
  };
  return (
    <RootContainer stage={currentStage}>{stageDom[currentStage]}</RootContainer>
  );
};

export default App;

const RootContainer = styled(Container)<{ stage: Stage }>`
  height: 100vh;
  align-items: end;
  display: flex;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  padding-right: 0;
  padding-left: 0;
  position: relative;
  ${({ stage }) =>
    stage === "finish" &&
    css`
      background: ${colors.primaryBg};
    `};
`;
