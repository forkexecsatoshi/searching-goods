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
  // 前回回答したタイトル
  const [previousQuestionTitle, setPreviousQuestionTitle] =
    useState<string>("");
  // 直近で回答したタイトル
  const [currentQuestionTitle, setCurrentQuestionTitle] = useState<string>("");
  // アンケート終了かどうか
  const [currentStage, setCurrentStage] = useState<Stage>("top");
  // 現在の質問
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(
    questions[0]
  );
  // 質問の配列
  const [questionArray, setQuestionArray] = useState<QuestionType[]>(questions);

  // 診断をスタートするボタンをクリックした時の関数
  const onClickStart = () => {
    setCurrentStage("question");
  };

  // TOPに戻るまたは診断をやり直す時の関数
  const onClickRetry = (nextStage: Stage) => {
    setAnsweredQuestion([]);
    setPreviousQuestionTitle("");
    setCurrentQuestionTitle("");
    setCurrentQuestion(questions[0]);
    setQuestionArray(questions);
    setCurrentStage(nextStage);
  };

  // 選択肢をクリックした時の関数
  const onClickChoice = (choice: string, title: string) => {
    switch (choice) {
      case "ビットを選ぶ":
        setCurrentQuestion(bitQuestions[0]);
        setQuestionArray(bitQuestions);
        setPreviousQuestionTitle(title);
        break;
      case "マシンを選ぶ":
        setCurrentQuestion(machineQuestions[0]);
        setQuestionArray(machineQuestions);
        setPreviousQuestionTitle(title);
        break;
      case "集塵機を選ぶ":
        setCurrentQuestion(dustCollectorQuestions[0]);
        setQuestionArray(dustCollectorQuestions);
        setPreviousQuestionTitle(title);
        break;
      case "ライトを選ぶ":
        setCurrentQuestion(lightQuestions[0]);
        setQuestionArray(lightQuestions);
        setPreviousQuestionTitle(title);
        break;
      case "ダイヤモンドファイルを選ぶ":
        setCurrentQuestion(diamondFileQuestions[0]);
        setQuestionArray(diamondFileQuestions);
        setPreviousQuestionTitle(title);
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
        // 前回回答した回答を更新
        setPreviousQuestionTitle(currentQuestionTitle);
    }
    // 回答済みの選択肢に現在選択した項目を追加
    setAnsweredQuestion((prev) => [...prev, choice]);
    // 次の設問に移動する
    setCurrentQuestionTitle(title);
  };

  // 前へ戻るをクリック時の関数
  const onClickPrevious = () => {
    // 現在 === 前回の場合は最初の質問のため
    if (currentQuestionTitle === previousQuestionTitle) {
      onClickRetry("question");
      return;
    }
    const nextQuestion = questionArray.filter(
      (question) => question[0].answer === currentQuestionTitle
    );
    if (nextQuestion.length === 0) {
      setCurrentQuestion(questions[0]);
      setQuestionArray(questions);
    } else {
      setCurrentQuestion(nextQuestion[0]);
    }
    setCurrentQuestionTitle(previousQuestionTitle);
    setAnsweredQuestion((prev) => [prev.pop()!]);
  };

  const stageDom = {
    top: <Start onClick={onClickStart} />,
    question: (
      <Question
        currentQuestionTitle={currentQuestionTitle}
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
