
'use strict';

const S = {
  oasis: {
    name: 'OASIS',
    sub: '不安',
    intro: '以下の項目では不安と恐怖についてお尋ねします。それぞれの項目について、過去1週間の体験に最もよくあてはまる数字を選んでください。',
    q: [
      [
        'この1週間、どのくらいの頻度で不安を感じましたか？',
        [
          'この1週間、不安を感じなかった',
          'たまに不安だった。数回不安を感じた程度',
          'ときどき不安だった。不安なときとそうでないときが同じくらいあり、リラックスするのが難しかった',
          'しばしば不安だった。ほとんどの時間不安だった。リラックスするのがとても難しかった',
          'いつも不安だった。絶えず不安で一度もリラックスできなかった'
        ]
      ],
      [
        'この1週間、不安を感じた時には、その不安はどのくらい強い、あるいは深刻なものでしたか？',
        [
          'わずか、あるいはまったくなかった：不安がなかったか、ほとんど気づかないくらいだった',
          '軽度：不安は弱かった。リラックスしようとすればできた。身体症状はわずかに不快な程度だった',
          '中等度：不安がつらくなることがあった。リラックスしたり集中したりするのが少し大変だったが、やろうとすればできた。身体症状は不快だった',
          '重度：ほとんどの場合、不安は強いものだった。リラックスしたり、他のものに注意を向けたりすることが非常に難しかった。身体症状はとても不快だった',
          '極重度：不安は圧倒的なものだった。まったくリラックスできなかった。身体症状は耐えられないものだった'
        ]
      ],
      [
        'この1週間で、不安や恐怖のために状況、場所、物品、活動をどの程度避けていましたか？',
        [
          'なし：恐怖によって場所、状況、活動や物品を避けることはなかった',
          'たまに：たまに何かを避けることがあったが、状況に向き合ったり物品に直面したりするほうがふつうだった。生活の仕方には影響を受けていない',
          'ときどき：ある状況、場所、物品に対して恐怖があったものの、なんとかできる範囲だった。生活の仕方が少し変わった。ひとりでいるときには、いつもか、ほとんどいつものように物事を避けていたが、誰かがついてきてくれればなんとか対処できた',
          'しばしば：非常に大きな恐怖を感じていて、怖がらせるような物事を避けようとしていた。物品、状況、活動、場所を避けるために生活の仕方を大きく変えてきている',
          'いつも：物品、状況、活動、場所を避けることによって、生活が支配されている。生活の仕方は非常に影響を受けていて、以前楽しんでいたことをまったくできない'
        ]
      ],
      [
        'この1週間、仕事、学校、家などでやらなくてはならないことをやる能力について、不安がどれだけ支障を与えていましたか？',
        null
      ],
      [
        'この1週間、社会生活や人間関係について、不安がどれだけ支障を与えていましたか？',
        null
      ]
    ]
  },

  odsis: {
    name: 'ODSIS',
    sub: '抑うつ',
    intro: '以下の項目では抑うつについてお尋ねします。それぞれの項目について、過去1週間の体験に最もよくあてはまる数字を選んでください。',
    q: [
      [
        'この1週間、どのくらいの頻度でうつを感じましたか？',
        [
          'この1週間、うつを感じなかった',
          'たまにうつだった。数回うつを感じた程度',
          'ときどきうつだった。うつを感じるときとそうでないときが同じくらいあった',
          'しばしばうつだった。ほとんどの時間うつだった',
          'いつもうつだった。絶えずうつを感じていた'
        ]
      ],
      [
        'この1週間で、うつを感じたときには、そのうつはどのくらい強い、あるいは深刻なものでしたか？',
        [
          'わずか、あるいはまったくなかった：うつはなかったか、ほとんど気づかないくらいだった',
          '軽度：うつは弱かった',
          '中等度：うつが強くなることがあった',
          '重度：うつはだいたい強いものだった',
          '極重度：うつは圧倒的なものだった'
        ]
      ],
      [
        'この1週間で、うつのために通常ならば楽しんでいる活動を行ったり、興味を持ったりすることがどのくらい難しかったですか？',
        null
      ],
      [
        'この1週間、仕事、学校、家などでやらなくてはならないことをやる能力について、うつがどれだけ支障を与えていましたか？',
        null
      ],
      [
        'この1週間、社会生活や人間関係について、うつがどれだけ支障を与えていましたか？',
        null
      ]
    ]
  },

  positive: {
    name: 'ポジティブ感情尺度',
    sub: 'ポジティブ感情',
    intro: '以下の項目ではポジティブ感情についてお尋ねします。過去1週間の体験に最もよくあてはまる数字を選んでください。ポジティブ感情には、幸せ、うれしい、楽しい、すがすがしい、面白い、ほっこりする、心温まる、気持ちいい、ありがたい、やさしい、かわいい、愛おしいなど、様々な種類のポジティブ感情、感覚、体験を含めてください。',
    q: [
      [
        'この1週間、どのくらいの頻度でポジティブ感情を感じましたか？',
        [
          'この1週間、ポジティブ感情を感じなかった',
          'たまにポジティブ感情。数回ポジティブ感情を感じた程度',
          'ときどきポジティブ感情。ポジティブ感情を感じるときとそうでないときが同じくらいあった',
          'しばしばポジティブ感情だった。ほとんどの時間ポジティブ感情があった',
          'いつもポジティブ感情だった。絶えずポジティブ感情を感じていた'
        ]
      ],
      [
        'この1週間で、ポジティブ感情を感じたときには、それはどのくらい強いものでしたか？',
        [
          '非常に弱い、あるいはまったくなかった：ポジティブ感情はなかったか、ほとんど気づかないくらい弱かった',
          '軽度：ポジティブ感情は弱かった',
          '中等度：ポジティブ感情が強くなることがあった',
          '非常に強い：ポジティブ感情はだいたい強いものだった',
          '極めて強い：ポジティブ感情はほとんど常に強いものだった'
        ]
      ],
      [
        'この1週間、活動を行ったり、興味を抱き続けたりするのにポジティブ感情はどのくらい助けになりましたか？',
        null
      ],
      [
        'この1週間、仕事、学校、家などでやらなくてはならないことをやるうえで、ポジティブ感情はどれだけ助けになりましたか？',
        null
      ],
      [
        'この1週間、社会生活や人間関係において、ポジティブ感情がどれだけ助けになりましたか？',
        null
      ]
    ]
  },

  other: {
    name: 'その他の感情尺度',
    sub: '自由に設定した感情',
    intro: '自分にとってとくに苦しい感情（怒り、恥、嫉妬など）を1つ選び、過去1週間の体験について回答してください。',
    q: [
      [
        'この1週間、どのくらいの頻度で{emotion}を感じましたか？',
        [
          'この1週間、不安を感じなかった',
          'たまに：数回感じた程度',
          'ときどき：感じるときとそうでないときが同じくらいあった',
          'しばしば：ほとんどの時間感じていた',
          'いつも：絶えず感じていた'
        ]
      ],
      [
        'この1週間、{emotion}を感じた時には、その{emotion}はどのくらい強い、あるいは深刻なものでしたか？',
        [
          'わずか、あるいはまったくなかった：この感情がなかったか、ほとんど気づかないくらいだった',
          '軽度：この感情は弱かった',
          '中等度：この感情が強くなることがあった',
          '重度：ほとんどの場合、この感情は強いものだった',
          '極重度：この感情は圧倒的なものだった'
        ]
      ],
      [
        'この1週間、{emotion}のために通常ならば楽しんでいる活動を行ったり、興味を持ったりすることがどのくらい難しかったですか？',
        null
      ],
      [
        'この1週間、仕事、学校、家などでやらなくてはならないことをやる能力について、{emotion}がどれだけ支障を与えていましたか？',
        null
      ],
      [
        'この1週間、社会生活や人間関係について、{emotion}がどれだけ支障を与えていましたか？',
        null
      ]
    ]
  }
};

