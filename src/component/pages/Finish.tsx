import { memo } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import ReplayButton from "../button/ReplayButton";
import QuestionButton from "../button/QuestionButton";
import ItemCard from "../ItemCard";
import { Result } from "../../asset/type";
import png from "../../asset/top-left-bg.svg";

interface FinishProps {
  answeredQuestion: string[];
  onClickTop: () => void;
  onClickRetry: () => void;
  result: Result;
}

const Finish = memo((props: FinishProps) => {
  return (
    <Container>
      <Title>あなたにおすすめのアイテムは...</Title>
      <Row>
        {props.result.map((item, index) => {
          return (
            <ItemCard
              title={item.text}
              imgUrl={item.img}
              key={`item_${index}`}
            />
          );
        })}
      </Row>
      <ButtonWrapper>
        <ReplayButton text="TOPに戻る" onClick={props.onClickTop} />
        <QuestionButton
          text="もう一度診断をする"
          onClick={props.onClickRetry}
        />
      </ButtonWrapper>
    </Container>
  );
});

export default Finish;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
  height: 100%;
  .row {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-direction: column;
`;
