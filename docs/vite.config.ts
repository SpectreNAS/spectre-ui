import path from 'path'

import { defineConfig } from 'vite'
import Solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'

function resolve(p: string) {
  return path.resolve(__dirname, p)
}

export default defineConfig({
  plugins: [ UnoCSS(), Solid(),],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@solidjs/router')) {
            return 'solid-router'
          }
          if (id.includes('solid-js')) {
            return 'solid-js'
          }
          if (id.includes('node_modules')) {
            return 'libs'
          }
          if (id.includes('packages')) {
            return 'spectre-ui'
          }
          const matchPage = /.*\/docs\/src\/pages\/(.*?)\//.exec(id)
          if (matchPage) {
            return `${matchPage[1]}-page`
          }
          if (id.includes('/docs/src/components')) {
            return 'docs-components'
          }
        }
      }
    }
  }
})
