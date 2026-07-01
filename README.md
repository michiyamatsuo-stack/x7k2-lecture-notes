# ジャーナリズム実習基礎 学生作品アーカイブ

学生が制作した記事作品・動画作品を一覧・公開するための静的サイトです。
フレームワーク不要、プレーンなHTML/CSS/JSで構成されており、GitHub Pagesでの公開を想定しています。

## フォルダ構成

```
my-lecture-site/
├── index.html              トップページ（作品一覧）
├── robots.txt              検索エンジン向け設定（noindex運用のためクロールは許可）
├── data/
│   └── works.json          作品一覧データ（一覧表示はここを見て自動生成される）
├── works/
│   ├── template-article.html   記事作品ページの雛形
│   ├── template-video.html     動画作品ページの雛形
│   └── work01.html などの実ページ
├── css/style.css           全ページ共通スタイル
└── js/main.js              トップページの一覧描画ロジック
```

## 新しい作品を追加する手順

1. **ページを複製する**
   - 記事作品の場合: `works/template-article.html` をコピーし、`works/work04.html` のような名前で保存する
   - 動画作品の場合: `works/template-video.html` を同様にコピーする

2. **複製したページの中身を差し替える**
   - `<title>` タグを作品タイトルに変更
   - 学生の顔写真（`work-profile__photo` の `src`）を差し替え
   - 学生名・作品タイトルを入力
   - 記事作品: 本文（`work-body`）と写真（`work-gallery` 内の `img`）を差し替え
   - 動画作品: `iframe` の `src` を YouTube の埋め込みURL（`https://www.youtube.com/embed/動画ID`）に差し替え
     - YouTubeの動画ページで「共有」→「埋め込む」を選ぶと埋め込みURLが確認できます

3. **`data/works.json` に1件分の情報を追加する**
   ```json
   {
     "id": "work04",
     "title": "作品タイトル",
     "student": "学生名",
     "thumbnail": "サムネール画像のURL",
     "type": "article",
     "page": "works/work04.html"
   }
   ```
   `type` は記事作品なら `"article"`、動画作品なら `"video"` にしてください。
   配列の末尾にカンマ区切りで追加してください（JSONの記法エラーに注意）。

4. **ブラウザで確認する**
   - 下記「ローカルでの確認方法」の手順でサーバーを起動し、カードが正しく表示されるか確認する
   - カードをクリックして個別ページが正しく開くか確認する

## 作品を削除する場合

`data/works.json` から該当する項目を削除するだけでOKです（HTMLファイル自体は残しても消しても構いません）。

## サムネール・顔写真について

サンプルデータはダミー画像（placehold.co）を使用しています。実際の画像に差し替える場合は、
画像ファイルを `assets/` フォルダなどにまとめて追加し、`src` をそのファイルへの相対パスに変更してください。

## トップページの説明文を変更したい場合

`index.html` 内の `<p class="site-description" id="site-description">` のテキストを直接書き換えてください。

## ローカルでの確認方法

`data/works.json` を `fetch` で読み込む都合上、`index.html` をダブルクリックして直接開くと
ブラウザのセキュリティ制限で一覧が表示されないことがあります。以下のいずれかの方法でローカルサーバーを立てて確認してください。

```bash
# フォルダ内で実行
python -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

または、VS Code の拡張機能「Live Server」などを利用しても構いません。

## GitHub Pages での公開

1. このリポジトリをGitHubにpushする
2. リポジトリの Settings → Pages で、公開ブランチ（例: `main`）とルートフォルダを指定する
3. 公開後、ページ上部に検索避け（`noindex`）が効いているか、`robots.txt` の内容を確認する
