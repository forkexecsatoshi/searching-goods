import { QuestionType } from "../type";

const dustCollectorQuestions: QuestionType = [
  { title: "集塵機を選ぶ", answer: "dustCollector" },
  [
    { text: "ハンド施術", next: [] },
    { text: "フット施術", next: [] },
  ],
];

export default dustCollectorQuestions;
