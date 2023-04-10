# vite-plugin-leader-line

A [Vite plugin](https://github.com/vitejs/vite) for  [leader-line](https://github.com/anseki/leader-line)

This plugin adds a default export for leader-line

Supporting Vite 3 and 4

## 📦 Install

```shell
# npm
npm i -D vite-plugin-leader-line

# yarn
yarn add -D vite-plugin-leader-line
```

## Usage

Configure the following in vite.config.js :

```ts
import { defineConfig } from 'vite'
import VitePluginLeaderLine from 'vite-plugin-leader-line'

export default defineConfig({
  plugins: [
    VitePluginLeaderLine()
  ]
})
```
