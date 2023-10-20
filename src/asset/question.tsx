import { QuestionType } from "./type";

// // question template
// [
//   { title: "ソフトジェル", answer: "ソフトジェル" },
//   [
//     { text: "選択肢", next: [] },
//     { text: "選択肢", next: [] },
//     { text: "選択肢", next: [] },
//     { text: "選択肢", next: [] },
//   ],
// ];

// // answer template
// [
//   { text: "", img: "" },
//   { text: "", img: "" },
//   { text: "", img: "" },
//   { text: "", img: "" },
//   { text: "", img: "" },
// ];

export const bitQuestions: QuestionType = [
  { title: "ビットを選ぶ", answer: "ビットを選ぶ" },
  [
    {
      text: "ハンド施術",
      next: [
        { title: "ハンド施術", answer: "ハンド施術" },
        [
          {
            text: "オフ＆フィルイン",
            next: [
              { title: "オフ＆フィルイン", answer: "オフ＆フィルイン" },
              [
                {
                  text: "オフ",
                  next: [
                    { title: "オフ", answer: "オフ" },
                    [
                      {
                        text: "ハードジェル",
                        next: [
                          { title: "ハードジェル", answer: "ハードジェル" },
                          [
                            {
                              text: "サロンで時短・上級者プロ向け",
                              next: [
                                {
                                  title: "サロンで時短・上級者プロ向け",
                                  answer: "サロンで時短・上級者プロ向け",
                                },
                                [
                                  {
                                    text: "面取り有",
                                    next: [
                                      {
                                        title: "面取り有",
                                        answer: "面取り有",
                                      },
                                      [
                                        {
                                          text: "ラージバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "ブラックビットラージXXC",
                                              img: "",
                                            },
                                            {
                                              text: "ブラックビットラージXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "ブラックビットスモールXXC",
                                              img: "",
                                            },
                                            {
                                              text: "ブラックビットスモールXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                      ],
                                    ],
                                  },
                                  {
                                    text: "面取り無し",
                                    next: [
                                      {
                                        title: "面取り無し",
                                        answer: "面取り無し",
                                      },
                                      [
                                        {
                                          text: "ラージバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットラージバレルXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                      ],
                                    ],
                                  },
                                  {
                                    text: "オーバル",
                                    next: [],
                                    answer: [
                                      { text: "スモールバレル", img: "" },
                                      {
                                        text: "オーロラビットスモールオーバルXC",
                                        img: "",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      { text: "テーパーラウンド M", img: "" },
                                      { text: "テーパートップXC", img: "" },
                                    ],
                                  },
                                ],
                              ],
                            },
                            {
                              text: "ゆっくり丁寧に・中級者向け",
                              next: [
                                {
                                  title: "ゆっくり丁寧に・中級者向け",
                                  answer: "ゆっくり丁寧に・中級者向け",
                                },
                                [
                                  {
                                    text: "ラージバレル",
                                    next: [],
                                    answer: [
                                      { text: "ブラックビットXC", img: "" },
                                      { text: "ブラックビットC", img: "" },
                                      { text: "オーロラビットXC", img: "" },
                                      { text: "オーロラビットC", img: "" },
                                    ],
                                  },
                                  {
                                    text: "スモールバレル",
                                    next: [],
                                    answer: [
                                      {
                                        text: "ブラックビットスモールXC",
                                        img: "",
                                      },
                                      {
                                        text: "ブラックビットスモールC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルXC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルC",
                                        img: "",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      { text: "テーパーラウンド C", img: "" },
                                      { text: "テーパートップXC", img: "" },
                                      { text: "テーパートップC", img: "" },
                                    ],
                                  },
                                ],
                              ],
                            },
                            {
                              text: "サロンワーク始めて1年目",
                              next: [
                                {
                                  title: "サロンワーク始めて1年目",
                                  answer: "サロンワーク始めて1年目",
                                },
                                [
                                  {
                                    text: "ラージバレル",
                                    next: [],
                                    answer: [
                                      { text: "ブラックビットXC", img: "" },
                                      { text: "ブラックビットC", img: "" },
                                      { text: "オーロラビットXC", img: "" },
                                      { text: "オーロラビットC", img: "" },
                                    ],
                                  },
                                  {
                                    text: "スモールバレル",
                                    next: [],
                                    answer: [
                                      {
                                        text: "ブラックビットスモールXC",
                                        img: "",
                                      },
                                      {
                                        text: "ブラックビットスモールC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルXC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルC",
                                        img: "",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スムーストップ",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットスムーストップXC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスムーストップC",
                                        img: "",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スモールスムーストップ",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットスモールスムーストップXC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールスムーストップC",
                                        img: "",
                                      },
                                    ],
                                  },
                                ],
                              ],
                            },
                            {
                              text: "セルフネイラー様駆け出し",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージスムーストップC",
                                  img: "",
                                },
                                {
                                  text: "オーロラビットラージスムーストップM",
                                  img: "",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップC",
                                  img: "",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップM",
                                  img: "",
                                },
                                {
                                  text: "テーパーラウンドM",
                                  img: "",
                                },
                              ],
                            },
                          ],
                        ],
                      },
                      {
                        text: "ソフトジェル",
                        next: [
                          { title: "ソフトジェル", answer: "ソフトジェル" },
                          [
                            {
                              text: "サロンで時短・上級者プロ向け",
                              next: [
                                {
                                  title: "サロンで時短・上級者プロ向け",
                                  answer: "サロンで時短・上級者プロ向け",
                                },
                                [
                                  {
                                    text: "面取り有",
                                    next: [
                                      {
                                        title: "面取り有",
                                        answer: "面取り有",
                                      },
                                      [
                                        {
                                          text: "ラージバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットラージXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットラージXC",
                                              img: "",
                                            },
                                            {
                                              text: "ゴールドビットラージXXC",
                                              img: "",
                                            },
                                            {
                                              text: "ゴールドビットラージXC",
                                              img: "",
                                            },
                                            {
                                              text: "シルバービットラージXXC",
                                              img: "",
                                            },
                                            {
                                              text: "シルバービットラージXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットスモールXC",
                                              img: "",
                                            },
                                            {
                                              text: "ゴールドビットスモールXXC",
                                              img: "",
                                            },
                                            {
                                              text: "ゴールドビットスモールXC",
                                              img: "",
                                            },
                                            {
                                              text: "シルバービットスモールXXC",
                                              img: "",
                                            },
                                            {
                                              text: "シルバービットスモールXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                      ],
                                    ],
                                  },
                                  {
                                    text: "面取り無し",
                                    next: [
                                      {
                                        title: "面取り無し",
                                        answer: "面取り無し",
                                      },
                                      [
                                        {
                                          text: "ラージバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットラージバレルXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "",
                                            },
                                          ],
                                        },
                                      ],
                                    ],
                                  },
                                  {
                                    text: "オーバル",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットスモールオーバルXC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールオーバルC",
                                        img: "",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      { text: "テーパーラウンド M", img: "" },
                                      { text: "テーパートップC", img: "" },
                                    ],
                                  },
                                ],
                              ],
                            },
                            {
                              text: "ゆっくり丁寧に・中級者向け",
                              next: [
                                {
                                  title: "ゆっくり丁寧に・中級者向け",
                                  answer: "ゆっくり丁寧に・中級者向け",
                                },
                                [
                                  {
                                    text: "面取り有",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットラージXC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットラージC",
                                        img: "",
                                      },
                                      {
                                        text: "ゴールドビットラージXC",
                                        img: "",
                                      },
                                      {
                                        text: "ゴールドビットラージC",
                                        img: "",
                                      },
                                      {
                                        text: "シルバービットラージXC",
                                        img: "",
                                      },
                                      {
                                        text: "シルバービットラージC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールXC",
                                        img: "",
                                      },
                                      {
                                        text: "オーロラビットスモールC",
                                        img: "",
                                      },
                                      {
                                        text: "ゴールドビットスモールXC",
                                        img: "",
                                      },
                                      {
                                        text: "ゴールドビットスモールC",
                                        img: "",
                                      },
                                      {
                                        text: "シルバービットスモールXC",
                                        img: "",
                                      },
                                      {
                                        text: "シルバービットスモールC",
                                        img: "",
                                      },
                                    ],
                                  },
                                  { text: "オーバル", next: [] },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      { text: "テーパーラウンド M", img: "" },
                                      { text: "テーパートップC", img: "" },
                                    ],
                                  },
                                ],
                              ],
                            },
                            {
                              text: "サロンワーク始めて1年目",
                              next: [],
                              answer: [
                                { text: "オーロラビットラージC", img: "" },
                                { text: "オーロラビットラージM", img: "" },
                                { text: "オーロラビットスモールC", img: "" },
                                { text: "オーロラビットスモールM", img: "" },
                              ],
                            },
                            {
                              text: "セルフネイラー様駆け出し",
                              next: [],
                              answer: [
                                { text: "オーロラビットラージC", img: "" },
                                { text: "オーロラビットラージM", img: "" },
                                { text: "オーロラビットスモールC", img: "" },
                                { text: "オーロラビットスモールM", img: "" },
                              ],
                            },
                          ],
                        ],
                      },
                      {
                        text: "アクリル",
                        next: [
                          { title: "アクリル", answer: "アクリル" },
                          [
                            {
                              text: "サロンで時短・上級者プロ向け",
                              next: [],
                              answer: [
                                { text: "ブラックビットラージXXC", img: "" },
                                { text: "ブラックビットラージXC", img: "" },
                                {
                                  text: "ブラックビットスモールXXC",
                                  img: "",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "",
                                },
                              ],
                            },
                            {
                              text: "ゆっくり丁寧に・中級者向け",
                              next: [],
                              answer: [
                                { text: "ブラックビットラージXC", img: "" },
                                { text: "ブラックビットラージC", img: "" },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "",
                                },
                              ],
                            },
                            {
                              text: "サロンワーク始めて1年目",
                              next: [],
                              answer: [
                                { text: "ブラックビットラージXC", img: "" },
                                { text: "ブラックビットラージC", img: "" },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "",
                                },
                              ],
                            },
                          ],
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "フィルイン",
                  next: [
                    { title: "フィルイン", answer: "フィルイン" },
                    [
                      {
                        text: "トップカラー層削り",
                        next: [
                          {
                            title: "トップカラー層削り",
                            answer: "トップカラー層削り",
                          },
                          [
                            {
                              text: "アクリル・ハードジェル",
                              next: [],
                              answer: [
                                { text: "ブラックビットラージC", img: "" },
                                { text: "ブラックビットラージM", img: "" },
                                { text: "ブラックビットスモールC", img: "" },
                                { text: "オーロラビットラージC", img: "" },
                                { text: "オーロラビットラージM", img: "" },
                                { text: "オーロラビットスモールC", img: "" },
                                { text: "オーロラビットスモールM", img: "" },
                              ],
                            },
                            {
                              text: "ソフトジェル",
                              next: [],
                              answer: [
                                { text: "オーロラビットラージC", img: "" },
                                { text: "オーロラビットラージM", img: "" },
                                { text: "オーロラビットスモールC", img: "" },
                                { text: "オーロラビットスモールM", img: "" },
                              ],
                            },
                          ],
                        ],
                      },
                      {
                        text: "リフト直し・仕上げ、段差取り",
                        next: [],
                        answer: [
                          { text: "オーロラビット コーンＦ", img: "" },
                          { text: "テーパーラウンド F", img: "" },
                          { text: "スモールコーン", img: "" },
                          { text: "セラマルチフィル", img: "" },
                          {
                            text: "シルバービットスモールスムーストップ F",
                            img: "",
                          },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "2in1次世代ビット",
                  next: [
                    {
                      title: "オフ+フィルイン2in1",
                      answer: "2in1次世代ビット",
                    },
                    [
                      {
                        text: "先端丸型で安心安全",
                        next: [],
                        answer: [
                          { text: "トリプルフィル", img: "" },
                          { text: "コンビネーションコーン", img: "" },
                          { text: "フィルインデュオ", img: "" },
                        ],
                      },
                      {
                        text: "先端平らで際まで攻める",
                        next: [],
                        answer: [
                          { text: "FUJIビット", img: "" },
                          { text: "コンビネーションテーパー", img: "" },
                          { text: "クロステーパー", img: "" },
                        ],
                      },
                    ],
                  ],
                },
              ],
            ],
          },
          {
            text: "ケア＆プレパレーション",
            next: [
              {
                title: "ケア＆プレパレーション",
                answer: "ケア＆プレパレーション",
              },
              [
                {
                  text: "キューティクルケア",
                  next: [
                    {
                      title: "甘皮キューティクル",
                      answer: "キューティクルケア",
                    },
                    [
                      {
                        text: "キューティクルのプッシュアップ",
                        next: [],
                        answer: [
                          { text: "スモールテーパー", img: "" },
                          { text: "ミニポイント", img: "" },
                          { text: "グリーンポイント", img: "" },
                          { text: "ベビーテーパー", img: "" },
                          { text: "ベビーポイント", img: "" },
                          { text: "スリムゴールドダイヤ", img: "" },
                          { text: "キューティクルケア", img: "" },
                          {
                            text: "オーロラダイヤモンドショートコーン",
                            img: "",
                          },
                        ],
                      },
                      {
                        text: "ポケット・コーナー施術",
                        next: [],
                        answer: [
                          { text: "ゴールドダイヤ ニードル", img: "" },
                          { text: "リムーバルスティック", img: "" },
                          { text: "オニクリーン", img: "" },
                          { text: "ライスポイント", img: "" },
                          { text: "アンダークリーナー", img: "" },
                        ],
                      },
                      {
                        text: "ルースキューティクルの除去",
                        next: [],
                        answer: [
                          { text: "ボーラー", img: "" },
                          { text: "キューティクルニッパー", img: "" },
                          { text: "ライスポイント", img: "" },
                          { text: "アンダークリーナー", img: "" },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "ハードスキンケア",
                  next: [
                    { title: "ハードスキンケア", answer: "ハードスキンケア" },
                    [
                      {
                        text: "広い範囲",
                        next: [],
                        answer: [
                          { text: "スキンスムーサー", img: "" },
                          { text: "オーロラスキンケア", img: "" },
                          { text: "スリムゴールドダイヤ", img: "" },
                          { text: "スキンクリーナー", img: "" },
                          { text: "ダイヤモンドテーパー", img: "" },
                          { text: "ピンクポイント", img: "" },
                          { text: "グリーンポイント", img: "" },
                          { text: "ゴールドダイヤ ニードル", img: "" },
                          { text: "サイドコーナー", img: "" },
                        ],
                      },
                      {
                        text: "狭い範囲",
                        next: [],
                        answer: [
                          { text: "ソフティ", img: "" },
                          { text: "ボーラー C", img: "" },
                          { text: "ミニポイント", img: "" },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "サンディング",
                  next: [],
                  answer: [
                    { text: "サンディングバンド", img: "" },
                    { text: "ブロンズダイヤモンドスリムパレル", img: "" },
                    { text: "ダイヤモンドテーパー", img: "" },
                    { text: "ラージバレル", img: "" },
                    { text: "スモールバレル", img: "" },
                  ],
                },
              ],
            ],
          },
          {
            text: "ストーンオフ",
            next: [],
            answer: [
              { text: "ストーンリムーバー", img: "" },
              { text: "ストーンオフ", img: "" },
              { text: "ベビーコーン", img: "" },
            ],
          },
        ],
      ],
    },
    { text: "フット施術", next: [] },
  ],
];

export const machineQuestions = [
  [{ title: "マシンを選ぶ", answer: "machine" }, ["ハンド施術", "フット施術"]],
];

export const dustCollectorQuestions = [
  [
    { title: "集塵機を選ぶ", answer: "dustCollector" },
    ["ハンド施術", "フット施術"],
  ],
];

export const lightQuestions = [
  [{ title: "ライトを選ぶ", answer: "light" }, ["ハンド施術", "フット施術"]],
];

export const diamondFileQuestions = [
  [
    { title: "ダイヤモンドファイルを選ぶ", answer: "diamondFile" },
    ["ハンド施術", "フット施術"],
  ],
];

export const questions: QuestionType[] = [
  [
    { title: "何をお探しですか？", answer: "first" },
    [
      { text: "ビットを選ぶ", next: bitQuestions },
      // { text: "マシンを選ぶ", next: machineQuestions },
      // { text: "集塵機を選ぶ", next: dustCollectorQuestions },
      // { text: "ライトを選ぶ", next: lightQuestions },
      // { text: "ダイヤモンドファイルを選ぶ", next: diamondFileQuestions },
    ],
  ],
];
