import { defineConfig } from 'vite'
import VitePluginLeaderLine from './dist/index'

export default defineConfig({
  root: 'demo',
  plugins: [
    VitePluginLeaderLine()
  ]
})