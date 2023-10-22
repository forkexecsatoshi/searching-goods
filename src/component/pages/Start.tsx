import { memo } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import LeftBg from "../../asset/top-left-bg.svg";
import RightBg from "../../asset/top-right-bg.svg";
import { fonts, media } from "../../asset/theme";

interface StartProps {
  onClick: () => void;
}

const Start = memo((props: StartProps) => {
  return (
    <Container>
      <img src={LeftBg} className="left-bg" alt="left-bg" />
      <img src={RightBg} className="right-bg" alt="right-bg" />
      <Title>
        あなたの欲しいが必ず見つかる <br className="responsive" />
        WSPTプロダクト診断
      </Title>
      <Content>
        簡単な質問に答えるだけであなたに
        <br className="responsive" />
        最適なアイテムを選びます。
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
  width: 90%;
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
  > img {
    z-index: -1;
  }
  .responsive {
    display: none;
  }
  @media (max-width: ${media.tab_2}) {
    .responsive {
      display: block;
    }
  }
`;

const Title = styled.h2`
  font-size: ${fonts.xl};
  text-align: center;
  @media (max-width: ${media.sp}) {
    font-size: ${fonts.l};
  }
`;

const Content = styled.p`
  font-size: ${fonts.l};
  text-align: center;
  @media (max-width: ${media.sp}) {
    font-size: ${fonts.m};
  }
`;
