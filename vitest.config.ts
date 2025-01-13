import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@naiftools/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
})
