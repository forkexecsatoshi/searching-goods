import { QuestionType } from "../type";

const bitQuestions: QuestionType = [
  { title: "ビットを選ぶ", answer: "ビットを選ぶ" },
  [
    {
      text: "ハンド施術",
      iconUrl: "bitQuestion/triplefill.png",
      next: [
        { title: "ハンド施術", answer: "ハンド施術" },
        [
          {                                                
            text: "オフ＆フィルイン",
            next: [
              { title: "オフ＆フィルイン", answer: "オフ＆フィルイン" },
              [
                {
                  text: "2in1次世代ビット",
                  next: [],
                  answer: [
                    {
                      text: "先端ラウンド形状 トリプルフィル",
                      img: "bitQuestion/triplefill.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=168710104",
                    },
                    {
                      text: "先端ラウンド形状 コンビネーションコーン",
                      img: "bitQuestion/combinationcone.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=147077767",
                    },
                    {
                      text: "先端ラウンド形状 フィルインデュオ",
                      img: "bitQuestion/fillinduo.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=170269955",
                    },

                    {
                      text: "先端フラット形状 FUJIビット",
                      img: "bitQuestion/fujibit.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=168122224",
                    },
                    {
                      text: "先端フラット形状 コンビネーションテーパー",
                      img: "bitQuestion/combinationtaper.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=165900229",
                    },
                    {
                      text: "先端フラット形状 クロステーパー",
                      img: "bitQuestion/crosstaper.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=168186225",
                    },
                  ],
                },
                {
                  text: "オフ特化型",
                  next: [
                    { title: "オフ特化型", answer: "オフ特化型" },
                    [
                      {
                        text: "ハードジェル",
                        next: [
                          { title: "ハードジェル", answer: "ハードジェル" },
                          [
                            {
                              text: "サロンで時短・上級者プロ向け",
                              next: [],
                              answer: [
                                {
                                  text: "ブラックビットラージXXC",
                                  img: "bitQuestion/BbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629553",
                                },
                                {
                                  text: "ブラックビットラージXC",
                                  img: "bitQuestion/BbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629558",
                                },                              
                                {
                                  text: "ブラックビットスモールXXC",
                                  img: "bitQuestion/BbitsmallXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175379148",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "bitQuestion/BbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175226227",
                                },                     
                                {
                                  text: "ブラックビットスモールオーバルXXC",
                                  img: "bitQuestion/sample.png",//スカルプ狂様の画像に差し替え
                                  url: "https://wspt-japan.shop-pro.jp/?pid=163266916",//スカルプ狂様の画像に差し替え
                                },           
                                {
                                  text: "オーロラビットラージバレルXXC",
                                  img: "bitQuestion/AbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=156298615",
                                },
                                {
                                  text: "オーロラビットラージバレルXC",
                                  img: "bitQuestion/AbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077263",//修正
                                },
                                {
                                  text: "オーロラビットスモールバレルXXC",
                                  img: "bitQuestion/AbitsmallXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164739820",
                                },
                                {
                                  text: "オーロラビットスモールバレルXC",
                                  img: "bitQuestion/AbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077005",
                                },
                                {
                                  text: "オーロラビットスモールオーバルXC",
                                  img: "bitQuestion/ObitsmallovalXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=163266916",
                                },
                                {
                                  text: "テーパートップXC",
                                  img: "bitQuestion/AbittapertopXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174988860",
                                },                                
                                {
                                  text: "テーパーラウンド C オーロラ",
                                  img: "bitQuestion/teperC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=177338894",
                                },
                                {
                                  text: "テーパーラウンド C ダークブロンズ",
                                  img: "bitQuestion/DtaperedroundC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=177909157",//先生のおすすめしか無い
                                },
                                {
                                  text: "テーパーラウンド M オーロラ",
                                  img: "bitQuestion/Ataperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164363364",
                                },
                                {
                                  text: "テーパーラウンド M シアン",
                                  img: "bitQuestion/Staperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=170268390",//先生のおすすめしか無い
                                },
                              ],
                            },
                            {
                              text: "丁寧な施術・中級者向け",
                              next: [],
                              answer: [
                                {
                                  text: "ブラックビットXC",
                                  img: "bitQuestion/BbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629558",
                                },
                                {
                                  text: "ブラックビットC",
                                  img: "bitQuestion/BbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629561",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "bitQuestion/BbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175226227",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "bitQuestion/BbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175378996",
                                },
                                {
                                  text: "オーロラビットXC",
                                  img: "bitQuestion/AbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077263",
                                },
                                {
                                  text: "オーロラビットC",
                                  img: "bitQuestion/AbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077292",
                                },
                                {
                                  text: "オーロラビットスモールバレルXC",
                                  img: "bitQuestion/AbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077005",
                                },
                                {
                                  text: "オーロラビットスモールバレルC",
                                  img: "bitQuestion/AbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077025",
                                },
                                {
                                  text: "テーパートップXC",
                                  img: "bitQuestion/AbittapertopXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174988860",
                                },
                                {
                                  text: "テーパートップC",
                                  img: "bitQuestion/AbittapertopC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174988890",
                                },                                
                                {
                                  text: "テーパーラウンド C オーロラ",
                                  img: "bitQuestion/BA15406.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=177338894",//先生のおすすめしか無い
                                },
                                {
                                  text: "テーパーラウンド C ダークブロンズ",
                                  img: "bitQuestion/BZ45109-FM.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=177909157",//先生のおすすめしか無い
                                },
                                {
                                  text: "テーパーラウンド M オーロラ",
                                  img: "bitQuestion/BA15001.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164363364",
                                },
                                {
                                  text: "テーパーラウンド M シアン",
                                  img: "bitQuestion/BD35405.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=170268390",//先生のおすすめしか無い
                                },
                              ],
                            },
                            {
                              text: "初心者",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットC",
                                  img: "bitQuestion/AbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077292",
                                },
                                {
                                  text: "オーロラビットM",
                                  img: "bitQuestion/AbitlargeM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077313",
                                },
                                {
                                  text: "オーロラビットスムーストップC",
                                  img: "bitQuestion/AbitsmoothtopC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147879084",
                                },
                                {
                                  text: "オーロラビットスムーストップM",
                                  img: "bitQuestion/AbitsmoothtopM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147879098",
                                },
                                {
                                  text: "オーロラビットスモールバレルC",
                                  img: "bitQuestion/AbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077025",
                                },
                                {
                                  text: "オーロラビットスモールバレルM",
                                  img: "bitQuestion/AbitsmallM.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077112",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップC",
                                  img: "bitQuestion/AbitsmallsmoothtopC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=158518569"
                                },
                                {
                                  text: "オーロラビットスモールスムーストップM",
                                  img: "bitQuestion/AbitsmallsmoothtopM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=158518292",
                                },
                                {
                                  text: "テーパーラウンド M オーロラ",
                                  img: "bitQuestion/Ataperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164363364",
                                },
                                {
                                  text: "テーパーラウンド M シアン",
                                  img: "bitQuestion/Staperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=170268390",
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
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージXXC",
                                  img: "bitQuestion/AbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=156298615",
                                },
                                {
                                  text: "オーロラビットラージXC",
                                  img: "bitQuestion/AbitlargeXC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077263",
                                },
                                {
                                  text: "オーロラビットスモールXXC",
                                  img: "bitQuestion/AbitsmallXXC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164739820",
                                },
                                {
                                  text: "オーロラビットスモールXC",
                                  img: "bitQuestion/AbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077005",
                                },                                
                                {
                                  text: "オーロラビットスモールオーバルXC",
                                  img: "bitQuestion/ObitsmallovalXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=163266916",
                                },
                                {
                                  text: "オーロラビットスモールオーバルC",
                                  img: "bitQuestion/ObitsmallovalC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=162172815",
                                },
                                {
                                  text: "テーパーラウンド C",
                                  img: "bitQuestion/teperC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=177338894",
                                },
                                {
                                  text: "テーパーラウンド C ダークブロンズ",
                                  img: "bitQuestion/DtaperedroundC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=177909157",
                                },
                                {
                                  text: "テーパーラウンド M オーロラ",
                                  img: "bitQuestion/taperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164363364",
                                },
                                {
                                  text: "テーパーラウンド M シアン",
                                  img: "bitQuestion/Staperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=170268390",
                                },
                                {
                                  text: "テーパートップC",
                                  img: "bitQuestion/taperedtopC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174988890",
                                },
                                {
                                  text: "ゴールドビットラージXXC",
                                  img: "bitQuestion/GbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144603127",
                                },
                                {
                                  text: "ゴールドビットラージXC",
                                  img: "bitQuestion/GbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=110715563",
                                },
                                {
                                  text: "ゴールドビットスモールXXC",
                                  img: "bitQuestion/GbitsmallXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144614148",
                                },
                                {
                                  text: "ゴールドビットスモールXC",
                                  img: "bitQuestion/GbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144614179",
                                },
                                {
                                  text: "シルバービットラージXXC",
                                  img: "bitQuestion/SbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144656348",
                                },
                                {
                                  text: "シルバービットラージXC",
                                  img: "bitQuestion/SbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=110726764",
                                },
                                {
                                  text: "シルバービットスモールXXC",
                                  img: "bitQuestion/SbitsmallXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=157593900",
                                },
                                {
                                  text: "シルバービットスモールXC",
                                  img: "bitQuestion/SbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144657066",
                                },
                              ],
                            },
                            {
                              text: "丁寧な施術・中級者向け",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージXC",
                                  img: "bitQuestion/AbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077263",
                                },
                                {
                                  text: "オーロラビットラージC",
                                  img: "bitQuestion/AbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077292",
                                },
                                {
                                  text: "オーロラビットスモールXC",
                                  img: "bitQuestion/AbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077005",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "bitQuestion/AbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077025",
                                },
                                {
                                  text: "テーパーラウンド M オーロラ",
                                  img: "bitQuestion/taperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164363364",
                                },
                                {
                                  text: "テーパーラウンド M シアン",
                                  img: "bitQuestion/Staperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=170268390",
                                },
                                {
                                  text: "テーパートップC",
                                  img: "bitQuestion/taperedtopC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174988890",
                                },
                                {
                                  text: "ゴールドビットラージXC",
                                  img: "bitQuestion/GbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=110715563",
                                },
                                {
                                  text: "ゴールドビットラージC",
                                  img: "bitQuestion/GbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=110715709",
                                },
                                {
                                  text: "ゴールドビットスモールXC",
                                  img: "bitQuestion/GbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144614179"
                                },
                                {
                                  text: "ゴールドビットスモールC",
                                  img: "bitQuestion/GbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=110716718",
                                },
                                {
                                  text: "シルバービットラージXC",
                                  img: "bitQuestion/SbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=110726764",
                                },
                                {
                                  text: "シルバービットラージC",
                                  img: "bitQuestion/SbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=110726887",
                                },
                                {
                                  text: "シルバービットスモールXC",
                                  img: "bitQuestion/SbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144657066",
                                },
                                {
                                  text: "シルバービットスモールC",
                                  img: "bitQuestion/SbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=144657131",
                                },
                              ],
                            },
                            {
                              text: "初心者",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージC",
                                  img: "bitQuestion/AbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077292",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "bitQuestion/AbitlargeM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077313",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "bitQuestion/AbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077025",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "bitQuestion/AbitsmallM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077112",
                                },
                                {
                                  text: "テーパーラウンド M オーロラ",
                                  img: "bitQuestion/taperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164363364",
                                },
                                {
                                  text: "テーパーラウンド M シアン",
                                  img: "bitQuestion/Staperedround.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=170268390",
                                },
                                {
                                  text: "オーロラビットスムーストップC",
                                  img: "bitQuestion/AbitsmoothtopC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147879084",
                                },
                                {
                                  text: "オーロラビットスムーストップM",
                                  img: "bitQuestion/AbitsmoothtopM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147879098",
                                },
                                {
                                  text: "オーロラビットスモールスムーストップC",
                                  img: "bitQuestion/AbitsmallsmoothtopC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=158518569"
                                },
                                {
                                  text: "オーロラビットスモールスムーストップM",
                                  img: "bitQuestion/AbitsmallsmoothtopM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=158518292",
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
                                  img: "bitQuestion/BbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629553",
                                },
                                {
                                  text: "ブラックビットラージXC",
                                  img: "bitQuestion/BbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629558",
                                },
                                {
                                  text: "ブラックビットラージスムーストップXC",
                                  img: "bitQuestion/Bbitsmoothtop.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=177071879",
                                },
                                {
                                  text: "ブラックビットスモールXXC",
                                  img: "bitQuestion/BbitsmallXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175379148",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "bitQuestion/BbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175226227",
                                },
                                {
                                  text: "ブラックビットスモールオーバルXXC",
                                  img: "bitQuestion/sample.png",//スカルプ狂様の画像に差し替え　商品まだです
                                  url: "https://wspt-japan.shop-pro.jp/?pid=163266916",//スカルプ狂様の画像に差し替え　商品まだです
                                },
                                {
                                  text: "ブラックビットロングテーパーCMF",
                                  img: "bitQuestion/sample.png",//スカルプ狂様の画像に差し替え商品まだです
                                  url: "https://wspt-japan.shop-pro.jp/?pid=163266916",//スカルプ狂様の画像に差し替え商品まだです
                                },
                                {
                                  text: "オーロラビットラージXXC",
                                  img: "bitQuestion/AbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=156298615",
                                },
                                {
                                  text: "オーロラビットラージXC",
                                  img: "bitQuestion/AbitlargeXC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077263",
                                },
                                {
                                  text: "オーロラビットスモールXXC",
                                  img: "bitQuestion/AbitsmallXXC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164739820",
                                },
                                {
                                  text: "オーロラビットスモールXC",
                                  img: "bitQuestion/AbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077005",
                                },   
                              ],
                            },
                            {
                              text: "丁寧な施術・中級者向け",
                              next: [],
                              answer: [
                                {
                                  text: "ブラックビットラージXC",
                                  img: "bitQuestion/BbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629558",
                                },
                                {
                                  text: "ブラックビットラージC",
                                  img: "bitQuestion/BbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629561",
                                },
                                {
                                  text: "ブラックビットスモールXC",
                                  img: "bitQuestion/BbitsmallXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175226227",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "bitQuestion/BbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175378996",
                                },
                                {
                                  text: "オーロラビットラージXXC",
                                  img: "bitQuestion/AbitlargeXXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=156298615",
                                },
                                {
                                  text: "オーロラビットラージXC",
                                  img: "bitQuestion/AbitlargeXC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077263",
                                },
                                {
                                  text: "オーロラビットスモールXXC",
                                  img: "bitQuestion/AbitsmallXXC.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=164739820",
                                },
                                {
                                  text: "オーロラビットスモールXC",
                                  img: "bitQuestion/AbitlargeXC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077005",
                                },   
                              ],
                            },
                            {
                              text: "初心者",
                              next: [],
                              answer: [                               
                                {
                                  text: "ブラックビットラージC",
                                  img: "bitQuestion/BbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629561",
                                },
                                {
                                  text: "ブラックビットラージM",
                                  img: "bitQuestion/BbitlargeM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629564",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "bitQuestion/BbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175378996",
                                },
                                {
                                  text: "ブラックビットスモールM",
                                  img: "bitQuestion/BbitsmallM.png",//修正
                                  url: "https://wspt-japan.shop-pro.jp/?pid=176776915",
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
                                  img: "bitQuestion/BbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629561",
                                },
                                {
                                  text: "ブラックビットラージM",
                                  img: "bitQuestion/BbitlargeM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=174629564",
                                },
                                {
                                  text: "ブラックビットスモールC",
                                  img: "bitQuestion/BbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=175378996",
                                },
                                {
                                  text: "オーロラビットラージC",
                                  img: "bitQuestion/AbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077292",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "bitQuestion/AbitlargeM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077313",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "bitQuestion/AbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077025",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "bitQuestion/AbitsmallM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077112",
                                },
                              ],
                            },
                            {
                              text: "ソフトジェル",
                              next: [],
                              answer: [
                                {
                                  text: "オーロラビットラージC",
                                  img: "bitQuestion/AbitlargeC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077292",
                                },
                                {
                                  text: "オーロラビットラージM",
                                  img: "bitQuestion/AbitlargeM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077313",
                                },
                                {
                                  text: "オーロラビットスモールC",
                                  img: "bitQuestion/AbitsmallC.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077025",
                                },
                                {
                                  text: "オーロラビットスモールM",
                                  img: "bitQuestion/AbitsmallM.png",
                                  url: "https://wspt-japan.shop-pro.jp/?pid=147077112",
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
                            img: "bitQuestion/Abitlcorn.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=156918786",
                          },
                          {
                            text: "テーパーラウンド F",
                            img: "bitQuestion/taperedround.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=164363364",
                          },
                          {
                            text: "スモールコーン",
                            img: "bitQuestion/smallcore.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=133062247",
                          },
                          {
                            text: "セラマルチフィル",
                            img: "bitQuestion/ceramultifil.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157792494",
                          },
                          {
                            text: "シルバービットスモールスムーストップ F",
                            img: "bitQuestion/SbitsmallF.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=110728852"
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
                      title: "キューティクルケア",
                      answer: "キューティクルケア",
                    },
                    [
                      {
                        text: "キューティクルのプッシュアップ",
                        next: [],
                        answer: [
                          {
                            text: "スモールテーパー",
                            img: "bitQuestion/smalltaper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157844623",
                          },
                          {
                            text: "ミニポイント",
                            img: "bitQuestion/minipoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172098277",
                          },
                          {
                            text: "グリーンポイント",
                            img: "bitQuestion/greenpoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=145098303",
                          },
                          {
                            text: "ベビーテーパー",
                            img: "bitQuestion/babyteper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=169579674"
                          },
                          {
                            text: "ベビーポイント",
                            img: "bitQuestion/babypoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=171300274",
                          },
                          {
                            text: "スリムゴールドダイヤ",
                            img: "bitQuestion/slimgold.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=169580302",
                          },
                          {
                            text: "キューティクルケア",
                            img: "bitQuestion/cuticlecare.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=169579029",
                          },
                          {
                            text: "オーロラダイヤモンドショートコーン",
                            img: "bitQuestion/auroradiamondshortcorn.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=164403717",
                          },
                          {
                            text: "２wayメタルプッシャー",
                            img: "bitQuestion/2waymetar.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=170634550",
                          },
                          {
                            text: "ボーラー0.5～2ｍｍ",
                            img: "bitQuestion/bore.0.5.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                        ],
                      },
                      {
                        text: "ポケット・コーナー施術",
                        next: [],
                        answer: [
                          {
                            text: "ゴールドダイヤ ニードル",
                            img: "bitQuestion/golddiamondneedle.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172723069",
                          },
                          {
                            text: "リムーバルスティック",
                            img: "bitQuestion/removablestick.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=147133926",
                          },
                          {
                            text: "オニクリーン",
                            img: "bitQuestion/OniClean.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=110729695",
                          },
                          {
                            text: "ライスポイント",
                            img: "bitQuestion/ricepoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157089262",
                          },
                          {
                            text: "アンダークリーナー",
                            img: "bitQuestion/Undercleaner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=165391969",
                          },
                          {
                            text: "サイドコーナー",
                            img: "bitQuestion/sidekone.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=145113394",
                          },
                          {
                            text: "アンダークリーナー",
                            img: "bitQuestion/Undercleaner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=165391969",
                          },
                          {
                            text: "ボーラー0.5～1ｍｍ",
                            img: "bitQuestion/bore.0.5.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                          {
                            text: "角質除去スティックM",
                            img: "bitQuestion/kakushituM.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=150106027",
                          },
                          {
                            text: "角質除去スティックF",
                            img: "bitQuestion/kakushituF.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=165705947",
                          },
                          {
                            text: "ベビースキンクリーナー",
                            img: "bitQuestion/babyskin.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=158999364",
                          },
                        ],
                      },
                      {
                        text: "ルースキューティクルの除去",
                        next: [],
                        answer: [
                          {
                            text: "ボーラー",
                            img: "bitQuestion/bore.0.5.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                          {
                            text: "キューティクルニッパー",
                            img: "bitQuestion/cuticlenipper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=171037172",
                          },
                          {
                            text: "オーロラダイヤモンドショートコーン",
                            img: "bitQuestion/auroradiamondshortcorn.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=164403717",
                          },
                          {
                            text: "ライスポイント",
                            img: "bitQuestion/ricepoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157089262",
                          },
                          {
                            text: "アンダークリーナー",
                            img: "bitQuestion/Undercleaner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=165391969",
                          },
                          {
                            text: "グリーンポイント",
                            img: "bitQuestion/greenpoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=168680057",
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
                        text: "皮膚うすめ",
                        next: [],
                        answer: [
                          {
                            text: "スキンスムーサー",
                            img: "bitQuestion/BD55029.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=177072360",
                          },
                          {
                            text: "オーロラスキンケア",
                            img: "bitQuestion/auroraskincare.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172199819",
                          },
                          {
                            text: "スリムゴールドダイヤ",
                            img: "bitQuestion/slimgdaia.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=168169080",
                          },
                          {
                            text: "スキンクリーナー",
                            img: "bitQuestion/skincleaner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=145114272",
                          },
                          {
                            text: "ダイヤモンドテーパー",
                            img: "bitQuestion/diamondtaper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=155566367",
                          },
                          {
                            text: "ボーラー3～6ｍｍ",
                            img: "bitQuestion/BD55007.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                          {
                            text: "スモールテーパー",
                            img: "bitQuestion/smalltaper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157844623"                  
                          },
                          {
                            text: "ピンクポイント",
                            img: "bitQuestion/pinkpoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=152094470",
                          },
                          {
                            text: "グリーンポイント",
                            img: "bitQuestion/greenpoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=160187831",
                          },
                          {
                            text: "ゴールドダイヤ ニードル",
                            img: "bitQuestion/golddiamondneedle.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172779814",//修正
                          },
                          {
                            text: "サイドコーナー",
                            img: "bitQuestion/sidecorner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=145113394"
                          },
                          {
                            text: "角質除去スティックF",
                            img: "bitQuestion/kakushituF.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=165705947",
                          },
                        ],
                      },
                      {
                        text: "皮膚硬め",
                        next: [],
                        answer: [
                          {
                            text: "ソフティ",
                            img: "bitQuestion/softy.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=168070187",
                          },
                          {
                            text: "サイドキューティーXF",
                            img: "bitQuestion/sidekyuteli-png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=152321959"                  
                          },
                          {
                            text: "スキンスムーサー",
                            img: "bitQuestion/BD55029.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=177072360",
                          },
                          {
                            text: "ボーラーC 3～4ｍｍ",
                            img: "bitQuestion/boreC3.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=170131762",
                          },
                          {
                            text: "ミニポイント",
                            img: "bitQuestion/minipoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172098277",
                          },
                          {
                            text: "角質除去スティックM",
                            img: "bitQuestion/kakushituM.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=150106027",
                          },
                          {
                            text: "スモールテーパーM",
                            img: "bitQuestion/smalltaper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157844623"                  
                          },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "サンディング",
                  next: [],
                  answer: [
                    {
                      text: "スモールサンディングバンド",
                      img: "bitQuestion/smallsandingband.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?mode=srh&keyword=%A5%B9%A5%E2%A1%BC%A5%EB%A5%B5%A5%F3%A5%C7%A5%A3%A5%F3%A5%B0%A5%D0%A5%F3%A5%C9+",
                    },
                    {
                      text: "サンディングバンド",
                      img: "bitQuestion/sandingband.png",
                      url: "https://wspt-japan.shop-pro.jp/?mode=cate&cbid=2566943&csid=12",
                    },
                    {
                      text: "ブロンズダイヤモンドスリムパレル",
                      img: "bitQuestion/bronzediamond.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=169579862",
                    },
                    {
                      text: "ダイヤモンドテーパー",
                      img: "bitQuestion/diamondtaper.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=155566367",
                    },
                    {
                      text: "ダイヤモンドビット ラージバレル",
                      img: "bitQuestion/diamondbit.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?pid=155569981",
                    },
                  ],
                },
              ],
            ],
          },
          {
            text: "ストーンオフ",
            next: [],
            answer: [
              {
                text: "オーロラビットストーンリムーバー",
                img: "bitQuestion/Abitston.png",//修正
                url: "https://wspt-japan.shop-pro.jp/?pid=156918753",
              },
              {
                text: "ブルービットストーンリムーバー",
                img: "bitQuestion/bulebitston.png",//修正
                url: "https://wspt-japan.shop-pro.jp/?pid=156393459",
              },
              {
                text: "ブラックビットストーンリムーバー",
                img: "bitQuestion/Bbitston.png",//修正
                url: "https://wspt-japan.shop-pro.jp/?pid=177800556",
              },
              {
                text: "ストーンオフ",
                img: "bitQuestion/stoneoff.png",//修正
                url: "https://wspt-japan.shop-pro.jp/?pid=168752240",
              },
              {
                text: "ベビーオーバル",
                img: "bitQuestion/babyobaru.png",//修正
                url: "https://wspt-japan.shop-pro.jp/?pid=110729142",
              },
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
                        text: "粗削り",
                        next: [],
                        answer: [
                          {
                            text: "足裏つるぴかセット Φ25mm",
                            img: "ST91029.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=164594390",
                          },
                          {
                            text: "足裏つるぴかセット Φ20mm",
                            img: "bitQuestion/ST91048.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=172071764",
                          },
                          {
                            text: "円盤ビット ミニセット",
                            img: "bitQuestion/ST91040.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=168114151",
                          },
                          {
                            text: "角質ケア パーフェクトセット 保湿プラス",
                            img: "bitQuestion/ST91047.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=172009550",
                          },
                          {
                            text: "ジルコニアビット ビッグバレル",
                            img: "bitQuestion/BZ47001.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=158385049",
                          },
                          {
                            text: "シルバービット ビッグバレル",
                            img: "bitQuestion/BS37001.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=151809623",
                          },
                          {
                            text: "サンディングキャップ",
                            img: "bitQuestion/sandingcap.png",
                            url: "https://wspt-japan.shop-pro.jp/?mode=cate&cbid=2566943&csid=13",
                          },
                          {
                            text: "ダイヤ円盤ビット",
                            img: "bitQuestion/Ddiskbit.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=175673392",
                          },
                          {
                            text: "ダイヤモンドビット メガ",
                            img: "bitQuestion/BD51136.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=165842153",
                          },
                          {
                            text: "ダイヤモンドビット スーパーメガ C",
                            img: "bitQuestion/BD51139.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=170751488",
                          },
                          {
                            text: "メガコーン",
                            img: "bitQuestion/megacone.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=145113206",
                          },
                          {
                            text: "バルーン",
                            img: "bitQuestion/balloon.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=145113357",
                          },
                          {
                            text: "コーンカッター",
                            img: "bitQuestion/OA41256.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=177905675",
                          },
                        ],
                      },
                      {
                        text: "仕上げ",
                        next: [],
                        answer: [
                          {
                            text: "肌を傷めない！ シリコンポイント 大",
                            img: "bitQuestion/BC61006.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=159614495",
                          },
                          {
                            text: "シリコンポイント ラージミディアム M フット",
                            img: "bitQuestion/LS402M.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=133159804",
                          },                               
                          {
                            text: "シリコンポイント ラージコース C フット",
                            img: "bitQuestion/LS401C.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=133159801",
                          },
                          {
                            text: "足裏つるぴかセット Φ25mm",
                            img: "ST91029.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=164594390",
                          },
                          {
                            text: "足裏つるぴかセット Φ20mm",
                            img: "bitQuestion/ST91048.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=172071764",
                          },
                          {
                            text: "角質ケア パーフェクトセット 保湿プラス",
                            img: "bitQuestion/ST91047.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=172009550",
                          },
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
                        text: "キューティクルケアのプッシュアップ",
                        next: [],
                        answer: [
                          {
                            text: "スモールテーパー",
                            img: "bitQuestion/smalltaper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157844623",
                          },
                          {
                            text: "ミニポイント",
                            img: "bitQuestion/minipoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172098277",
                          },
                          {
                            text: "グリーンポイント",
                            img: "bitQuestion/greenpoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=145098303",
                          },
                          {
                            text: "ベビーテーパー",
                            img: "bitQuestion/babyteper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=169579674"
                          },
                          {
                            text: "ベビーポイント",
                            img: "bitQuestion/babypoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=171300274",
                          },
                          {
                            text: "スリムゴールドダイヤ",
                            img: "bitQuestion/slimgold.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=169580302",
                          },
                          {
                            text: "キューティクルケア",
                            img: "bitQuestion/cuticlecare.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=169579029",
                          },
                          {
                            text: "オーロラダイヤモンドショートコーン",
                            img: "bitQuestion/auroradiamondshortcorn.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=164403717",
                          },
                          {
                            text: "２wayメタルプッシャー",
                            img: "bitQuestion/2waymetar.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=170634550",
                          },
                          {
                            text: "フットプッシャー",
                            img: "bitQuestion/OA41163.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=169549695",
                          },
                          {
                            text: "ボーラー0.5～2ｍｍ",
                            img: "bitQuestion/bore.0.5.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                        ],
                      },
                      {
                        text: "ポケット・コーナー施術",
                        next: [],
                        answer: [
                          {
                            text: "ゴールドダイヤ ニードル",
                            img: "bitQuestion/golddiamondneedle.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172723069",
                          },
                          {
                            text: "リムーバルスティック",
                            img: "bitQuestion/removablestick.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=147133926",
                          },
                          {
                            text: "オニクリーン",
                            img: "bitQuestion/OniClean.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=110729695",
                          },
                          {
                            text: "ライスポイント",
                            img: "bitQuestion/ricepoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157089262",
                          },
                          {
                            text: "アンダークリーナー",
                            img: "bitQuestion/Undercleaner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=165391969",
                          },
                          {
                            text: "サイドコーナー",
                            img: "bitQuestion/sidekone.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=145113394",
                          },
                          {
                            text: "アンダークリーナー",
                            img: "bitQuestion/Undercleaner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=165391969",
                          },
                          {
                            text: "ボーラー0.5～1ｍｍ",
                            img: "bitQuestion/bore.0.5.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                          {
                            text: "角質除去スティックM",
                            img: "bitQuestion/kakushituM.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=150106027",
                          },
                          {
                            text: "角質除去スティックF",
                            img: "bitQuestion/kakushituF.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=165705947",
                          },
                          {
                            text: "ベビースキンクリーナー",
                            img: "bitQuestion/babyskin.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=158999364",
                          },
                        ],
                      },
                      {
                        text: "ルースキューティクルの除去",
                        next: [],
                        answer: [
                          {
                            text: "ボーラー",
                            img: "bitQuestion/bore.0.5.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                          {
                            text: "キューティクルニッパー",
                            img: "bitQuestion/cuticlenipper.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=171037172",
                          },
                          {
                            text: "オーロラダイヤモンドショートコーン",
                            img: "bitQuestion/auroradiamondshortcorn.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=164403717",
                          },
                          {
                            text: "ライスポイント",
                            img: "bitQuestion/ricepoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=157089262",
                          },
                          {
                            text: "アンダークリーナー",
                            img: "bitQuestion/Undercleaner.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=165391969",
                          },
                          {
                            text: "グリーンポイント",
                            img: "bitQuestion/greenpoint.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=168680057",
                          },
                        ],
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
                          {
                            text: "ダイヤモンドメガ",
                            img: "bitQuestion/diamondmega.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=170131762",
                          },
                          {
                            text: "円盤ビット",
                            img: "bitQuestion/diskbit.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=175673392",
                          },
                          {
                            text: "ジルコニアビット ビッグバレル",
                            img: "bitQuestion/BZ47001.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=158385049",
                          },
                          {
                            text: "シルバービット ビッグバレル",
                            img: "bitQuestion/BS37001.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=151809623",
                          },
                          {
                            text: "ボーラー",
                            img: "bitQuestion/Boller.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=170131762",
                          },
                          {
                            text: "コーンカッター",
                            img: "bitQuestion/OA41256.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=177905675",
                          },
                        ],
                      },
                      {
                        text: "仕上げ",
                        next: [],
                        answer: [
                          {
                            text: "肌を傷めない！ シリコンポイント 大",
                            img: "bitQuestion/BC61006.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=159614495",
                          },
                          {
                            text: "シリコンポイント ラージミディアム M フット",
                            img: "bitQuestion/LS402M.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=133159804",
                          },                               
                          {
                            text: "シリコンポイント ラージコース C フット",
                            img: "bitQuestion/LS401C.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=133159801",
                          },
                          {
                            text: "足裏つるぴかセット Φ20mm",
                            img: "bitQuestion/ST91048.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=172071764",
                          },
                          {
                            text: "円盤ビット ミニセット",
                            img: "bitQuestion/ST91040.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=168114151",
                          },
                          {
                            text: "角質ケア パーフェクトセット 保湿プラス",
                            img: "bitQuestion/ST91047.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=172009550",
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
                          {
                            text: "ウオノメビット",
                            img: "bitQuestion/uonomebit.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=146312727",
                          },
                          {
                            text: "ボーラーフレイザー",
                            img: "bitQuestion/bowlerfraser.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=168736299",
                          },
                          {
                            text: "ウオノメセット",
                            img: "bitQuestion/Uonome.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172709123",
                          },
                          {
                            text: "ボーラーフレイザー",
                            img: "bitQuestion/bowlerfraser.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=168736299",
                          },
                          {
                            text: "ボーラーフレイザー３本セット",
                            img: "bitQuestion/bowlerfraser3.png",
                            url: "https://wspt-japan.shop-pro.jp/?pid=172709123",
                          },
                        ],
                      },
                      {
                        text: "仕上げ",
                        next: [],
                        answer: [
                          {
                            text: "ダイヤモンドボーラー",
                            img: "bitQuestion/bore.0.5.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=171357304",
                          },
                          {
                            text: "肌を傷めない！ シリコンポイント 大",
                            img: "bitQuestion/BC61006.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=159614495",
                          },
                          {
                            text: "シリコンポイント ラージミディアム M フット",
                            img: "bitQuestion/LS402M.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=133159804",
                          },                               
                          {
                            text: "シリコンポイント ラージコース C フット",
                            img: "bitQuestion/LS401C.png",//修正
                            url: "https://wspt-japan.shop-pro.jp/?pid=133159801",
                          },
                        ],
                      },
                    ],
                  ],
                },
                {
                  text: "巻き爪",
                  next: [],
                  answer: [
                    {
                      text: "スリムポイント",
                      img: "bitQuestion/slimpoint.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=160233917"
                    },
                    {
                      text: "プレパレーター",
                      img: "bitQuestion/Preparator.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=133136165",
                    },
                    {
                      text: "ゴールドダイヤモンドビット ニードル",
                      img: "bitQuestion/BD53037.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?pid=172723069",
                    },
                    {
                      text: "足爪ケアセット",
                      img: "bitQuestion/OA41133-1.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?pid=168086732",
                    },
                    {
                      text: "巻き爪ケア ステンレスゾンデ 全長175mm",
                      img: "bitQuestion/OA41001.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?pid=169604067",
                    },
                    {
                      text: "ダブルスプーン ステンレスゾンデ",
                      img: "bitQuestion/OA41219.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?pid=174172229",
                    },
                    {
                      text: "2Way イングローンファイル 全長150mm",
                      img: "bitQuestion/OA41133.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?pid=169603913",
                    },
                    {
                      text: "サイドコーナー",
                      img: "bitQuestion/sidekone.png",//修正
                      url: "https://wspt-japan.shop-pro.jp/?pid=145113394",
                    },
                  ],
                },
                {
                  text: "肥厚爪",
                  next: [],
                  answer: [
                    {
                      text: "セラマルチフィル",
                      img: "bitQuestion/ceramultifil.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=157792494",
                    },
                    {
                      text: "マルチスピンドル",
                      img: "bitQuestion/multispindle.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=153656605",
                    },
                    {
                      text: "スモールテーパー",
                      img: "bitQuestion/smalltaper.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=157844623"                  
                    },
                    {
                      text: "スリムオーバル",
                      img: "bitQuestion/slimoval.png",
                      url: "https://wspt-japan.shop-pro.jp/?pid=110721932",
                    },
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
