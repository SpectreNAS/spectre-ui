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
})
