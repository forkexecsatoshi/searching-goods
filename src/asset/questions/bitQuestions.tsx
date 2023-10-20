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
                                              img: "sample.png",
                                            },
                                            {
                                              text: "ブラックビットラージXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "sample.png",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "ブラックビットスモールXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "ブラックビットスモールXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "sample.png",
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
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "sample.png",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "sample.png",
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
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールオーバルXC",
                                        img: "sample.png",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      {
                                        text: "テーパーラウンド M",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "テーパートップXC",
                                        img: "sample.png",
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
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ブラックビットC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットC",
                                        img: "sample.png",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スモールバレル",
                                    next: [],
                                    answer: [
                                      {
                                        text: "ブラックビットスモールXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ブラックビットスモールC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルC",
                                        img: "sample.png",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      {
                                        text: "テーパーラウンド C",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "テーパートップXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "テーパートップC",
                                        img: "sample.png",
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
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ブラックビットC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットC",
                                        img: "sample.png",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スモールバレル",
                                    next: [],
                                    answer: [
                                      {
                                        text: "ブラックビットスモールXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ブラックビットスモールC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールバレルC",
                                        img: "sample.png",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スムーストップ",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットスムーストップXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスムーストップC",
                                        img: "sample.png",
                                      },
                                    ],
                                  },
                                  {
                                    text: "スモールスムーストップ",
                                    next: [],
                                    answer: [
                                      {
                                        text: "オーロラビットスモールスムーストップXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールスムーストップC",
                                        img: "sample.png",
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
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットラージスムーストップM",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップM",
                                  img: "sample.png",
                                },
                                {
                                  text: "テーパーラウンドM",
                                  img: "sample.png",
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
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットラージXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "ゴールドビットラージXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "ゴールドビットラージXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "シルバービットラージXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "シルバービットラージXC",
                                              img: "sample.png",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットスモールXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "ゴールドビットスモールXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "ゴールドビットスモールXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "シルバービットスモールXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "シルバービットスモールXC",
                                              img: "sample.png",
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
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットラージバレルXC",
                                              img: "sample.png",
                                            },
                                          ],
                                        },
                                        {
                                          text: "スモールバレル",
                                          next: [],
                                          answer: [
                                            {
                                              text: "オーロラビットスモールバレルXXC",
                                              img: "sample.png",
                                            },
                                            {
                                              text: "オーロラビットスモールバレルXC",
                                              img: "sample.png",
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
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールオーバルC",
                                        img: "sample.png",
                                      },
                                    ],
                                  },
                                  {
                                    text: "テーパー",
                                    next: [],
                                    answer: [
                                      {
                                        text: "テーパーラウンド M",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "テーパートップC",
                                        img: "sample.png",
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
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットラージC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ゴールドビットラージXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ゴールドビットラージC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "シルバービットラージXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "シルバービットラージC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "オーロラビットスモールC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ゴールドビットスモールXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "ゴールドビットスモールC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "シルバービットスモールXC",
                                        img: "sample.png",
                                      },
                                      {
                                        text: "シルバービットスモールC",
                                        img: "sample.png",
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
                                        img: "sample.png",
                                      },
                                      {
                                        text: "テーパートップC",
                                        img: "sample.png",
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
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "sample.png",
                                },
                              ],
                            },
                            {
                              text: "セルフネイラー様駆け出し",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "sample.png",
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
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットラージXC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットスモールXXC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "sample.png",
                                },
                              ],
                            },
                            {
                              text: "ゆっくり丁寧に・中級者向け",
                              next: [],
                              answer: [
                                {
                                  text: "ブラックビットラージXC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットラージC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "sample.png",
                                },
                              ],
                            },
                            {
                              text: "サロンワーク始めて1年目",
                              next: [],
                              answer: [
                                {
                                  text: "ブラックビットラージXC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットラージC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "sample.png",
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
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットラージM",
                                  img: "sample.png",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットラージC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "sample.png",
                                },
                              ],
                            },
                            {
                              text: "ソフトジェル",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "sample.png",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "sample.png",
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
                            img: "sample.png",
                          },
                          { text: "テーパーラウンド F", img: "sample.png" },
                          { text: "スモールコーン", img: "sample.png" },
                          { text: "セラマルチフィル", img: "sample.png" },
                          {
                            text: "シルバービットスモールスムーストップ F",
                            img: "sample.png",
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
                          { text: "トリプルフィル", img: "sample.png" },
                          { text: "コンビネーションコーン", img: "sample.png" },
                          { text: "フィルインデュオ", img: "sample.png" },
                        ],
                      },
                      {
                        text: "先端平らで際まで攻める",
                        next: [],
                        answer: [
                          { text: "FUJIビット", img: "sample.png" },
                          {
                            text: "コンビネーションテーパー",
                            img: "sample.png",
                          },
                          { text: "クロステーパー", img: "sample.png" },
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
                          { text: "スモールテーパー", img: "sample.png" },
                          { text: "ミニポイント", img: "sample.png" },
                          { text: "グリーンポイント", img: "sample.png" },
                          { text: "ベビーテーパー", img: "sample.png" },
                          { text: "ベビーポイント", img: "sample.png" },
                          { text: "スリムゴールドダイヤ", img: "sample.png" },
                          { text: "キューティクルケア", img: "sample.png" },
                          {
                            text: "オーロラダイヤモンドショートコーン",
                            img: "sample.png",
                          },
                        ],
                      },
                      {
                        text: "ポケット・コーナー施術",
                        next: [],
                        answer: [
                          {
                            text: "ゴールドダイヤ ニードル",
                            img: "sample.png",
                          },
                          { text: "リムーバルスティック", img: "sample.png" },
                          { text: "オニクリーン", img: "sample.png" },
                          { text: "ライスポイント", img: "sample.png" },
                          { text: "アンダークリーナー", img: "sample.png" },
                        ],
                      },
                      {
                        text: "ルースキューティクルの除去",
                        next: [],
                        answer: [
                          { text: "ボーラー", img: "sample.png" },
                          { text: "キューティクルニッパー", img: "sample.png" },
                          { text: "ライスポイント", img: "sample.png" },
                          { text: "アンダークリーナー", img: "sample.png" },
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
                          { text: "スキンスムーサー", img: "sample.png" },
                          { text: "オーロラスキンケア", img: "sample.png" },
                          { text: "スリムゴールドダイヤ", img: "sample.png" },
                          { text: "スキンクリーナー", img: "sample.png" },
                          { text: "ダイヤモンドテーパー", img: "sample.png" },
                          { text: "ピンクポイント", img: "sample.png" },
                          { text: "グリーンポイント", img: "sample.png" },
                          {
                            text: "ゴールドダイヤ ニードル",
                            img: "sample.png",
                          },
                          { text: "サイドコーナー", img: "sample.png" },
                        ],
                      },
                      {
                        text: "狭い範囲",
                        next: [],
                        answer: [
                          { text: "ソフティ", img: "sample.png" },
                          { text: "ボーラー C", img: "sample.png" },
                          { text: "ミニポイント", img: "sample.png" },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "サンディング",
                  next: [],
                  answer: [
                    { text: "サンディングバンド", img: "sample.png" },
                    {
                      text: "ブロンズダイヤモンドスリムパレル",
                      img: "sample.png",
                    },
                    { text: "ダイヤモンドテーパー", img: "sample.png" },
                    { text: "ラージバレル", img: "sample.png" },
                    { text: "スモールバレル", img: "sample.png" },
                  ],
                },
              ],
            ],
          },
          {
            text: "ストーンオフ",
            next: [],
            answer: [
              { text: "ストーンリムーバー", img: "sample.png" },
              { text: "ストーンオフ", img: "sample.png" },
              { text: "ベビーコーン", img: "sample.png" },
            ],
          },
        ],
      ],
    },
    {
      text: "フット施術",
      next: [
        { title: "フット施術", answer: "フット施術" },
        [
          {
            text: "フットケア",
            next: [
              { title: "フットケア", answer: "フットケア" },
              [
                {
                  text: "角質除去・スキンケア",
                  next: [
                    {
                      title: "角質除去・スキンケア",
                      answer: "角質除去・スキンケア",
                    },
                    [
                      {
                        text: "広い範囲",
                        next: [
                          { title: "広い範囲", answer: "広い範囲" },
                          [
                            {
                              text: "粗削り",
                              next: [],
                              answer: [
                                { text: "円盤ビット", img: "" },
                                { text: "ビッグバレル", img: "" },
                                { text: "サンディングキャップ", img: "" },
                                { text: "ダイヤ円盤ビット", img: "" },
                                { text: "メガコーン", img: "" },
                                { text: "バルーン", img: "" },
                              ],
                            },
                            {
                              text: "仕上げ",
                              next: [],
                              answer: [
                                { text: "シリコンポイント", img: "" },
                                { text: "つるピカセット", img: "" },
                              ],
                            },
                          ],
                        ],
                      },
                      {
                        text: "狭い範囲",
                        next: [
                          { title: "狭い範囲", answer: "狭い範囲" },
                          [
                            {
                              text: "粗削り",
                              next: [],
                              answer: [
                                { text: "円盤ビット", img: "" },
                                { text: "バルーン", img: "" },
                              ],
                            },
                            {
                              text: "仕上げ",
                              next: [],
                              answer: [],
                            },
                          ],
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "ペディケア",
                  next: [
                    { title: "ペディケア", answer: "ペディケア" },
                    [
                      {
                        text: "キューティクル",
                        next: [],
                        answer: [
                          { text: "オニクリーン", img: "" },
                          { text: "リムーバルスティック", img: "" },
                          { text: "ベビースキンクリーナー", img: "" },
                          { text: "再度クリーン", img: "" },
                          { text: "ミニポイント", img: "" },
                        ],
                      },
                      {
                        text: "プッシュアップ",
                        next: [],
                        answer: [{ text: "ミニポイント", img: "" }],
                      },
                    ],
                  ],
                },
                {
                  text: "タコ",
                  next: [
                    { title: "タコ", answer: "タコ" },
                    [
                      {
                        text: "粗削り",
                        next: [],
                        answer: [
                          { text: "ダイヤモンドメガ", img: "" },
                          { text: "円盤ビット", img: "" },
                          { text: "ビッグバレル", img: "" },
                          { text: "ボーラー", img: "" },
                        ],
                      },
                      {
                        text: "仕上げ",
                        next: [],
                        answer: [{ text: "シリコンポイント", img: "" }],
                      },
                    ],
                  ],
                },
              ],
            ],
          },
          {
            text: "トラブルフット",
            next: [
              { title: "トラブルフット", answer: "トラブルフット" },
              [
                {
                  text: "ウオノメ",
                  next: [
                    { title: "ウオノメ", answer: "ウオノメ" },
                    [
                      {
                        text: "粗削り",
                        next: [],
                        answer: [
                          { text: "ウオノメビット", img: "" },
                          { text: "ボーラーフレイザー", img: "" },
                          { text: "ウオノメセット", img: "" },
                          { text: "ボーラーフレイザー", img: "" },
                          { text: "ボーラーフレイザー３本セット", img: "" },
                        ],
                      },
                      {
                        text: "仕上げ",
                        next: [],
                        answer: [
                          { text: "ダイヤモンドポーラー", img: "" },
                          { text: "シリコンポイント", img: "" },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "巻き爪",
                  next: [],
                  answer: [
                    { text: "スリムポイント", img: "" },
                    { text: "プレパレーター", img: "" },
                    { text: "ニードル", img: "" },
                    { text: "トップグリップ", img: "" },
                    { text: "ソフティ", img: "" },
                  ],
                },
                {
                  text: "肥厚爪",
                  next: [],
                  answer: [
                    { text: "セラマルチフィル", img: "" },
                    { text: "マルチスピンドル", img: "" },
                    { text: "スモールテーパー", img: "" },
                    { text: "スリムオーバル", img: "" },
                  ],
                },
              ],
            ],
          },
        ],
      ],
    },
  ],
];

export default bitQuestions;
