export default function VitePluginLeaderLine() {
  return {
    name: 'vite-plugin-leader-line',
    transform(code: string, id: string) {
      if (/node_modules/.test(id) && /leader-line/.test(id) && /\.(js)/.test(id)) {
        code = code + ` export default LeaderLine`
      }
      return code
    }
  }
}
