import { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QA from "./component/QA";
import { questions } from "./asset/question";
import { Choice } from "./asset/type";

const App = () => {
  // 回答済みの選択肢を格納する
  const [answeredQuestion, setAnsweredQuestion] = useState<Choice[]>([]);
  // 前回回答した番号
  const [previousQuestionNum, setPreviousQuestionNum] = useState<number>(0);
  // 直近で回答した番号
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(0);
  // アンケート終了かどうか
  const [isFinish, setIsFinish] = useState<boolean>(false);

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
      setIsFinish(true);
    }
  };

  // 前へ戻るをクリック時の関数
  const onClickPrevious = () => {
    setCurrentQuestionNum(previousQuestionNum);
    setAnsweredQuestion((prev) => [prev.pop()!]);
  };
  return (
    <RootContainer>
      {!isFinish ? (
        <QA
          currentQuestion={currentQuestionNum}
          question={questions[currentQuestionNum]}
          onClick={onClickButton}
          onClickPrevious={onClickPrevious}
          onClickTop={() => onClickButton()}
        />
      ) : (
        <Row>
          <Col>
            {answeredQuestion.map((choice) => {
              return choice.text;
            })}
            を選んだあなたにおすすめの商品はこれ！
          </Col>
        </Row>
      )}
    </RootContainer>
  );
};

export default App;

const RootContainer = styled(Container)`
  height: 100vh;
  padding-top: 20px;
`;
