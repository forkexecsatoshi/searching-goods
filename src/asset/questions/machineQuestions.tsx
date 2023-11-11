import { QuestionType } from "../type";

const machineQuestions: QuestionType = [
  { title: "マシンを選ぶ", answer: "machine" },
  [
    {
      text: "サロン仕様",
      next: [],
      answer: [
        {
          text: "プロ向けROBO",
          img: "machineQuestions/ROBO.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=159455152",
        },
        {
          text: "ワンボタンで簡単操作！One",
          img: "machineQuestions/One.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=174293660",
        },
        {
          text: "スタンダードなPOCO",
          img: "machineQuestions/POCO.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=155307007",
        },
      ],
    },
    {
      text: "初心者～中級者用",
      next: [],
      answer: [
        {
          text: "ワンボタンで簡単操作！One",
          img: "machineQuestions/One.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=174293660",
        },
        {
          text: "SQUARE",
          img: "machineQuestions/SQUARE.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=168020597",
        },
        {
          text: "ジャックス",
          img: "machineQuestions/Jacks.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=154904474"
        },  
        {
          text: "ピース",
          img: "machineQuestions/Peace.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=176973130",
        },
      ],
    },
    {
      text: "フット用マシン",
      next: [],
      answer: [
        {
          text: "ハイトルクマシン Riki",
          img: "machineQuestions/Riki.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=168002112",
        },
        {
          text: "コードレスマシン ピース",
          img: "machineQuestions/Peace.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=176973130",
        },
      ],
    },
  ],
];

export default machineQuestions;
