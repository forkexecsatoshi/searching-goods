import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import QA from "./component/QA";

const App = () => {
  return (
    <Container>
      <QA
        question="質問１"
        choices={[
          { text: "ビットを選ぶ", value: 1 },
          { text: "マシンを選ぶ", value: 1 },
          { text: "集塵機を選ぶ", value: 1 },
          { text: "ライトを選ぶ", value: 1 },
          { text: "ダイヤモンドファイルを選ぶ", value: 1 },
          { text: "その他", value: 1 },
        ]}
        onClick={() => {}}
        onClickPrevious={() => {}}
        onClickTop={() => {}}
      />
    </Container>
  );
};

export default App;

// styled-componentsというライブラリを用いてこのようにcssを記述することができる
const Container = styled.div``;
