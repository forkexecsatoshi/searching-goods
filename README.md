# 開発環境の準備

- `npm install`でライブラリのインストール
- `npm start`で`localhost:3000`を立ち上げる

# ファイル構成

.
├── decision_AI: 前作ってた html ベースのファイル達
├── node_modules: package.json を元にインストールしたライブラリ達
├── public
│ ├── index.html: 最終的にここにレンダリングされている
│ ├── manifest.json: Web アプリケーションやブラウザ拡張機能の開発に使用される JSON ファイル
│ └── robots.txt: 検索エンジンのクローラに対して、サイトのどの URL にアクセスしてよいかを伝えるもの
├── src
│ ├── component: コンポーネント(パーツ)をここに全部置いている
│ ├── App.tsx: ここが最終的な index.html の body の中身的なページ
│ ├── index.tsx: App を包んでスタイル当てたりしてる tsx の最上位層
│ ├── react-add-env.d.ts
│ └── reportWebVitals.ts: WebVitals を計測できるらしい
├── .gitignore
├── package-lock.json
└── package.json
├── README.md
└── tsconfig.json
