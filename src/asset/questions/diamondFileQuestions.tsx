import { QuestionType } from "../type";

const diamondFileQuestions: QuestionType = [
  { title: "ダイヤモンドファイルを選ぶ", answer: "diamondFile" },
  [
    {
      text: "ハンド用ファイル",
      next: [
        { title: "ハンド用ファイル", answer: "ハンド用ファイル" },
        [
          {
            text: "両面ファイル",
            next: [
              {
                text: "薄さ重視",
                next: [],
                answer: [
                  {
                    text: "ハイグレードダイヤモンドファイル",
                    img: "sample.png",
                    url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
                  },
                  {
                    text: "ダイヤモンドファイル スタンダード 180G 両面",
                    img: "sample.png",
                    url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
                  },
                ],
              },
              {
                text: "がっつり削りたい",
                next: [],
                answer: [
                  {
                    text: "セラダイヤモンドファイル  両面 #200/#240",
                    img: "sample.png",
                    url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
                  },
                ],
              },
            ],
          },
          {
            text: "片面ファイル",
            next: [],
          },
        ],
      ],
    },
    {
      text: "フット用ファイル",
      next: [
        { title: "フット用ファイル", answer: "フット用ファイル" },
        [
          {
            text: "両面ファイル",
            next: [],
            answer: [
              {
                text: "ステンレス製両面ダイヤモンドファイル 【スタンダード】",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "ステンレス製両面ダイヤモンドファイル 【ミニ】",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
            ],
          },
          {
            text: "片面ファイル",
            next: [],
            answer: [
              {
                text: "【日本トラブルネイルケア協会 みなもン先生監修】 ステンレス製 フット用 ショートファイル#100",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "【日本トラブルネイルケア協会 みなもン先生監修】 ステンレス製 フット用 ショートファイル#240",
                img: "sample.png",
                url: "https://wspt-japan.shop-pro.jp/?pid=177731756",
              },
              {
                text: "セラダイヤモンドファイル フット用 200#",
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

export default diamondFileQuestions;
