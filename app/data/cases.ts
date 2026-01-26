export interface CaseImage {
  date: string;
  path: string;
}

export interface AreaImages {
  area: string;
  areaKey: string;
  images: CaseImage[];
}

export interface CaseData {
  id: number;
  age: number;
  gender: "男性" | "女性";
  reason: string;
  hairCondition: string;
  treatment: string[];
  sessions: number;
  beforeImages: string[];
  areaImages: AreaImages[];
  testimonial: {
    whyChose: string;
    experience: string;
  };
}

export const cases: CaseData[] = [
  {
    id: 1,
    age: 53,
    gender: "男性",
    reason: "他の施術で通ってくださっているお客様。施術中に、育毛薬を飲み始めたと伺い、育毛施術を勧めたところ、ぜひやりたいということで施術を開始しました。",
    hairCondition: "頭頂部および前頭部（分け目付近）にびまん性の脱毛が見られ、毛髪の密度が低下しています。毛髪自体も細くなっており、典型的なAGA（男性型脱毛症）進行中の所見と考えられます。",
    treatment: ["育毛施術(5回)", "スカルプシャンプーを使用"],
    sessions: 5,
    beforeImages: [
      "/images/case1/before1.png",
      "/images/case1/before2.png"
    ],
    areaImages: [
      {
        area: "頭頂部",
        areaKey: "top",
        images: [
          { date: "2024/11/21", path: "/images/case1/top_2024-11-21.png" },
          { date: "2024/12/10", path: "/images/case1/top_2024-12-10.png" },
          { date: "2025/01/10", path: "/images/case1/top_2025-01-10.png" },
          { date: "2025/01/29", path: "/images/case1/top_2025-01-29.png" },
          { date: "2025/02/13", path: "/images/case1/top_2025-02-13.png" }
        ]
      },
      {
        area: "分け目",
        areaKey: "part",
        images: [
          { date: "2024/11/21", path: "/images/case1/part_2024-11-21.png" },
          { date: "2024/12/10", path: "/images/case1/part_2024-12-10.png" },
          { date: "2025/01/10", path: "/images/case1/part_2025-01-10.png" },
          { date: "2025/01/29", path: "/images/case1/part_2025-01-29.png" },
          { date: "2025/02/13", path: "/images/case1/part_2025-02-13.png" }
        ]
      }
    ],
    testimonial: {
      whyChose: "サロンのスタッフの方が、髪や頭皮について本当に詳しくて、信頼できたことが決め手でした。専門的な説明がとてもわかりやすく、安心して始められました。",
      experience: "年齢を重ねるごとに、頭頂部や分け目の薄さが気になるようになり、「このまま進行したらどうしよう…」という不安が常にありました。始めてから約3ヶ月で髪のボリュームが明らかに増え、分け目の地肌も目立たなくなってきました。髪1本1本がしっかりしてきて、全体的に若々しい印象に。"
    }
  },
  {
    id: 2,
    age: 59,
    gender: "男性",
    reason: "お嬢様がサロンのお客様で、お嬢様の説得により来店。自身も薄毛に悩んでいましたが、どうせ無理だと諦めていたそうです。",
    hairCondition: "広範囲にわたる毛髪の密度低下と明らかな地肌の露出が見られます。毛髪は全体的に細く、成長期毛の割合が低下しており、進行性のAGA（男性型脱毛症）の中等度〜進行期に該当すると考えられます。",
    treatment: ["育毛施術(4回)", "スカルプシャンプーを使用"],
    sessions: 4,
    beforeImages: [
      "/images/case2/before1.png"
    ],
    areaImages: [
      {
        area: "頭頂部",
        areaKey: "top",
        images: [
          { date: "2024/10/27", path: "/images/case2/top_2024-10-27.png" },
          { date: "2024/11/10", path: "/images/case2/top_2024-11-10.png" },
          { date: "2024/11/24", path: "/images/case2/top_2024-11-24.png" },
          { date: "2024/12/15", path: "/images/case2/top_2024-12-15.png" }
        ]
      }
    ],
    testimonial: {
      whyChose: "娘が通っているサロンで扱っていると聞き、「そこまで言うなら試してみようかな」と思えたのがきっかけです。",
      experience: "若い頃は髪に悩みなんてなかったのに、気づけば頭頂部が気になり始め、「これが年齢のせいか…」と少し諦めていました。回を重ねるごとに髪のコシや立ち上がりを実感。写真を見比べたとき、「あれ、こんなに変わったのか」と自分でも驚きました。"
    }
  },
  {
    id: 3,
    age: 61,
    gender: "男性",
    reason: "奥様がサロンの広告を見て、お問合せくださり、来店。これ以上酷くなりたくないとのことで施術を決めました。",
    hairCondition: "前頭部（M字部位）および頭頂部にかけての毛髪密度の低下が顕著です。地肌の透け感が明瞭で、特につむじ周辺は軟毛化が進行しており、AGA（男性型脱毛症）の進行期〜やや高度の状態と考えられます。",
    treatment: ["育毛施術(3回)", "スカルプシャンプーを使用"],
    sessions: 3,
    beforeImages: [
      "/images/case3/before1.png",
      "/images/case3/before2.png"
    ],
    areaImages: [
      {
        area: "頭頂部",
        areaKey: "top",
        images: [
          { date: "2025/01/11", path: "/images/case3/top_2025-01-11.png" },
          { date: "2025/01/31", path: "/images/case3/top_2025-01-31.png" },
          { date: "2025/02/15", path: "/images/case3/top_2025-02-15.png" }
        ]
      },
      {
        area: "M字",
        areaKey: "mji",
        images: [
          { date: "2025/01/11", path: "/images/case3/mji_2025-01-11.png" },
          { date: "2025/01/31", path: "/images/case3/mji_2025-01-31.png" },
          { date: "2025/02/15", path: "/images/case3/mji_2025-02-15.png" }
        ]
      }
    ],
    testimonial: {
      whyChose: "薬ではなく、痛みもない施術だったので、体への負担を心配せずに安心して始められました。年齢的にも無理のない方法を選びたかったので、自分に合っていると感じました。",
      experience: "たった3回の施術でも、髪の立ち上がりや密度の変化を感じられるようになり、特に頭頂部は写真を見て「これ本当に自分の頭？」と思うほど。妻にも「若返ったね」と言われて、嬉しい気持ちでいっぱいです。"
    }
  },
  {
    id: 4,
    age: 51,
    gender: "男性",
    reason: "サロン既存客の旦那様。10年前から薄毛に悩んでおり、いつも帽子を被っていて、もう薄毛に悩まされたくないため、今回施術を決意。",
    hairCondition: "頭頂部に広範囲の毛髪密度の低下が認められ、地肌の露出が明瞭です。毛髪は全体的に細く、成長期毛の割合が低下しており、軟毛化が進行しています。AGA（男性型脱毛症）の中〜高度進行期に該当すると考えられます。",
    treatment: ["育毛施術(7回)", "シャンプー、スカルプアンプル、ガルバニックを使用"],
    sessions: 7,
    beforeImages: [
      "/images/case4/before1.png"
    ],
    areaImages: [
      {
        area: "頭頂部",
        areaKey: "top",
        images: [
          { date: "2024/12/21", path: "/images/case4/top_2024-12-21.png" },
          { date: "2025/01/06", path: "/images/case4/top_2025-01-06.png" },
          { date: "2025/01/18", path: "/images/case4/top_2025-01-18.png" },
          { date: "2025/02/01", path: "/images/case4/top_2025-02-01.png" },
          { date: "2025/02/15", path: "/images/case4/top_2025-02-15.png" },
          { date: "2025/03/07", path: "/images/case4/top_2025-03-07.png" },
          { date: "2025/04/04", path: "/images/case4/top_2025-04-04.png" }
        ]
      }
    ],
    testimonial: {
      whyChose: "市販の育毛剤は効果を感じられず、薬は続けなければ元に戻りました。体に負担なく、根本解決できるという点で選びました。",
      experience: "10年以上前から薄毛に悩み、外出時はいつも帽子で隠していました。7回を終えた今、髪にハリやボリュームが出てきて、頭頂部の地肌も前ほど気にならなくなりました。「もう少しで帽子を外せるかもしれない」と思えるようになったのは、大きな変化です。"
    }
  },
  {
    id: 5,
    age: 64,
    gender: "女性",
    reason: "もともと髪が細く、2年前から分け目やシャンプー後の抜け毛が気になり始めた。抜け毛が怖くて洗髪をためらうほどに。髪の量も減り、結んだときのボリュームが半分以下に。",
    hairCondition: "前頭〜側頭部にかけてのびまん性の脱毛が確認されます。毛髪は全体的に細くなり、軟毛化が進行しており、地肌の透け感が顕著です。女性に多いFAGAまたは慢性休止期脱毛の可能性が考えられます。",
    treatment: ["育毛施術(3回)", "シャンプー、ガルバニックを使用"],
    sessions: 3,
    beforeImages: [
      "/images/case5/before1.png"
    ],
    areaImages: [
      {
        area: "M字",
        areaKey: "mji",
        images: [
          { date: "2024/11/21", path: "/images/case5/mji_2024-11-21.png" },
          { date: "2024/12/21", path: "/images/case5/mji_2024-12-21.png" },
          { date: "2025/01/06", path: "/images/case5/mji_2025-01-06.png" }
        ]
      }
    ],
    testimonial: {
      whyChose: "年齢的にホルモンや副作用の心配もあり、薬に頼らずケアできる方法は安心感があったからです。",
      experience: "写真を見た時に「えっ、私の髪こんなに戻ってる！」と本当に驚きました。前側の薄さが改善され、髪の立ち上がりもふんわり。何より、恐怖だったシャンプーの時間が少しずつ楽しみに変わってきたのが嬉しいです。"
    }
  },
  {
    id: 6,
    age: 31,
    gender: "男性",
    reason: "もともと髪の細さと頭頂部の薄毛に悩んでおり、育毛シャンプーを1年ほど使っていたものの効果が感じられず…。大切な結婚式を控え、「少しでも自信を持って当日を迎えたい」と思い、施術をスタートしました。",
    hairCondition: "頭頂部において毛髪密度の低下と地肌の露出が明瞭で、毛髪は全体的に細く、軟毛化が進行しています。年齢を考慮すると、AGAの初期〜中等度に該当する可能性が高いです。",
    treatment: ["育毛施術(3回)", "シャンプーのみ使用"],
    sessions: 3,
    beforeImages: [
      "/images/case6/before1.png"
    ],
    areaImages: [
      {
        area: "頭頂部",
        areaKey: "top",
        images: [
          { date: "2024/08/29", path: "/images/case6/top_2024-08-29.png" },
          { date: "2024/09/12", path: "/images/case6/top_2024-09-12.png" },
          { date: "2024/09/26", path: "/images/case6/top_2024-09-26.png" }
        ]
      }
    ],
    testimonial: {
      whyChose: "AGAクリニックも検討しましたが、「いかにも薄毛治療してます」感があって、正直ちょっと恥ずかしいので、やめました。美容サロン感覚で通えるし、周りの目も気にならないのが決め手でした。",
      experience: "数回の施術で髪の立ち上がりやツヤが出て、写真で見ると頭頂部の地肌の見え方が明らかに変わっていて驚きました。一生に一度の大切な日を、自信を持って迎えたいその想いで今も前向きに続けています。"
    }
  },
  {
    id: 7,
    age: 61,
    gender: "男性",
    reason: "奥様からの紹介で来店。もともと髪が細く、つむじや頭頂部の薄毛が気になっており、お父様やお祖父様も同じような悩みを抱えていたことから、「自分も遺伝だと思う」とおっしゃっていました。",
    hairCondition: "頭頂部全体にわたって毛髪の密度が低下し、広範囲に地肌が露出しています。毛髪は細く軟毛化しており、明らかに成長期毛が減少しています。AGAの進行期〜高度進行期に該当すると考えられます。",
    treatment: ["育毛施術(5回)", "シャンプー、スカルプアンプル、Rクリーム、ガルバニックを使用"],
    sessions: 5,
    beforeImages: [
      "/images/case7/before1.png"
    ],
    areaImages: [
      {
        area: "頭頂部",
        areaKey: "top",
        images: [
          { date: "2025/01/14", path: "/images/case7/top_2025-01-14.png" },
          { date: "2025/02/01", path: "/images/case7/top_2025-02-01.png" },
          { date: "2025/03/13", path: "/images/case7/top_2025-03-13.png" },
          { date: "2025/03/28", path: "/images/case7/top_2025-03-28.png" }
        ]
      }
    ],
    testimonial: {
      whyChose: "遺伝だから仕方ないと諦めていましたが、年齢的にも無理のない方法だったので、一度試してみようと思えたのがきっかけです。",
      experience: "回を重ねるごとに地肌の透け感が気にならなくなり、髪の立ち上がりも良くなってきました。写真を見返すと、その変化は一目瞭然。「もう歳だから」と諦めていた気持ちが、今では「まだ変われるかもしれない」という希望に変わりました。"
    }
  }
];

export const faqData = [
  {
    question: "どれくらいで効果を実感できますか？",
    answer: "個人差はありますが、早い方では1ヶ月で抜け毛の減少や髪のハリ・コシを実感されています。多くの方が3ヶ月以内に明確な変化を感じており、ホームケアをしっかり取り入れている方ほど、変化のスピードや実感度が高い傾向にあります。"
  },
  {
    question: "施術をやめたら、また薄毛に戻りますか？",
    answer: "生活習慣や体質によって個人差はありますが、頭皮や毛髪の環境が整うため、健康な状態を維持しやすくなります。2〜3ヶ月に1回のメンテナンスやホームケアを続けることで、良い状態をしっかり保つことができます。"
  },
  {
    question: "どのくらいのペースで通うのが理想ですか？",
    answer: "月2回を推奨しています。1回あたりの施術は30分程度と短時間なので、無理なく続けやすく、頭皮や毛髪の状態を安定させるのに適した頻度です。"
  },
  {
    question: "内服薬と併用できますか？",
    answer: "はい、可能です。現在服用中の方はそのまま併用いただき、髪の状態を見ながら、徐々に内服薬を減らします。最終的には、薬に頼らず維持できる状態へと移行していきます。"
  }
];
