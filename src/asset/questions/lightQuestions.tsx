import { QuestionType } from "../type";

const lightQuestions: QuestionType = [
  { title: "ライトを選ぶ", answer: "light" },
  [
    {
      text: "置き型タイプ",
      next: [],
      answer: [
        {
          text: "ステンライト充電式",
          img: "lightQuestions/stainlightjyuden.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=154050057",
        },
        {
          text: "ステンライトコンセント式",
          img: "lightQuestions/stainlightconsent.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=156183187",
        },
        {
          text: "WF4-Sコンセント式",
          img: "lightQuestions/stainlightconsent.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=156183187",
        },
        {
          text: "K2",
          img: "lightQuestions/K2.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=154855688",
        },
        {
          text: "F3",
          img: "lightQuestions/F3.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=154855854",
        },
      ],
    },
    {
      text: "ハンディタイプ",
      next: [],
      answer: [
        {
          text: "ブライトスティック",
          img: "lightQuestions/Brightstick.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=147369115",
        },
        {
          text: "パワースティックライト",
          img: "lightQuestions/POWERStickLight.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177462330",
        },
        {
          text: "スティックライト",
          img: "lightQuestions/StickLight.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=172823315",
        },
        {
          text: "MINI",
          img: "lightQuestions/MINI.PNG",
          url: "https://wspt-japan.shop-pro.jp/?pid=137032703",
        },
      ],
    },
  ],
];

export default lightQuestions;
