import { QuestionType } from "./type";
export const questions: QuestionType[] = [
  [
    { title: "質問1", answer: "first" },
    [
      "ビットを選ぶ",
      "マシンを選ぶ",
      "集塵機を選ぶ",
      "ライトを選ぶ",
      "ダイヤモンドファイルを選ぶ",
    ],
  ],
];

export const bitQuestions: QuestionType[] = [
  [{ title: "ビットを選ぶ", answer: "bit" }, ["ハンド施術", "フット施術"]],
  [
    { title: "ハンド施術", answer: "ハンド施術" },
    ["オフ＆フィルイン", "ケア＆プレパレーション", "ストーンオフ"],
  ],
];

export const machineQuestions: QuestionType[] = [
  [{ title: "マシンを選ぶ", answer: "machine" }, ["ハンド施術", "フット施術"]],
];

export const dustCollectorQuestions: QuestionType[] = [
  [
    { title: "集塵機を選ぶ", answer: "dustCollector" },
    ["ハンド施術", "フット施術"],
  ],
];

export const lightQuestions: QuestionType[] = [
  [{ title: "ライトを選ぶ", answer: "light" }, ["ハンド施術", "フット施術"]],
];

export const diamondFileQuestions: QuestionType[] = [
  [
    { title: "ダイヤモンドファイルを選ぶ", answer: "diamondFile" },
    ["ハンド施術", "フット施術"],
  ],
];
