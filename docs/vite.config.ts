import { defineConfig } from 'vite'
import Solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [Solid(), UnoCSS(),],
})
