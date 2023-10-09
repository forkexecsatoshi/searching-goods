import { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Choice, Stage } from "./asset/type";
import Start from "./component/pages/Start";
import Question from "./component/pages/Question";

const App = () => {
  // 回答済みの選択肢を格納する
  const [answeredQuestion, setAnsweredQuestion] = useState<Choice[]>([]);
  // 前回回答した番号
  const [previousQuestionNum, setPreviousQuestionNum] = useState<number>(0);
  // 直近で回答した番号
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(0);
  // アンケート終了かどうか
  const [currentStage, setCurrentStage] = useState<Stage>("top");

  const onClickStart = () => {
    setCurrentStage("question");
  };

  // topへ戻る、または選択肢をクリックした時の関数
  const onClickButton = (choice?: Choice) => {
    // topに戻る場合、stateを初期値に戻す
    if (!choice) {
      setAnsweredQuestion([]);
      setPreviousQuestionNum(0);
      setCurrentQuestionNum(0);
      return;
    }

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
        onClickReplay={() => onClickButton()}
        onClickChoice={onClickButton}
        onClickPrevious={onClickPrevious}
      />
    ),
    finish: (
      <Row>
        <Col>
          {answeredQuestion.map((choice) => {
            return choice.text;
          })}
          を選んだあなたにおすすめの商品はこれ！
        </Col>
      </Row>
    ),
  };
  return <RootContainer>{stageDom[currentStage]}</RootContainer>;
};

export default App;

const RootContainer = styled(Container)`
  height: 100vh;
  align-items: end;
  display: flex;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  padding-right: 0;
  padding-left: 0;
  position: relative;
`;
