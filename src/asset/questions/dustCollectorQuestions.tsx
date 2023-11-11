import { QuestionType } from "../type";

const dustCollectorQuestions: QuestionType = [
  { title: "集塵機を選ぶ", answer: "dustCollector" },
  [
    {
      text: "充電式",
      next: [],
      answer: [
        {
          text: "シルフィー",
          img: "dustCollectorQuestions/DUSTY.png",　//変更必要
          url: "https://wspt-japan.shop-pro.jp/?pid=146333276",//変更必要
        },
        {
          text: "ダスティー充電式",
          img: "dustCollectorQuestions/DUSTY.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=146333276",
        },
      ],
    },
    {
      text: "コード式",
      next: [],
      answer: [
        {
          text: "ホース型集塵機ヴァンスーサー",
          img: "dustCollectorQuestions/VanSuthers.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=145084324",
        }, 
        {
          text: "ハニカムダスターコード式",
          img: "dustCollectorQuestions/honeycomb.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177845029",
        },
        {
          text: "ダスティーコード式",
          img: "dustCollectorQuestions/DUSTYcodeshiki.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=156260498",
        },
        {
          text: "キューブ",
          img: "dustCollectorQuestions/CUBE.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=174056274",

        },
        {
          text: "DSC-100",
          img: "dustCollectorQuestions/DSC-100.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=103112079",
        },
  
      ],
    },
  ],
];

export default dustCollectorQuestions;
