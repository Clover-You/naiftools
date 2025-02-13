import { describe, expect, it } from 'vitest'
import { isEmpty, isNotEmpty } from '.'

describe('valid array', () => {
  it('should return true when array is empty', () => {
    expect(isEmpty([])).toBeTruthy()
    expect(isEmpty(undefined)).toBeTruthy()
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty([1])).toBeFalsy()
  })

  it('should return true when array is not empty', () => {
    expect(isNotEmpty([])).toBeFalsy()
    expect(isNotEmpty(undefined)).toBeFalsy()
    expect(isNotEmpty(null)).toBeFalsy()
    expect(isNotEmpty([1])).toBeTruthy()
  })
})
