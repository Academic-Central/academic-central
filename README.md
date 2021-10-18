<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  academic-central
</h1>

このサイトは [Gatsby](https://www.gatsbyjs.com/) を使って作成しています．

### 注意：

Github のアカウントがあることを前提にしています。
[大学関係者であれば、Github Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount)を取得できます。

また、ビルドには `yarn` もしくは　｀ npm` が必要になります。

## 🚀 インストール

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

🧐 What's inside?

ディレクトリは以下のようになっています．

```
$ tree -L 1
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── _headers
├── gatsby-config.js
├── gatsby-node.js
├── lambda
├── netlify.toml
├── node_modules
├── package.json
├── public
├── renovate.json
├── src
├── static
└── yarn.lock
```

以下，重要なものだけ説明します．

/node_modules:
ここに npm package でインストールしたモジュールが入ります．
このディレクトリに対して特段のアクションは必要ありません．ほっとけば良いです．

/src:
このディレクトリに公開用のファイルが一式入ります．
つまり，ブラウザで表示するのに必要なファイル全てが格納されています．
従って，このディレクトリに入っているファイルの修正，追加，削除することで Web ページのデザインを行います．

/static:
このディレクトリは，Gatsby では参照されのみで特段の操作は行いません．
従って，こちらには画像ファイルや既に作成してある静的ファイルなどをおきます．

/public:
公開用のディレクトリです．
gatsby build を実行すると，このディレクトリに公開用ファイルが生成されます．
また，gatsby clean を実行すると，このディレクトリとキャッシュがクリアされます．

.gitignore:
Github リポジトリから除外するファイルを指定します．

gatsby-config.js:
Gatsby サイトの設定ファイルです．

gatsby-node.js:
Gatsby Node API の設定ファイルです．

package-lock.json (See package.json below, first).
npm によって自動生成されるファイルです．

package.json:
Node で実行するパッケージを指定するファイルです．

README.md:
このフィあるです．

### 環境構築

`yarn` で環境構築を行います。

```
% yarn
```

`npm install` でも OK ですが、`yarn｀の方が早いです。 なお、`yarn`と`npm`を混在して使うと誤動作する場合がありますので、やめましょう。

##　ビルド (build)

ビルドとは、サイトを公開するための html, Javascript や CSS ファイルを作成することを言います。
ビルドが通れば Warning が出ても問題ありません。

ビルドは以下のコマンドで実行できます。

```
% gatsby clean && gatsby build
(npm run clean; npm run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンドです。
`npm run clean, npm run buil` は｀ package.json`で定義されています。

## ディベロプ (develop)

ディベロプとは、公開前の一次チェックをするために html, Javascript や CSS ファイルを作成することを言います。

```
% gatsby clean && gatsby develop
(npm run clean; npm run develop でもOK)
```

http://localhost:8000/ で見ることができます．

## 公開

Github Actions を設定してありますので，github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．
Github Actions の設定ファイルは `.github/workflows/manual.yml` です．
