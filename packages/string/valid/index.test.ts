import { describe, expect, it } from 'vitest'
import { hasText, isBlank } from '.'

describe('valid string', () => {
  it('should return true when input null or undefined', () => {
    expect(isBlank(null)).toBeTruthy()
    expect(isBlank(undefined)).toBeTruthy()
  })

  it('should return true when input a blank string', () => {
    expect(isBlank('')).toBeTruthy()
    expect(isBlank(' ')).toBeTruthy()
  })

  it('should return true when only newline character', () => {
    expect(isBlank('\t\n\f\r')).toBeTruthy()
  })

  it('should return false when input an empty character', () => {
    expect(hasText('')).toBeFalsy()
  })

  it('hasText work with null and undefined', () => {
    expect(hasText(null)).toBeFalsy()
    expect(hasText(undefined)).toBeFalsy()
  })
})