const avoid = [
  'なし：通常ならば楽しんでいる活動を行ったり興味を持ったりすることが、難しいということはなかった',
  'たまに：この感情のために通常ならば楽しんでいる活動を行ったり、興味を持つことがたまに難しかった。生活の仕方には影響を受けていない',
  'ときどき：この感情のために通常ならば楽しんでいる活動を行ったり、興味を持つことがいくらか難しかった。生活の仕方が少し変わった',
  'しばしば：この感情のために通常ならば楽しんでいる活動を行ったり、興味を持つことがとても難しかった。以前楽しんでいた活動に興味を持てないために、生活の仕方がかなり変わった',
  'いつも：この感情のために通常ならば楽しんでいる活動を行ったり、興味を持つことができなかった。生活の仕方はとても影響を受けていて、以前楽しんでいたことをまったくしていない'
];

const work = [
  'なし：仕事・家・学校でこの感情が支障を与えることはなかった',
  '軽度：仕事・家・学校で、この感情が少し支障を与えていた。物事に取り組むのが前よりも難しいが、依然としてやるべきことはすべてできている',
  '中等度：この感情が確実に支障を与えている。多くのことはこれまでと変わらずやり遂げることができるが、いくつかのことは、できずにそのままになっている',
  '重度：この感情のせいで何かをやり遂げる能力が確実に損なわれている。いくつかのことには手をつけられるが、多くはそれさえもできない。何かをする能力が確実に損なわれている',
  '極重度：この感情によって完全に能力が損なわれている。何かをやりきることができず、退学、辞職や解雇となった。あるいは、家でしなければならないことがまったくできず、借金の取り立てにあったり、立ち退きを命じられた'
];

const social = [
  'なし：この感情は人間関係に支障を与えていない',
  '軽度：この感情がわずかに人間関係に支障を与えている。いくつかの友人関係やその他の関係で影響を受けているものの、全体的には社会生活はまだ充実している',
  '中等度：社会生活での支障をいくらか感じてはいるが、これまでと変わらず親しい関係をいくつか持っている。以前ほどは他人と時間を過ごしていないが、ときどき人と時間を過ごしたり、一緒に活動を楽しむ',
  '重度：この感情のせいで友人関係やその他の関係に大きな支障が出ている。人とつきあうような活動が楽しくない。人と時間を過ごしたり、一緒に活動を楽しむことはほとんどない',
  '極重度：この感情が社会活動を崩壊させている。すべての人間関係に支障があるか、関係が終わった。家族関係もきわめてこじれている'
];

