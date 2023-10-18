import { useState } from "react";
import styled, { css } from "styled-components";
import Container from "react-bootstrap/Container";
import { Stage } from "./asset/type";
import colors from "./asset/theme";
import Start from "./component/pages/Start";
import Question from "./component/pages/Question";
import Finish from "./component/pages/Finish";
import {
  questions,
  bitQuestions,
  machineQuestions,
  dustCollectorQuestions,
  lightQuestions,
  diamondFileQuestions,
} from "./asset/question";
import { QuestionType } from "./asset/type";

const App = () => {
  // 回答済みの選択肢を格納する
  const [answeredQuestion, setAnsweredQuestion] = useState<string[]>([]);
  // 前回回答した番号
  const [previousQuestionValue, setPreviousQuestionValue] =
    useState<string>("");
  // 直近で回答した番号
  const [currentQuestionValue, setCurrentQuestionValue] = useState<string>("");
  // アンケート終了かどうか
  const [currentStage, setCurrentStage] = useState<Stage>("top");

  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(
    questions[0]
  );
  const [questionArray, setQuestionArray] = useState<QuestionType[]>(questions);

  // 診断をスタートするボタンをクリックした時の関数
  const onClickStart = () => {
    setCurrentStage("question");
  };

  // TOPに戻るまたは診断をやり直す時の関数
  const onClickRetry = (nextStage: Stage) => {
    setAnsweredQuestion([]);
    setPreviousQuestionValue("");
    setCurrentQuestionValue("");
    setCurrentStage(nextStage);
  };

  // 選択肢をクリックした時の関数
  const onClickChoice = (choice: string) => {
    switch (choice) {
      case "ビットを選ぶ":
        setCurrentQuestion(bitQuestions[0]);
        setQuestionArray(bitQuestions);
        break;
      case "マシンを選ぶ":
        setCurrentQuestion(machineQuestions[0]);
        setQuestionArray(machineQuestions);
        break;
      case "集塵機を選ぶ":
        setCurrentQuestion(dustCollectorQuestions[0]);
        setQuestionArray(dustCollectorQuestions);
        break;
      case "ライトを選ぶ":
        setCurrentQuestion(lightQuestions[0]);
        setQuestionArray(lightQuestions);
        break;
      case "ダイヤモンドファイルを選ぶ":
        setCurrentQuestion(diamondFileQuestions[0]);
        setQuestionArray(diamondFileQuestions);
        break;
      default:
        const nextQuestion = questionArray.filter(
          (question) => question[0].answer === choice
        );
        if (nextQuestion.length === 0) {
          setCurrentStage("finish");
        } else {
          setCurrentQuestion(nextQuestion[0]);
        }
    }
    // 回答済みの選択肢に現在選択した項目を追加
    setAnsweredQuestion((prev) => [...prev, choice]);
    // 前回回答した回答を更新
    setPreviousQuestionValue(currentQuestionValue);
    // 次の設問に移動する
    setCurrentQuestionValue(choice);
  };

  // 前へ戻るをクリック時の関数
  const onClickPrevious = () => {
    console.log(currentQuestionValue);
    setCurrentQuestionValue(previousQuestionValue);
    setAnsweredQuestion((prev) => [prev.pop()!]);
  };

  const stageDom = {
    top: <Start onClick={onClickStart} />,
    question: (
      <Question
        currentQuestionValue={currentQuestionValue}
        currentQuestion={currentQuestion}
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
