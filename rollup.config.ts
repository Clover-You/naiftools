import type { RollupOptions } from 'rollup'
import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const pluginDts = dts()

const iifeName = 'NaifTools'

/**
 * This function is adapted from the open-source project [VueUse]
 * Source: [https://github.com/vueuse/vueuse/blob/d0350356eea3065d968ef42f97badff577e539fd/rollup.config.ts#L22](VueUse)
 * License: MIT
 */
function esbuildMinifer(options: ESBuildOptions) {
  const { renderChunk } = esbuild(options)

  return {
    name: 'esbuild-minifer',
    renderChunk,
  }
}
export function createRollupConfig() {
  return [
    {
      input: 'index.ts',
      output: [
        {
          file: 'index.mjs',
          format: 'es',
        },
        {
          file: 'index.cjs',
          format: 'cjs',
        },
        {
          file: 'index.iife.js',
          format: 'iife',
          name: iifeName,
          extend: true,
          plugins: [],
        },
        {
          file: 'index.iife.min.js',
          format: 'iife',
          name: iifeName,
          extend: true,
          plugins: [
            esbuildMinifer({
              minify: true,
            }),
          ],
        },
      ],
      plugins: [
        esbuild({
          target: 'es2018',
        }),
      ],
    },
    {
      input: 'index.ts',
      output: [
        { file: `index.d.cts` },
        { file: `index.d.mts` },
        { file: `index.d.ts` },
      ],
      plugins: [pluginDts],
    },
  ] satisfies RollupOptions[]
}
