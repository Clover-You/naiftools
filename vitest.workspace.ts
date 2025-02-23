import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: 'vitest.config.ts',
    test: {
      name: 'unit',
      include: [
        'packages/**/*.{test,spec}.ts',
      ],
      server: {
        deps: {
          inline: [
            'msw',
          ],
        },
      },
    },
  },
])
