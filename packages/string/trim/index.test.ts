import { describe, expect, it } from 'vitest'
import { trim, trimLeft, trimRight } from '.'

describe('trim', () => {
  it('remove spaces on both sides', () => {
    expect(trim(' a ')).toBe('a')
  })

  it('trim work with undefined', () => {
    expect(trim(undefined)).toBeUndefined()
  })

  it('remove space on left sides', () => {
    expect(trimLeft(' a ')).toBe('a ')
  })

  it('trimLeft work with undefined', () => {
    expect(trimLeft(undefined)).toBeUndefined()
  })

  it('remove space on right sides', () => {
    expect(trimRight(' a ')).toBe(' a')
  })

  it('trimRight work with undefined', () => {
    expect(trimRight(undefined)).toBeUndefined()
  })
})