const positiveActivity = [
  'なし：ポジティブ感情がごくわずかだったため、通常ならば楽しんでいる活動を行ったり興味を持ったりすることが難しかった',
  'たまに：ポジティブ感情のおかげでたまに活動を行ったり、興味を抱き続けたりした',
  'ときどき：ポジティブ感情のおかげでときどき活動を行ったり、興味を抱き続けたりした。生活のなかで何度か活動を楽しめた',
  'しばしば：ポジティブ感情のおかげでしばしば活動を行えて、興味を抱き続けた。楽しい活動を行うために、生活の送り方がかなり変わった',
  'いつも：ポジティブ感情のおかげでほとんどすべての活動を行い、興味を抱き続けることができた。活動を最大限楽しめる生活スタイルになっていた'
];

const positiveWork = [
  'なし：仕事・家・学校でポジティブ感情が助けになることはなかった',
  '少し：仕事・家・学校で、ポジティブ感情が一部の面で助けになった',
  '助けになっていた：ポジティブ感情は、やらなければならないことの楽しさを確実に高めていた',
  '非常に助けになっていた：ポジティブ感情のおかげで何かをやり遂げる能力は確実に改善した',
  '極めて助けになった：ポジティブ感情は生活の質に最良の変化をもたらした'
];

const positiveSocial = [
  'なし：ポジティブ感情は人間関係に影響を与えていない',
  '少し：ポジティブ感情がわずかに人間関係によい影響を与えた',
  '助けになった：ポジティブ感情のおかげで社会生活はいくらか改善した。以前より人間関係を楽しみ、社交的なつきあいに参加していることに気づいた',
  '非常に助けになった：ポジティブ感情のせいで友人関係やその他の関係が大きく改善した。社交的な活動を楽しみ、人付き合いをしばしば行った',
  '極めて助けになった：ポジティブ感情が社会活動に最良の変化をもたらした。すべての人間関係が改善した。家族生活も良好だ'
];

const swap = (arr, a, b) =>
  arr.map(s =>
    s.replaceAll('この感情', a).replaceAll('不安', b)
  );

S.other.q[2][1] = avoid;
S.other.q[3][1] = work;
S.other.q[4][1] = social;

S.odsis.q[2][1] = swap(avoid, 'うつ', 'うつ');
S.odsis.q[3][1] = swap(work, 'うつ', 'うつ');
S.odsis.q[4][1] = swap(social, 'うつ', 'うつ');

S.oasis.q[3][1] = swap(work, '不安', '不安');
S.oasis.q[4][1] = swap(social, '不安', '不安');

S.positive.q[2][1] = positiveActivity;
S.positive.q[3][1] = positiveWork;
S.positive.q[4][1] = positiveSocial;

const KEY = 'up-record-v1';

const base = () => ({
  version: 1,
  emotions: [],
  records: []
});

let db;

try {
  db = JSON.parse(localStorage.getItem(KEY)) || base();

  if (
    !Array.isArray(db.emotions) ||
    !Array.isArray(db.records)
  ) {
    throw Error();
  }
} catch (e) {
  db = base();
  alert(
    '保存データを読み込めませんでした。' +
    'バックアップがある場合は設定から復元してください。'
  );
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(db));
    return true;
  } catch (e) {
    alert(
      '保存に失敗しました。端末の空き容量や' +
      'ブラウザの設定をご確認ください。'
    );
    return false;
  }
}

const uid = () =>
  crypto.randomUUID
    ? crypto.randomUUID()
    : Date.now() + '-' +
      Math.random().toString(36).slice(2);

const esc = s =>
  String(s ?? '').replace(
    /[&<>"']/g,
    c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c])
  );

const getName = id =>
  S[id]?.name ||
  db.emotions.find(e => e.id === id)?.name ||
  '削除された尺度';

const getDef = id => S[id] || S.other;

const localValue = (d = new Date()) => {
  let z = new Date(
    d.getTime() - d.getTimezoneOffset() * 60000
  );
  return z.toISOString().slice(0, 16);
};

const fmt = iso =>
  new Date(iso).toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

const total = r =>
  r.answers.reduce((a, b) => a + b, 0);

let page = 'home';
let draft = null;
let step = 0;

let graphPeriod = '30';
let graphMode = 'total';
let graphScale = 'oasis';
let graphVisible = {};

const root = document.getElementById('page');

function notify(s) {
  let n = document.getElementById('notice');
  n.textContent = s;
  n.style.display = 'block';

  clearTimeout(notify.t);

  notify.t = setTimeout(
    () => n.style.display = 'none',
    2500
  );
}

function showPage(p) {
  page = p;
  draft = null;
  render();
  scrollTo(0, 0);
}

function render() {
  document
    .querySelectorAll('.bottom button')
    .forEach(b =>
      b.classList.toggle(
        'active',
        b.dataset.page === page
      )
    );

  ({
    home: home,
    records: records,
    graph: graph,
    settings: settings,
    answer: answer,
    review: review
  })[page]?.();
}

