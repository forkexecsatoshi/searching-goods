import { useState } from "react";
import styled, { css } from "styled-components";
import Container from "react-bootstrap/Container";
import { Stage } from "./asset/type";
import colors from "./asset/theme";
import Start from "./component/pages/Start";
import Question from "./component/pages/Question";
import Finish from "./component/pages/Finish";
import { questions } from "./asset/questions/question";
import { QuestionType, QuestionAnswer, Result } from "./asset/type";

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
  const [currentQuestion, setCurrentQuestion] = useState<any>(questions[0]);
  // 診断結果
  const [result, setResult] = useState<Result>([]);

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
    setCurrentStage(nextStage);
  };

  // 選択肢をクリックした時の関数
  const onClickChoice = (choice: QuestionAnswer, title: string) => {
    if (choice.next.length === 0) {
      setCurrentStage("finish");
      setResult(choice.answer as Result);
    } else {
      setCurrentQuestion(choice.next);
      setPreviousQuestionTitle(title);
    }
    // 回答済みの選択肢に現在選択した項目を追加
    setAnsweredQuestion((prev) => [...prev, choice.text]);
    // 次の設問に移動する
    setCurrentQuestionTitle(choice.text);
  };

  // 前へ戻るをクリック時の関数
  const onClickPrevious = () => {
    // undefinedになるのは最初の質問のため
    if (previousQuestionTitle === undefined) {
      onClickRetry("question");
      return;
    }
    let question = questions[0] as QuestionType;
    // 回答を1つ前の選択肢まで1つ1つ深ぼっていく
    for (let i = 0; i < answeredQuestion.length - 1; i++) {
      question[1].forEach((choice) => {
        if (choice.text === answeredQuestion[i])
          question = choice.next as QuestionType;
      });
    }
    // 1つ前の問題をセット
    setCurrentQuestion(question);
    // 現在と前回の問題文のタイトルを更新する
    setCurrentQuestionTitle(answeredQuestion[answeredQuestion.length - 2]);
    setPreviousQuestionTitle(answeredQuestion[answeredQuestion.length - 3]);
    setAnsweredQuestion((prev) => {
      prev.pop()!;
      return prev;
    });
  };

  const stageDom = {
    top: <Start onClick={onClickStart} />,
    question: (
      <Question
        currentQuestionTitle={currentQuestionTitle}
        currentQuestion={currentQuestion}
        onClickReplay={() => onClickRetry("top")}
        onClickChoice={onClickChoice}
        onClickPrevious={onClickPrevious}
      />
    ),
    finish: (
      <Finish
        answeredQuestion={answeredQuestion}
        onClickTop={() => onClickRetry("top")}
        onClickRetry={() => onClickRetry("question")}
        result={result}
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
      height: auto;
      padding: 30px 0;
      min-height: 100vh;
      align-items: center;
      > div {
        width: 80%;
      }
    `};
`;
