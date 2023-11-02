import { defineConfig } from 'rollup'
import solid from 'vite-plugin-solid'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'

export default defineConfig([
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  {
    plugins: [typescript(), solid()],
    input: './src/index.ts',
    output: {
      file: 'dist/index.mjs',
      format: 'es',
    },
    external: ['solid-js', 'solid-js/web']
  }
])