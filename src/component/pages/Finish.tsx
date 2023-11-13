import { memo, useState } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import ReplayButton from "../button/ReplayButton";
import QuestionButton from "../button/QuestionButton";
import PreviousButton from "../button/PreviousButton";
import ItemCard from "../ItemCard";
import { Result } from "../../asset/type";
import colors, { fonts, media } from "../../asset/theme";
import Spinner from 'react-bootstrap/Spinner';

interface FinishProps {
  answeredQuestion: string[];
  onClickTop: () => void;
  onClickRetry: () => void;
  onClickPrevious: () => void;
  result: Result;
}

const Finish = memo((props: FinishProps) => {
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false);
  setTimeout(() => setIsResultOpen(true), 500);
  return (
    <Container>
      <Title>あなたにおすすめのアイテムは...</Title>
      {isResultOpen ?
        <Row>
        {props.result.map((item, index) => {
          return (
            <ItemCard
              title={item.text}
              imgUrl={item.img}
              url={item.url}
              key={`item_${index}`}
            />
          );
        })}
      </Row>
         : <SpinnerWrapper animation="border" />
      }
      <ButtonWrapper>
        <ReplayButton text="TOPに戻る" onClick={props.onClickTop} />
        <QuestionButton
          text="もう一度診断をする"
          onClick={props.onClickRetry}
        />
        <PreviousButton
          text="前の質問に戻る"
          onClick={props.onClickPrevious}
          css={{marginRight: "auto"}}
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
    div:nth-child(2n) a {
      justify-content: center;
      padding: 10px 0;
    }
    div:nth-child(2n+1) a {
      justify-content: center;
      padding: 10px 0;
    }
    // div:nth-child(2n+1) a {
    //   justify-content: flex-start;
    //   padding-bottom: 10px;
    // }
  }
`;

const Title = styled.h2`
  font-size: ${fonts.xl};
  @media (max-width: ${media.sp}) {
    font-size: ${fonts.l};
  }
`;

const SpinnerWrapper = styled(Spinner)`
  height: 100px;
  width: 100px;
  color: ${colors.blue}!important;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-direction: column;
  width: 100%;
`;
