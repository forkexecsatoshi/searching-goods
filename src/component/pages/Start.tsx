import { memo } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import LeftBg from "../../asset/top-left-bg.svg";
import RightBg from "../../asset/top-right-bg.svg";

interface StartProps {
  onClick: () => void;
}

const Start = memo((props: StartProps) => {
  return (
    <Container>
      <img src={LeftBg} className="left-bg" alt="left-bg" />
      <img src={RightBg} className="right-bg" alt="right-bg" />
      <Title>あなたの欲しいが必ず見つかる WSPTプロダクト診断</Title>
      <Content>
        簡単な質問に答えるだけであなたに最適なアイテムを選びます。
        <br />
        下のボタンから早速診断を始めましょう。
      </Content>
      <Button text="診断をスタート" onClick={props.onClick} />
    </Container>
  );
});

export default Start;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
  > .left-bg {
    position: absolute;
    top: -10px;
    left: -10px;
  }
  > .right-bg {
    position: absolute;
    bottom: -10px;
    right: -10px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
`;

const Content = styled.p`
  font-size: 20px;
`;
