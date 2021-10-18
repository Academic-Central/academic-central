# academic-central

### 注意：
Github のアカウントがあることを前提にしています。
[大学関係者であれば、Github Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount)を取得できます。

また、ビルドには `yarn` もしくは　｀npm` が必要になります。

## インストール

まず、Github からクローンします。
適当な作業ディレクトに移動して、以下を実行。

```
% git clone git@github.com:Github-ID/academic-central.git
```

ここで`Github-ID`は Github のアカウント名です。

クローンしたディレクトに移動し、そこで作業します。
```
% cd academic-central 
% ls
CODE_OF_CONDUCT.md LICENSE            _headers           gatsby-node.js     netlify.toml       renovate.json      static
CONTRIBUTING.md    README.md          gatsby-config.js   lambda             package.json       src                yarn.lock
```

### 環境構築

`yarn` で環境構築を行います。

```
% yarn
```
`npm install` でもOKですが、`yarn｀の方が早いです。
なお、`yarn`と`npm`を混在して使うと誤動作する場合がありますので、やめましょう。


##　ビルド (build)

ビルドとは、サイトを公開するための html, Javascript や CSS ファイルを作成することを言います。
ビルドが通れば Warning が出ても問題ありません。

ビルドは以下のコマンドで実行できます。

```
% gatsby clean && gatsby build
(npm run clean; npm run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンドです。
`npm run clean, npm run buil` は｀package.json`で定義されています。

## ディベロプ (develop)

ディベロプとは、公開前の一次チェックをするために html, Javascript や CSS ファイルを作成することを言います。


