import { QuestionType } from "../type";

const bitQuestions: QuestionType = [
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
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "ブラックビットラージXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "top-right-bg.svg",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "ブラックビットスモールXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "ブラックビットスモールXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "top-right-bg.svg",
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
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "top-right-bg.svg",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "top-right-bg.svg",
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
                                        text: "スモールバレル",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールオーバルXC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      {
                                        text: "テーパーラウンド M",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "テーパートップXC",
                                        img: "top-right-bg.svg",
                                      },
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
                                      {
                                        text: "ブラックビットXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ブラックビットC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スモールバレル",
                                    next: [],
                                    answer: [
                                      {
                                        text: "ブラックビットスモールXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ブラックビットスモールC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      {
                                        text: "テーパーラウンド C",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "テーパートップXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "テーパートップC",
                                        img: "top-right-bg.svg",
                                      },
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
                                      {
                                        text: "ブラックビットXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ブラックビットC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スモールバレル",
                                    next: [],
                                    answer: [
                                      {
                                        text: "ブラックビットスモールXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ブラックビットスモールC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スムーストップ",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットスムーストップXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスムーストップC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スモールスムーストップ",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットスモールスムーストップXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールスムーストップC",
                                        img: "top-right-bg.svg",
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
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットラージスムーストップM",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップM",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "テーパーラウンドM",
                                  img: "top-right-bg.svg",
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
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットラージXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "ゴールドビットラージXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "ゴールドビットラージXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "シルバービットラージXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "シルバービットラージXC",
                                              img: "top-right-bg.svg",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットスモールXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "ゴールドビットスモールXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "ゴールドビットスモールXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "シルバービットスモールXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "シルバービットスモールXC",
                                              img: "top-right-bg.svg",
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
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "top-right-bg.svg",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "top-right-bg.svg",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "top-right-bg.svg",
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
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールオーバルC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      {
                                        text: "テーパーラウンド M",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "テーパートップC",
                                        img: "top-right-bg.svg",
                                      },
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
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットラージC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ゴールドビットラージXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ゴールドビットラージC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "シルバービットラージXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "シルバービットラージC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "オーロラビットスモールC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ゴールドビットスモールXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "ゴールドビットスモールC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "シルバービットスモールXC",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "シルバービットスモールC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                  { text: "オーバル", next: [] },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      {
                                        text: "テーパーラウンド M",
                                        img: "top-right-bg.svg",
                                      },
                                      {
                                        text: "テーパートップC",
                                        img: "top-right-bg.svg",
                                      },
                                    ],
                                  },
                                ],
                              ],
                            },
                            {
                              text: "サロンワーク始めて1年目",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "top-right-bg.svg",
                                },
                              ],
                            },
                            {
                              text: "セルフネイラー様駆け出し",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "top-right-bg.svg",
                                },
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
                                {
                                  text: "ブラックビットラージXXC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットラージXC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットスモールXXC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "top-right-bg.svg",
                                },
                              ],
                            },
                            {
                              text: "ゆっくり丁寧に・中級者向け",
                              next: [],
                              answer: [
                                {
                                  text: "ブラックビットラージXC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットラージC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "top-right-bg.svg",
                                },
                              ],
                            },
                            {
                              text: "サロンワーク始めて1年目",
                              next: [],
                              answer: [
                                {
                                  text: "ブラックビットラージXC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットラージC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "top-right-bg.svg",
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
                                {
                                  text: "ブラックビットラージC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットラージM",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットラージC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "top-right-bg.svg",
                                },
                              ],
                            },
                            {
                              text: "ソフトジェル",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "top-right-bg.svg",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "top-right-bg.svg",
                                },
                              ],
                            },
                          ],
                        ],
                      },
                      {
                        text: "リフト直し・仕上げ、段差取り",
                        next: [],
                        answer: [
                          {
                            text: "オーロラビット コーンＦ",
                            img: "top-right-bg.svg",
                          },
                          {
                            text: "テーパーラウンド F",
                            img: "top-right-bg.svg",
                          },
                          { text: "スモールコーン", img: "top-right-bg.svg" },
                          { text: "セラマルチフィル", img: "top-right-bg.svg" },
                          {
                            text: "シルバービットスモールスムーストップ F",
                            img: "top-right-bg.svg",
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
                          { text: "トリプルフィル", img: "top-right-bg.svg" },
                          {
                            text: "コンビネーションコーン",
                            img: "top-right-bg.svg",
                          },
                          { text: "フィルインデュオ", img: "top-right-bg.svg" },
                        ],
                      },
                      {
                        text: "先端平らで際まで攻める",
                        next: [],
                        answer: [
                          { text: "FUJIビット", img: "top-right-bg.svg" },
                          {
                            text: "コンビネーションテーパー",
                            img: "top-right-bg.svg",
                          },
                          { text: "クロステーパー", img: "top-right-bg.svg" },
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
                          { text: "スモールテーパー", img: "top-right-bg.svg" },
                          { text: "ミニポイント", img: "top-right-bg.svg" },
                          { text: "グリーンポイント", img: "top-right-bg.svg" },
                          { text: "ベビーテーパー", img: "top-right-bg.svg" },
                          { text: "ベビーポイント", img: "top-right-bg.svg" },
                          {
                            text: "スリムゴールドダイヤ",
                            img: "top-right-bg.svg",
                          },
                          {
                            text: "キューティクルケア",
                            img: "top-right-bg.svg",
                          },
                          {
                            text: "オーロラダイヤモンドショートコーン",
                            img: "top-right-bg.svg",
                          },
                        ],
                      },
                      {
                        text: "ポケット・コーナー施術",
                        next: [],
                        answer: [
                          {
                            text: "ゴールドダイヤ ニードル",
                            img: "top-right-bg.svg",
                          },
                          {
                            text: "リムーバルスティック",
                            img: "top-right-bg.svg",
                          },
                          { text: "オニクリーン", img: "top-right-bg.svg" },
                          { text: "ライスポイント", img: "top-right-bg.svg" },
                          {
                            text: "アンダークリーナー",
                            img: "top-right-bg.svg",
                          },
                        ],
                      },
                      {
                        text: "ルースキューティクルの除去",
                        next: [],
                        answer: [
                          { text: "ボーラー", img: "top-right-bg.svg" },
                          {
                            text: "キューティクルニッパー",
                            img: "top-right-bg.svg",
                          },
                          { text: "ライスポイント", img: "top-right-bg.svg" },
                          {
                            text: "アンダークリーナー",
                            img: "top-right-bg.svg",
                          },
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
                          { text: "スキンスムーサー", img: "top-right-bg.svg" },
                          {
                            text: "オーロラスキンケア",
                            img: "top-right-bg.svg",
                          },
                          {
                            text: "スリムゴールドダイヤ",
                            img: "top-right-bg.svg",
                          },
                          { text: "スキンクリーナー", img: "top-right-bg.svg" },
                          {
                            text: "ダイヤモンドテーパー",
                            img: "top-right-bg.svg",
                          },
                          { text: "ピンクポイント", img: "top-right-bg.svg" },
                          { text: "グリーンポイント", img: "top-right-bg.svg" },
                          {
                            text: "ゴールドダイヤ ニードル",
                            img: "top-right-bg.svg",
                          },
                          { text: "サイドコーナー", img: "top-right-bg.svg" },
                        ],
                      },
                      {
                        text: "狭い範囲",
                        next: [],
                        answer: [
                          { text: "ソフティ", img: "top-right-bg.svg" },
                          { text: "ボーラー C", img: "top-right-bg.svg" },
                          { text: "ミニポイント", img: "top-right-bg.svg" },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "サンディング",
                  next: [],
                  answer: [
                    { text: "サンディングバンド", img: "top-right-bg.svg" },
                    {
                      text: "ブロンズダイヤモンドスリムパレル",
                      img: "top-right-bg.svg",
                    },
                    { text: "ダイヤモンドテーパー", img: "top-right-bg.svg" },
                    { text: "ラージバレル", img: "top-right-bg.svg" },
                    { text: "スモールバレル", img: "top-right-bg.svg" },
                  ],
                },
              ],
            ],
          },
          {
            text: "ストーンオフ",
            next: [],
            answer: [
              { text: "ストーンリムーバー", img: "top-right-bg.svg" },
              { text: "ストーンオフ", img: "top-right-bg.svg" },
              { text: "ベビーコーン", img: "top-right-bg.svg" },
            ],
          },
        ],
      ],
    },
    { text: "フット施術", next: [] },
  ],
];

export default bitQuestions;