function home() {
  root.innerHTML = `
    <h2>質問票を選択</h2>

    <div class="card soft">
      <p class="muted">
        過去1週間の状態を記録します。
        質問票ごとに5問、各0〜4点です。
      </p>

      ${['oasis', 'odsis', 'positive']
        .map(id => entry(id))
        .join('')}
    </div>

    <div class="section-head">
      <h2>その他の感情尺度</h2>
      <span class="pill">自由に追加</span>
    </div>

    ${
      db.emotions
        .map(e => entry(e.id, true))
        .join('') ||
      '<p class="muted">まだ感情尺度が登録されていません。</p>'
    }

    <button class="btn wide" onclick="emotionAdd()">
      ＋ 感情尺度を追加
    </button>
  `;
}

function entry(id, editable = false) {
  return `
    <div class="entry">
      <div class="grow">
        <b>${esc(getName(id))}</b>
        <small>${esc(getDef(id).sub)}・5問</small>
      </div>

      ${
        editable
          ? `
            <button class="btn"
              onclick="emotionRename('${id}')">
              変更
            </button>

            <button class="btn danger"
              onclick="emotionDelete('${id}')">
              削除
            </button>
          `
          : ''
      }

      <button class="btn primary"
        onclick="start('${id}')">
        回答
      </button>
    </div>
  `;
}

function modal(html) {
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modal').showModal();
}

function closeModal() {
  document.getElementById('modal').close();
}

function emotionAdd() {
  modal(`
    <h2>感情尺度を追加</h2>

    <label>
      感情の名前
      <input
        id="emotionName"
        class="field"
        maxlength="40"
        placeholder="例：怒り、焦り、罪悪感"
      >
    </label>

    <div class="actions">
      <button class="btn" onclick="closeModal()">
        キャンセル
      </button>

      <button class="btn primary"
        onclick="saveEmotion()">
        追加
      </button>
    </div>
  `);
}

function saveEmotion() {
  let name = document
    .getElementById('emotionName')
    .value.trim();

  if (!name) {
    return alert('名前を入力してください');
  }

  let names = [
    ...Object.keys(S)
      .filter(x => x !== 'other')
      .map(getName),
    ...db.emotions.map(e => e.name)
  ];

  if (names.includes(name)) {
    return alert('同じ名前の尺度が存在します');
  }

  db.emotions.push({
    id: uid(),
    name
  });

  if (persist()) {
    closeModal();
    render();
    notify('追加しました');
  }
}

function emotionRename(id) {
  let e = db.emotions.find(x => x.id === id);
  if (!e) return;

  modal(`
    <h2>感情尺度の名前変更</h2>

    <label>
      新しい名前
      <input
        id="emotionName"
        class="field"
        maxlength="40"
        value="${esc(e.name)}"
      >
    </label>

    <p class="muted">
      記録はそのまま引き継がれ、
      グラフの名前も更新されます。
    </p>

    <div class="actions">
      <button class="btn" onclick="closeModal()">
        キャンセル
      </button>

      <button class="btn primary"
        onclick="renameEmotion('${id}')">
        保存
      </button>
    </div>
  `);
}

function renameEmotion(id) {
  let name = document
    .getElementById('emotionName')
    .value.trim();

  let e = db.emotions.find(x => x.id === id);

  if (!name) {
    return alert('名前を入力してください');
  }

  if (
    db.emotions.some(
      x => x.id !== id && x.name === name
    ) ||
    [
      'OASIS',
      'ODSIS',
      'ポジティブ感情尺度'
    ].includes(name)
  ) {
    return alert('同じ名前の尺度が存在します');
  }

  e.name = name;

  if (persist()) {
    closeModal();
    render();
    notify('名前を変更しました');
  }
}

function emotionDelete(id) {
  let e = db.emotions.find(x => x.id === id);
  if (!e) return;

  let n = db.records.filter(
    r => r.scaleId === id
  ).length;

  modal(`
    <h2>感情尺度の削除</h2>

    <p class="warning">
      「${esc(e.name)}」と、その回答記録
      <b>${n}件</b>を完全に削除します。
      元に戻せません。
    </p>

    <div class="actions">
      <button class="btn" onclick="closeModal()">
        キャンセル
      </button>

      <button class="btn danger"
        onclick="deleteEmotion('${id}')">
        記録ごと削除
      </button>
    </div>
  `);
}

function deleteEmotion(id) {
  db.emotions = db.emotions.filter(
    x => x.id !== id
  );

  db.records = db.records.filter(
    x => x.scaleId !== id
  );

  if (persist()) {
    closeModal();
    render();
    notify('削除しました');
  }
}

function start(id, recordId) {
  let rec = recordId
    ? db.records.find(r => r.id === recordId)
    : null;

  draft = {
    id: rec?.id || null,
    scaleId: id,
    datetime: rec?.datetime ||
      new Date().toISOString(),
    answers: rec
      ? [...rec.answers]
      : [null, null, null, null, null]
  };

  step = 0;
  page = 'answer';
  render();
  scrollTo(0, 0);
}

function questionText(s, id) {
  return s.replaceAll(
    '{emotion}',
    getName(id)
  );
}

