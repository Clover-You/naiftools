import { describe, expect, it } from 'vitest'
import { isObject } from '.'

describe('isObject', () => {
  it('should return false when input number values', () => {
    expect(isObject(1)).toBeFalsy()
  })

  it('should return true when input object values', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject([])).toBeTruthy()
    expect(isObject(null)).toBeTruthy()
  })
})
