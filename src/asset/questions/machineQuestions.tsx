import { QuestionType } from "../type";

const machineQuestions: QuestionType = [
  { title: "マシンを選ぶ", answer: "machine" },
  [
    { text: "ハンド施術", next: [] },
    { text: "フット施術", next: [] },
  ],
];

export default machineQuestions;