function answer() {
  let d = getDef(draft.scaleId);
  let q = d.q[step];
  let a = draft.answers[step];

  root.innerHTML = `
    <button class="btn"
      onclick="showPage('${draft.id ? 'records' : 'home'}')">
      ← 戻る
    </button>

    <h2 style="margin-top:18px">
      ${esc(getName(draft.scaleId))}
    </h2>

    <div class="muted">
      設問 ${step + 1} / 5
    </div>

    <div class="progress">
      ${
        Array.from(
          { length: 5 },
          (_, i) =>
            `<span class="${i <= step ? 'done' : ''}"></span>`
        ).join('')
      }
    </div>

    ${
      step === 0
        ? `<p class="muted">${esc(d.intro)}</p>`
        : ''
    }

    <div class="card">
      <p class="question">
        ${esc(questionText(q[0], draft.scaleId))}
      </p>

      ${
        q[1].map(
          (o, i) => `
            <label class="option">
              <input
                type="radio"
                name="answer"
                value="${i}"
                ${a === i ? 'checked' : ''}
                onchange="setAnswer(${i})"
              >

              <strong>${i}点</strong>
              ${esc(o)}
            </label>
          `
        ).join('')
      }
    </div>

    <div class="actions">
      <button
        class="btn"
        ${step === 0 ? 'disabled' : ''}
        onclick="prevStep()">
        前へ
      </button>

      <button
        class="btn primary"
        ${a === null ? 'disabled' : ''}
        onclick="nextStep()">
        ${step === 4 ? '回答確認へ' : '次へ'}
      </button>
    </div>
  `;
}

function setAnswer(v) {
  draft.answers[step] = v;
  render();
}

function prevStep() {
  if (step > 0) {
    step--;
    render();
    scrollTo(0, 0);
  }
}

function nextStep() {
  if (draft.answers[step] === null) return;

  if (step < 4) {
    step++;
    page = 'answer';
  } else {
    page = 'review';
  }

  render();
  scrollTo(0, 0);
}

function review() {
  let d = getDef(draft.scaleId);

  root.innerHTML = `
    <h2>回答内容の確認</h2>

    <p class="muted">
      保存前に日時と回答を確認してください。
    </p>

    <label>
      記録日時
      <input
        class="field"
        id="recordDate"
        type="datetime-local"
        value="${esc(localValue(new Date(draft.datetime)))}"
        onchange="setDraftDate(this.value)"
      >
    </label>

    <div class="card">
      <b>${esc(getName(draft.scaleId))}</b>

      ${
        draft.answers.map(
          (v, i) => `
            <div class="record-row">
              <span>
                設問${i + 1}　
                ${esc(questionText(d.q[i][0], draft.scaleId))}
              </span>
              <b>${v}点</b>
            </div>
          `
        ).join('')
      }

      <div class="record-row">
        <b>合計点数</b>

        <span class="score">
          ${draft.answers.reduce((a, b) => a + b, 0)}
          / 20点
        </span>
      </div>
    </div>

    <div class="actions">
      <button class="btn"
        onclick="page='answer';step=4;render()">
        回答を修正
      </button>

      <button class="btn primary"
        onclick="saveRecord()">
        ${draft.id ? '変更を保存' : '記録を保存'}
      </button>
    </div>
  `;
}

function setDraftDate(v) {
  let t = new Date(v);

  if (!Number.isNaN(t.getTime())) {
    draft.datetime = t.toISOString();
  }
}

function saveRecord() {
  let el = document.getElementById('recordDate');

  if (
    !el.value ||
    Number.isNaN(new Date(el.value).getTime())
  ) {
    return alert('有効な日時を入力してください');
  }

  setDraftDate(el.value);

  if (
    draft.answers.some(
      x => !Number.isInteger(x) || x < 0 || x > 4
    )
  ) {
    return alert('5問すべてに回答してください');
  }

  let record = {
    id: draft.id || uid(),
    scaleId: draft.scaleId,
    datetime: draft.datetime,
    answers: [...draft.answers]
  };

  let idx = db.records.findIndex(
    r => r.id === record.id
  );

  if (idx >= 0) {
    db.records[idx] = record;
  } else {
    db.records.push(record);
  }

  if (persist()) {
    draft = null;
    page = 'records';
    render();
    scrollTo(0, 0);
    notify('記録を保存しました');
  }
}

function records() {
  let sorted = [...db.records].sort(
    (a, b) =>
      new Date(b.datetime) - new Date(a.datetime)
  );

  root.innerHTML = `
    <h2>記録一覧</h2>

    <p class="muted">
      記録 ${sorted.length}件。
      日時・回答内容を変更できます。
    </p>

    ${
      sorted.length
        ? sorted.map(
            r => `
              <div class="card">
                <div class="record-row">
                  <div>
                    <b>${esc(getName(r.scaleId))}</b>

                    <small class="muted"
                      style="display:block">
                      ${esc(fmt(r.datetime))}
                    </small>
                  </div>

                  <span class="score">
                    ${total(r)} / 20
                  </span>
                </div>

                <div class="actions"
                  style="margin-top:12px">

                  <button class="btn"
                    onclick="recordDetail('${r.id}')">
                    詳細
                  </button>

                  <button class="btn"
                    onclick="start('${r.scaleId}','${r.id}')">
                    編集
                  </button>

                  <button class="btn danger"
                    onclick="recordDelete('${r.id}')">
                    削除
                  </button>
                </div>
              </div>
            `
          ).join('')
        : `
          <div class="card muted">
            まだ記録がありません。
            ホームから質問票に回答してください。
          </div>
        `
    }
  `;
}

