// 「どこに線を引くか」アプリの設定（政治社会学Ⅱ 第11回）
// カードの文言を変えるときは、ここだけを直す。
window.LINE_APP = {
  // 集計の受け口（Google Apps Script のウェブアプリのURL）。
  // 空のままだと「試作モード」になり、回答はその端末の中だけに保存される。
  endpoint: "https://script.google.com/macros/s/AKfycbz3Hq9NUgTwd0HJOve9szctckrunCI-SwboaF56smOe44n3ONUVPJY4BpB9bqAqb6EQxg/exec",

  // 回答をまとめる単位。リハーサルと本番で変えると、集計が混ざらない。
  session: "seiji11-20261202",

  title: "どこに線を引くか",
  question: "選挙で、次のやり方は許されるか。",
  instruction: "許せるものを上に、許せないものを下に並べ、「ここから先はだめ」の赤い線を動かしてください。",
  hint: "迷ったら：本人は知っているか／ほかの人に見えるか／人かAIか",

  cards: [
    { id: "A", text: "年齢と地域で、広告を出し分ける" },
    { id: "B", text: "投票歴入りのアプリで、行きそうな家だけ訪ねる" },
    { id: "C", text: "「いいね」から性格を推定し、性格ごとに違う広告を送る" },
    { id: "D", text: "アプリに答えた人の「友だち」のデータも集める" },
    { id: "E", text: "AIの声で電話をかける（AIだとは言わない）" },
    { id: "F", text: "AIが自分の候補を良く答えるよう、サイトを工夫" },
    { id: "G", text: "相手候補をまねたAIチャットボットを公開する" }
  ],

  // 「理由をひとこと」の欄を出すか（true / false）
  askReason: true
};

// リハーサル用：URLの末尾に ?s=test のように付けると、その名前の別の回として扱う（本番の回答と混ざらない）。
(function () {
  var m = /[?&]s=([A-Za-z0-9_-]{1,30})(&|$)/.exec(location.search);
  if (m) { window.LINE_APP.session = m[1]; window.LINE_APP.rehearsal = m[1]; }
})();
