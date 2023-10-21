type Category = "bit" | "machine" | "dustCollector" | "light" | "diamondFile";

export type Choice = { text: string; value: number | Category };

export type Result = { text: string; img: string, url: string }[];

export type QuestionAnswer = {
  text: string;
  next:
    | []
    | [
        { title: string; answer: string },
        { text: string; next: any; answer?: Result }[]
      ];
  answer?: any[];
};

export type QuestionType = [
  { title: string; answer: string },
  QuestionAnswer[]
];

export type Stage = "top" | "question" | "finish";
