import type { RollupOptions } from 'rollup'

const configs: RollupOptions[] = [
  {
    input: 'index.ts',
    output: {
      file: 'bundle.js',
      format: 'cjs',
    },
  },
]

export function createRollupConfig() {
  console.log('hello world')
  return configs
}