function recordDetail(id) {
  let r = db.records.find(x => x.id === id);
  if (!r) return;

  let d = getDef(r.scaleId);

  modal(`
    <h2>${esc(getName(r.scaleId))}</h2>

    <p>
      ${esc(fmt(r.datetime))}
      <b>${total(r)}/20点</b>
    </p>

    ${
      r.answers.map(
        (a, i) => `
          <div class="card">
            <b>設問${i + 1}：${a}点</b>

            <p>
              ${esc(questionText(d.q[i][0], r.scaleId))}
            </p>

            <p class="muted">
              ${esc(d.q[i][1][a])}
            </p>
          </div>
        `
      ).join('')
    }

    <button class="btn wide"
      onclick="closeModal()">
      閉じる
    </button>
  `);
}

function recordDelete(id) {
  let r = db.records.find(x => x.id === id);
  if (!r) return;

  modal(`
    <h2>記録を削除</h2>

    <p class="warning">
      ${esc(getName(r.scaleId))}
      （${esc(fmt(r.datetime))}）
      の回答を削除します。
      元に戻せません。
    </p>

    <div class="actions">
      <button class="btn"
        onclick="closeModal()">
        キャンセル
      </button>

      <button class="btn danger"
        onclick="deleteRecord('${id}')">
        削除する
      </button>
    </div>
  `);
}

function deleteRecord(id) {
  db.records = db.records.filter(
    r => r.id !== id
  );

  if (persist()) {
    closeModal();
    render();
    notify('記録を削除しました');
  }
}

const colors = [
  '#2b78bd',
  '#e07845',
  '#319b79',
  '#9562bc',
  '#c75b87',
  '#b48b30',
  '#4b9baa',
  '#a35e5e'
];

const allIds = () => [
  'oasis',
  'odsis',
  'positive',
  ...db.emotions.map(x => x.id)
];

/* =========================================
   第3部：グラフ・バックアップ・設定
========================================= */

function graph() {
  const ids = allIds();

  if (!ids.includes(graphScale)) {
    graphScale = ids[0];
  }

  const periodOptions = [
    ['7', '1週間'],
    ['30', '1か月'],
    ['90', '3か月'],
    ['all', '全期間']
  ];

  root.innerHTML = `
    <h2>グラフ</h2>

    <div class="card">
      <div class="toolbar">
        <label>
          表示期間
          <select
            class="field"
            id="graphPeriod"
            onchange="changeGraphPeriod(this.value)"
          >
            ${periodOptions.map(([v, label]) => `
              <option
                value="${v}"
                ${graphPeriod === v ? 'selected' : ''}
              >
                ${label}
              </option>
            `).join('')}
          </select>
        </label>

        <label>
          表示内容
          <select
            class="field"
            id="graphMode"
            onchange="changeGraphMode(this.value)"
          >
            <option value="total"
              ${graphMode === 'total' ? 'selected' : ''}>
              合計点
            </option>
            <option value="question"
              ${graphMode === 'question' ? 'selected' : ''}>
              設問別
            </option>
          </select>
        </label>
      </div>

      ${
        graphMode === 'total'
          ? `
            <h3>表示する尺度</h3>

            <div class="checks">
              ${ids.map((id, i) => `
                <label>
                  <input
                    type="checkbox"
                    ${graphVisible[id] !== false
                      ? 'checked'
                      : ''}
                    onchange="toggleGraphScale(
                      '${id}', this.checked
                    )"
                  >
                  <span
                    class="dot"
                    style="background:
                      ${colors[i % colors.length]}">
                  </span>
                  ${esc(getName(id))}
                </label>
              `).join('')}
            </div>
          `
          : `
            <label>
              対象の尺度
              <select
                class="field"
                onchange="changeGraphScale(this.value)"
              >
                ${ids.map(id => `
                  <option
                    value="${id}"
                    ${graphScale === id ? 'selected' : ''}
                  >
                    ${esc(getName(id))}
                  </option>
                `).join('')}
              </select>
            </label>
          `
      }

      <p class="muted">
        横軸は実際の記録日時に基づきます。
        同じ日付でも記録時刻に応じて位置が変わります。
        横に長いグラフはスクロールできます。
      </p>

      <div class="chart-wrap" id="chartWrap">
        <canvas id="chartCanvas"></canvas>
      </div>

      <div class="legend" id="chartLegend"></div>
    </div>
  `;

  drawGraph();
}

function changeGraphPeriod(v) {
  graphPeriod = v;
  graph();
}

function changeGraphMode(v) {
  graphMode = v;
  graph();
}

function changeGraphScale(v) {
  graphScale = v;
  graph();
}

function toggleGraphScale(id, checked) {
  graphVisible[id] = checked;
  drawGraph();
}

