import { useState } from "react";
import Container from "react-bootstrap/Container";
import QA from "./component/QA";
import { questions } from "./asset/question";
import { Choice } from "./asset/type";

const App = () => {
  const [answeredQuestion, setAnsweredQuestion] = useState<Choice[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const onClickButton = (choice?: Choice) => {
    // topに戻る場合
    if (!choice) {
      setAnsweredQuestion([]);
      return;
    }

    // 選択肢がクリックされた場合
    if (!Number.isNaN(choice.value)) {
      setCurrentQuestion(choice.value);
      // TODO: answeredQuestionの更新
    }
  };
  const onClickPrevious = () => {
    // TODO: answeredQuestionの更新
    setCurrentQuestion((value) => value - 1);
  };
  return (
    <Container fluid>
      <QA
        question={questions[currentQuestion]}
        onClick={onClickButton}
        onClickPrevious={onClickPrevious}
        onClickTop={() => onClickButton()}
      />
    </Container>
  );
};

export default App;
