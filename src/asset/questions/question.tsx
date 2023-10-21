import { QuestionType } from "../type";
import bitQuestions from "./bitQuestions";
import machineQuestions from "./machineQuestions";
import dustCollectorQuestions from "./dustCollectorQuestions";
import lightQuestions from "./lightQuestions";
import diamondFileQuestions from "./diamondFileQuestions";

// // question template
// [
//   { title: "ソフトジェル", answer: "ソフトジェル" },
//   [
//     { text: "選択肢", next: [] },
//     { text: "選択肢", next: [] },
//     { text: "選択肢", next: [] },
//     { text: "選択肢", next: [] },
//   ],
// ];

// // answer template
// [
//   { text: "", img: "sample.png", url: "https://wspt-japan.shop-pro.jp/?pid=177731756" },
//   { text: "", img: "sample.png", url: "https://wspt-japan.shop-pro.jp/?pid=177731756" },
//   { text: "", img: "sample.png", url: "https://wspt-japan.shop-pro.jp/?pid=177731756" },
//   { text: "", img: "sample.png", url: "https://wspt-japan.shop-pro.jp/?pid=177731756" },
//   { text: "", img: "sample.png", url: "https://wspt-japan.shop-pro.jp/?pid=177731756" },
// ];

export const questions: QuestionType[] = [
  [
    { title: "何をお探しですか？", answer: "first" },
    [
      { text: "ビットを選ぶ", next: bitQuestions },
      { text: "マシンを選ぶ", next: machineQuestions },
      { text: "集塵機を選ぶ", next: dustCollectorQuestions },
      { text: "ライトを選ぶ", next: lightQuestions },
      { text: "ダイヤモンドファイルを選ぶ", next: diamondFileQuestions },
    ],
  ],
];
