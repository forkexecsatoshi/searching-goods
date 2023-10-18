type Category = "bit" | "machine" | "dustCollector" | "light" | "diamondFile";

export type Choice = { text: string; value: number | Category };

export type QuestionType = [{ title: string; answer: string }, string[]];

export type Stage = "top" | "question" | "finish";
