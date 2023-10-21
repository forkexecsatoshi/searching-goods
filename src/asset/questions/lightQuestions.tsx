import { QuestionType } from "../type";

const lightQuestions: QuestionType = [
  { title: "ライトを選ぶ", answer: "light" },
  [
    {
      text: "本硬化～仮硬化",
      next: [
        { title: "本硬化~仮硬化", answer: "本硬化~仮硬化" },
        [
          {
            text: "置き型タイプ",
            next: [],
            answer: [
              {
                text: "ステンライト充電式",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "ステンライトコンセント式",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "WF4-Sコンセント式",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "K2",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "F3",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
            ],
          },
          {
            text: "ハンディタイプ",
            next: [],
            answer: [
              {
                text: "ブライトスティック",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "パワースティックライト",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
            ],
          },
        ],
      ],
    },
    {
      text: "仮硬化",
      next: [],
      answer: [
        {
          text: "スティックライト",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
        {
          text: "MINI",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
        {
          text: "タッチライト",
          img: "sample.png",
          url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
        },
      ],
    },
  ],
];

export default lightQuestions;
