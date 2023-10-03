import { Question } from "./type";
export const questions: Question[] = [
  [
    { title: "質問1" },
    [
      { text: "ビットを選ぶ", value: 1 },
      { text: "マシンを選ぶ", value: 2 },
      { text: "集塵機を選ぶ", value: 3 },
      { text: "ライトを選ぶ", value: 4 },
      { text: "ダイヤモンドファイルを選ぶ", value: 5 },
      { text: "その他", value: 6 },
    ],
  ],
  [
    { title: "ビットを選ぶ" },
    [
      { text: "ハンド施術", value: 6 },
      { text: "フット施術", value: 7 },
    ],
  ],
  [
    { title: "マシンを選ぶ" },
    [
      { text: "サロンプロ仕様", value: NaN },
      { text: "サロン1～2年目", value: NaN },
      { text: "セルフメイン", value: NaN },
      { text: "ライトを選ぶ", value: NaN },
      { text: "フット用高トルク", value: NaN },
    ],
  ],
  [
    { title: "集塵機を選ぶ" },
    [
      { text: "充電式", value: NaN },
      { text: "コード式", value: NaN },
    ],
  ],
  [
    { title: "ライトを選ぶ" },
    [
      { text: "本硬化～仮硬化", value: NaN },
      { text: "仮硬化", value: NaN },
    ],
  ],

  [
    { title: "ダイヤモンドファイルを選ぶ" },
    [
      { text: "ハンド用ファイル", value: 6 },
      { text: "フット用ファイル", value: 7 },
    ],
  ],
  [
    { title: "ハンド施術" },
    [
      { text: "オフ＆フィルイン", value: NaN },
      { text: "ケア＆プレパレーション", value: NaN },
      { text: "ストーンオフ", value: NaN },
    ],
  ],
  [
    { title: "フット施術" },
    [
      { text: "オフ＆フィルイン", value: NaN },
      { text: "ケア＆プレパレーション", value: NaN },
      { text: "ストーンオフ", value: NaN },
    ],
  ],
];
