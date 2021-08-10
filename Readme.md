# レポジトリ説明

## 概要

特定言語の型を、別言語の型に変換する。

## 利用方法

### typescript => json schema

#### 実行方法

1. `./inputs/typescript.ts`に型定義する。
2. command 叩く。

```sh
npm run ts:json
```

#### 注意

- `Patial`などを使うと、schema が汚くなる。
