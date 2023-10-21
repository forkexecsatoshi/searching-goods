import { QuestionType } from "../type";

const machineQuestions: QuestionType = [
  { title: "マシンを選ぶ", answer: "machine" },
  [
    {
      text: "サロンプロ仕様",
      next: [],
      answer: [
        {
          text: "ROBO",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
      ],
    },
    {
      text: "サロン１～２年目",
      next: [],
      answer: [
        {
          text: "ROBO",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
        {
          text: "One",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
        {
          text: "POCO",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
      ],
    },
    {
      text: "セルフメイン",
      next: [],
      answer: [
        {
          text: "One",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
        {
          text: "SQUARE",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
        {
          text: "ジャックス",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
        {
          text: "ピース",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
      ],
    },
    {
      text: "フット用高トルク",
      next: [],
      answer: [
        {
          text: "Riki",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
      ],
    },
  ],
];

export default machineQuestions;
