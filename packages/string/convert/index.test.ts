import { describe, expect, it } from 'vitest'
import { numberToLetter, toCamelCase, toKebabCase } from '.'

describe('convert', () => {
  it('should convert numbers to correct column titles', () => {
    expect(numberToLetter(1)).toBe('A')
    expect(numberToLetter(26)).toBe('Z')
    expect(numberToLetter(27)).toBe('AA')
    expect(numberToLetter(52)).toBe('AZ')
    expect(numberToLetter(701)).toBe('ZY')
    expect(numberToLetter(702)).toBe('ZZ')
    expect(numberToLetter(703)).toBe('AAA')
  })

  describe('toKebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world')
      expect(toKebabCase('myVariableName')).toBe('my-variable-name')
    })

    it('should handle spaces correctly', () => {
      expect(toKebabCase('My String Here')).toBe('my-string-here')
      expect(toKebabCase('hello    world')).toBe('hello-world')
      expect(toKebabCase('leading space')).toBe('leading-space')
      expect(toKebabCase('trailing space   ')).toBe('trailing-space')
    })

    it('should handle locales', () => {
      expect(toKebabCase('hello İstanbul', 'tr-TR')).toBe('hello-istanbul')
    })

    it('should convert single word correctly', () => {
      expect(toKebabCase('SingleWord')).toBe('single-word')
    })

    it('should return an empty string for empty input', () => {
      expect(toKebabCase('')).toBe('')
      expect(toKebabCase(null as unknown as string)).toBe('')
      expect(toKebabCase(undefined as unknown as string)).toBe('')
    })
  })

  describe('toCamelCase', () => {
    it('should convert strings with spaces to camelCase', () => {
      expect(toCamelCase('my string example')).toBe('myStringExample')
      expect(toCamelCase('hello world')).toBe('helloWorld')
    })

    it('should convert strings with hyphens to camelCase', () => {
      expect(toCamelCase('my-string-example')).toBe('myStringExample')
      expect(toCamelCase('hello-world')).toBe('helloWorld')
    })

    it('should handle single words correctly', () => {
      expect(toCamelCase('singleword')).toBe('singleword')
    })

    it('should return an empty string for falsy values', () => {
      expect(toCamelCase('')).toBe('')
      expect(toCamelCase(null as unknown as string)).toBe('')
      expect(toCamelCase(null as unknown as string)).toBe('')
    })

    it('should handle mixed spaces and hyphens', () => {
      expect(toCamelCase('my-string example')).toBe('myStringExample')
      expect(toCamelCase('hello world-this is')).toBe('helloWorldThisIs')
    })

    it('should handle strings with extra spaces', () => {
      expect(toCamelCase('  hello world  ')).toBe('helloWorld')
      expect(toCamelCase('  leading space')).toBe('leadingSpace')
      expect(toCamelCase('trailing space   ')).toBe('trailingSpace')
    })

    it.skip('should handle locales', () => {
      expect(toCamelCase('hello straße', 'de-DE')).toBe('helloStrasse')
    })
  })
})