function drawGraph() {
  const canvas = document.getElementById('chartCanvas');
  const wrap = document.getElementById('chartWrap');
  const legend = document.getElementById('chartLegend');

  if (!canvas || !wrap) return;

  const now = new Date();
  const dayMs = 24 * 60 * 60 * 1000;

  let end = new Date(now);
  end.setHours(23, 59, 59, 999);

  let start;

  if (graphPeriod === 'all') {
    const dates = db.records
      .map(r => new Date(r.datetime).getTime())
      .filter(Number.isFinite);

    const first = dates.length
      ? Math.min(...dates)
      : now.getTime();

    start = new Date(first);
    start.setHours(0, 0, 0, 0);
  } else {
    start = new Date(end);
    start.setDate(
      start.getDate() - Number(graphPeriod) + 1
    );
    start.setHours(0, 0, 0, 0);
  }

  const startMs = start.getTime();
  const endMs = end.getTime();

  const duration = Math.max(dayMs, endMs - startMs);
  const days = duration / dayMs;

  const width = Math.min(
    30000,
    Math.max(
      wrap.clientWidth - 2,
      Math.ceil(days * 24) + 100
    )
  );

  const height = 350;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  const left = 48;
  const right = 22;
  const top = 24;
  const bottom = 50;

  const plotW = width - left - right;
  const plotH = height - top - bottom;

  const maxY = graphMode === 'total' ? 20 : 4;

  const x = ms =>
    left + (ms - startMs) / duration * plotW;

  const y = value =>
    top + plotH - value / maxY * plotH;

  // 横方向の補助線
  ctx.strokeStyle = '#e7edf3';
  ctx.lineWidth = 1;
  ctx.font = '12px sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  for (let value = 0; value <= maxY; value++) {
    if (
      graphMode === 'total' &&
      value % 5 !== 0
    ) {
      continue;
    }

    const yy = y(value);

    ctx.beginPath();
    ctx.moveTo(left, yy);
    ctx.lineTo(width - right, yy);
    ctx.stroke();

    ctx.fillStyle = '#667b8e';
    ctx.fillText(
      String(value),
      left - 9,
      yy
    );
  }

  // 日付目盛り
  const tickDays =
    days <= 10 ? 1 :
    days <= 35 ? 5 :
    days <= 100 ? 14 :
    days <= 400 ? 30 : 90;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = '11px sans-serif';

  for (
    let d = new Date(start);
    d.getTime() <= endMs;
    d.setDate(d.getDate() + tickDays)
  ) {
    const xx = x(d.getTime());

    ctx.strokeStyle = '#edf1f5';
    ctx.beginPath();
    ctx.moveTo(xx, top);
    ctx.lineTo(xx, top + plotH);
    ctx.stroke();

    ctx.fillStyle = '#708497';

    const label =
      (d.getMonth() + 1) +
      '/' +
      d.getDate();

    ctx.fillText(
      label,
      xx,
      top + plotH + 12
    );
  }

  let series = [];

  if (graphMode === 'total') {
    allIds().forEach((id, i) => {
      if (graphVisible[id] === false) return;

      series.push({
        label: getName(id),
        color: colors[i % colors.length],
        points: db.records
          .filter(r => r.scaleId === id)
          .map(r => ({
            time: new Date(r.datetime).getTime(),
            value: total(r)
          }))
      });
    });
  } else {
    for (let i = 0; i < 5; i++) {
      series.push({
        label: '設問' + (i + 1),
        color: colors[i],
        points: db.records
          .filter(r => r.scaleId === graphScale)
          .map(r => ({
            time: new Date(r.datetime).getTime(),
            value: r.answers[i]
          }))
      });
    }
  }

  let visibleCount = 0;

  series.forEach(s => {
    const points = s.points
      .filter(p =>
        Number.isFinite(p.time) &&
        Number.isFinite(p.value) &&
        p.time >= startMs &&
        p.time <= endMs
      )
      .sort((a, b) => a.time - b.time);

    visibleCount += points.length;

    if (!points.length) return;

    ctx.strokeStyle = s.color;
    ctx.fillStyle = s.color;
    ctx.lineWidth = 2.5;

    ctx.beginPath();

    points.forEach((p, i) => {
      const xx = x(p.time);
      const yy = y(p.value);

      if (i === 0) {
        ctx.moveTo(xx, yy);
      } else {
        ctx.lineTo(xx, yy);
      }
    });

    ctx.stroke();

    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(
        x(p.time),
        y(p.value),
        4,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });
  });

  // 縦軸の名称
  ctx.save();
  ctx.translate(14, top + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = '#60778b';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '12px sans-serif';
  ctx.fillText('点数', 0, 0);
  ctx.restore();

  if (!visibleCount) {
    ctx.fillStyle = '#7b8d9e';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '14px sans-serif';

    ctx.fillText(
      'この期間の記録はありません',
      Math.min(width / 2, left + 220),
      height / 2
    );
  }

  legend.innerHTML = series.map(s => `
    <span>
      <span class="dot"
        style="background:${s.color}">
      </span>
      ${esc(s.label)}
    </span>
  `).join('');
}

/* =========================================
   設定画面
========================================= */

