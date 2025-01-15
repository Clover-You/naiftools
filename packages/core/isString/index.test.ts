import { describe, expect, it } from 'vitest'
import { isString } from '../isString'

describe('isString', () => {
  it('should return false when input number values', () => {
    expect(isString(1)).toBeFalsy()
  })
})
