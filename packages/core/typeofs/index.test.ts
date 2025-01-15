import { describe, expect, it } from 'vitest'
import { typeofs } from '.'

describe('typeofs', () => {
  it(`should return 'string' type when input a string param`, () => {
    expect(typeofs('')).toBe('string')
  })

  it(`should return 'number' type when input a number param`, () => {
    expect(typeofs(1)).toBe('number')
    expect(typeofs(Number(2))).toBe('number')
  })

  it(`should return 'bigint' type when input a bigint param`, () => {
    expect(typeofs(123n)).toBe('bigint')
    expect(typeofs(BigInt(1))).toBe('bigint')
  })

  it(`should return 'boolean' type when input a correct boolean param`, () => {
    expect(typeofs(true)).toBe('boolean')
    expect(typeofs(false)).toBe('boolean')
  })

  it(`should return 'boolean' type when input a Boolean param`, () => {
    expect(typeofs(Boolean(0))).toBe('boolean')
    expect(typeofs(Boolean(1))).toBe('boolean')
  })

  it(`should not return 'boolean' type when input 1 or 0`, () => {
    expect(typeofs(0)).not.toBe('boolean')
    expect(typeofs(1)).not.toBe('boolean')
  })

  it(`should return 'symbol' type when input a symbol param`, () => {
    expect(typeofs(Symbol('symbol'))).toBe('symbol')
  })

  it(`should not return 'symbol' type when input a similar string`, () => {
    expect(typeofs('Symbol(1)')).not.toBe('symbol')
  })

  it(`should return 'undefined' type when input an undefined`, () => {
    expect(typeofs(undefined)).toBe('undefined')
  })

  it(`should not return 'undefined' type when input an undefined-string`, () => {
    expect(typeofs(Symbol('undefined'))).not.toBe('undefined')
  })

  it(`should return 'null' type when input a null`, () => {
    expect(typeofs(null)).toBe('null')
  })

  it(`should not return 'null' type when input a null-string`, () => {
    expect(typeofs('null')).not.toBe('null')
  })

  it(`should return 'object' type when input a {}`, () => {
    expect(typeofs({})).toBe('object')
  })

  it(`should not return 'object' type when input a {} string`, () => {
    expect(typeofs('{}')).not.toBe('object')
  })

  it(`should not return 'object' type when input a Array`, () => {
    expect(typeofs([])).not.toBe('object')
  })

  it(`should return 'array' type when input a Array param`, () => {
    expect(typeofs([])).toBe('array')
    expect(typeofs([])).toBe('array')
  })

  it(`should not return 'array' type when input a [] string`, () => {
    expect(typeofs('[]')).not.toBe('array')
  })

  it(`should not return 'array' type, even with the length attribute`, () => {
    expect(typeofs({ length: 2 })).not.toBe('array')
  })

  it(`should return 'function' type when input a function`, () => {
    expect(typeofs(() => {})).toBe('function')
  })

  it(`should return 'function' type when input a Function`, () => {
    expect(typeofs(Function)).toBe('function')
  })

  it(`should not return 'function' type when input a function string`, () => {
    expect(typeofs('() => {}')).not.toBe('function')
  })
})
