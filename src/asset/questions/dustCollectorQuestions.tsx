import { QuestionType } from "../type";

const dustCollectorQuestions: QuestionType = [
  { title: "集塵機を選ぶ", answer: "dustCollector" },
  [
    {
      text: "ホースタイプ",
      next: [],
      answer: [
        {
          text: "ヴァンスーサー",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
      ],
    },
    {
      text: "平置きタイプ",
      next: [
        { title: "平置きタイプ", answer: "平置きタイプ" },
        [
          {
            text: "充電式",
            next: [],
            answer: [
              {
                text: "ダスティー充電式",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
            ],
          },
          {
            text: "コード式",
            next: [],
            answer: [
              {
                text: "ダスティーコード式",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "キューブ",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "DSC-100",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "ヴァンスーサースクエアタイプ",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
            ],
          },
        ],
      ],
    },
  ],
];

export default dustCollectorQuestions;
