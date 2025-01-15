import type { RollupOptions } from 'rollup'

const configs: RollupOptions[] = []

export function createRollupConfig() {
  const functionNames = ['index']

  for (const fn of functionNames) {
    const input = fn === 'index'
      ? `index.ts`
      : `${fn}/index.ts`

    configs.push({
      input,
    })
  }

  return configs
}
