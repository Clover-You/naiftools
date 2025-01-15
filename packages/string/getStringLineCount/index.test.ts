import { describe, expect, it } from 'vitest'
import { getStringLineCount } from '.'

describe('typeofs', () => {
  it('should return 0 for null or undefined input', () => {
    expect(getStringLineCount(null)).toBe(0)
    expect(getStringLineCount(undefined)).toBe(0)
  })

  it('should return 0 for an empty string', () => {
    expect(getStringLineCount('')).toBe(0)
  })

  it('should correctly count single line breaks (\\n)', () => {
    expect(getStringLineCount('line1\nline2')).toBe(2)
    expect(getStringLineCount('line1\nline2\nline3')).toBe(3)
    expect(getStringLineCount('\n\n\n')).toBe(4)
  })

  it('should correctly count Windows-style line breaks (\\r\\n)', () => {
    expect(getStringLineCount('line1\r\nline2')).toBe(2)
    expect(getStringLineCount('line1\r\nline2\r\nline3')).toBe(3)
    expect(getStringLineCount('\r\n\r\n\r\n')).toBe(4)
  })

  it('should handle mixed line breaks (\\n and \\r\\n)', () => {
    expect(getStringLineCount('line1\nline2\r\nline3\nline4\r\n')).toBe(5)
  })
})