function settings() {
  root.innerHTML = `
    <h2>設定</h2>

    <div class="card">
      <h3>データのバックアップ</h3>

      <p class="muted">
        記録と感情尺度の設定をJSON形式で
        保存できます。
      </p>

      <button
        class="btn wide"
        onclick="exportJSON()">
        JSONバックアップを保存
      </button>

      <h3>バックアップの復元</h3>

      <p class="muted">
        JSONファイルを読み込むと、
        現在のデータが置き換わります。
      </p>

      <input
        class="field"
        type="file"
        id="jsonFile"
        accept=".json,application/json"
      >

      <button
        class="btn wide"
        onclick="importJSON()">
        JSONから復元
      </button>
    </div>

    <div class="card">
      <h3>CSV出力</h3>

      <p class="muted">
        Excelなどで分析できるように、
        記録をCSV形式で出力します。
      </p>

      <button
        class="btn wide"
        onclick="exportCSV()">
        CSVファイルを保存
      </button>
    </div>

    <div class="card">
      <h3>データの保存先</h3>

      <p class="muted">
        記録はこのブラウザの
        localStorageに保存されます。
        別の端末には自動同期されません。
      </p>

      <p class="muted">
        ブラウザのデータ削除や
        端末の変更に備えて、
        定期的にJSONバックアップを
        保存してください。
      </p>
    </div>

    <button class="btn wide"
      onclick="showPage('home')">
      ホームへ戻る
    </button>
  `;
}

/* =========================================
   ファイル保存
========================================= */

function downloadFile(name, content, type) {
  const blob = new Blob(
    [content],
    { type }
  );

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  a.href = url;
  a.download = name;

  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(
    () => URL.revokeObjectURL(url),
    1000
  );
}

function backupDate() {
  const d = new Date();

  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0')
  ].join('');
}

function exportJSON() {
  const data = JSON.stringify(db, null, 2);

  downloadFile(
    'UP記録表_' + backupDate() + '.json',
    data,
    'application/json;charset=utf-8'
  );

  notify('バックアップを出力しました');
}

/* =========================================
   JSON復元
========================================= */

function validDatabase(data) {
  if (
    !data ||
    typeof data !== 'object' ||
    data.version !== 1 ||
    !Array.isArray(data.emotions) ||
    !Array.isArray(data.records)
  ) {
    return false;
  }

  const fixedIds = [
    'oasis',
    'odsis',
    'positive'
  ];

  const emotionIds = new Set(fixedIds);
  const recordIds = new Set();

  for (const e of data.emotions) {
    if (
      !e ||
      typeof e.id !== 'string' ||
      !e.id ||
      typeof e.name !== 'string' ||
      !e.name.trim() ||
      emotionIds.has(e.id)
    ) {
      return false;
    }

    emotionIds.add(e.id);
  }

  for (const r of data.records) {
    if (
      !r ||
      typeof r.id !== 'string' ||
      !r.id ||
      recordIds.has(r.id) ||
      !emotionIds.has(r.scaleId) ||
      !Array.isArray(r.answers) ||
      r.answers.length !== 5 ||
      r.answers.some(
        n =>
          !Number.isInteger(n) ||
          n < 0 ||
          n > 4
      ) ||
      typeof r.datetime !== 'string' ||
      !Number.isFinite(
        new Date(r.datetime).getTime()
      )
    ) {
      return false;
    }

    recordIds.add(r.id);
  }

  return true;
}

async function importJSON() {
  const input = document.getElementById('jsonFile');
  const file = input?.files?.[0];

  if (!file) {
    return alert('JSONファイルを選択してください');
  }

  let imported;

  try {
    const text = await file.text();
    imported = JSON.parse(text);
  } catch (e) {
    return alert(
      'JSONファイルを読み込めませんでした'
    );
  }

  if (!validDatabase(imported)) {
    return alert(
      '対応していない形式、または不正なデータです'
    );
  }

  const ok = confirm(
    '現在の記録をすべて置き換えます。\n' +
    '復元前のデータは失われます。\n\n' +
    '続行しますか？'
  );

  if (!ok) return;

  const previous = db;
  db = imported;

  if (!persist()) {
    db = previous;
    return;
  }

  graphVisible = {};
  graphScale = 'oasis';

  showPage('home');
  notify('バックアップを復元しました');
}

/* =========================================
   CSV出力
========================================= */

function csvCell(value) {
  const s = String(value ?? '');

  return '"' +
    s.replaceAll('"', '""') +
    '"';
}

function exportCSV() {
  const rows = [
    [
      '記録ID',
      '尺度ID',
      '尺度名',
      '記録日時',
      '設問1',
      '設問2',
      '設問3',
      '設問4',
      '設問5',
      '合計点'
    ]
  ];

  const sorted = [...db.records].sort(
    (a, b) =>
      new Date(a.datetime) -
      new Date(b.datetime)
  );

  sorted.forEach(r => {
    rows.push([
      r.id,
      r.scaleId,
      getName(r.scaleId),
      fmt(r.datetime),
      ...r.answers,
      total(r)
    ]);
  });

  const csv = rows
    .map(row =>
      row.map(csvCell).join(',')
    )
    .join('\r\n');

  // BOMを付けてExcelでの文字化けを軽減
  downloadFile(
    'UP記録表_' + backupDate() + '.csv',
    '\uFEFF' + csv,
    'text/csv;charset=utf-8'
  );

  notify('CSVを出力しました');
}

/* =========================================
   初期表示
========================================= */

render();

window.addEventListener('resize', () => {
  if (page === 'graph') {
    drawGraph();
  }
});
