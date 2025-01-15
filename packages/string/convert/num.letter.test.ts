import { describe, expect, it } from 'vitest'
import { numberToLetter } from '.'

describe('typeofs', () => {
  it('should convert numbers to correct column titles', () => {
    expect(numberToLetter(1)).toBe('A')
    expect(numberToLetter(26)).toBe('Z')
    expect(numberToLetter(27)).toBe('AA')
    expect(numberToLetter(52)).toBe('AZ')
    expect(numberToLetter(701)).toBe('ZY')
    expect(numberToLetter(702)).toBe('ZZ')
    expect(numberToLetter(703)).toBe('AAA')
  })
})
