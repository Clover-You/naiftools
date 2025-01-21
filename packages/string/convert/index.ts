import { trim } from '../trim'

/**
 * Converts a positive integer to its corresponding column title
 * as used in spreadsheet programs (e.g., Excel).
 *
 * @param {number} num - The positive integer to convert (must be greater than 0).
 * @returns {string} The corresponding column title in uppercase letters (e.g., 1 -> 'A', 27 -> 'AA').
 */
export function numberToLetter(num: number) {
  let result = ''

  while (num > 0) {
    // Adjust for 0-based index in ASCII (A = 65)
    const charCode = ((num - 1) % 26) + 65
    result = String.fromCharCode(charCode) + result
    num = Math.floor((num - 1) / 26)
  }
  return result
}

/**
 * Converts a given string to kebab-case.
 * E.g., 'helloWorld' becomes 'hello-world' and 'My String' becomes 'my-string'.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The converted kebab-case string.
 */
export function toKebabCase(input: string, locales?: Intl.LocalesArgument) {
  if (!input)
    return ''

  const result = trim(input)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')

  return result.toLocaleLowerCase(locales)
}

/**
 * Converts a given string to camelCase.
 * E.g., 'hello-world' becomes 'helloWorld' and 'My String' becomes 'myString'.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The converted camelCase string. Returns an empty string for falsy values.
 */
export function toCamelCase(input: string, locales?: Intl.LocalesArgument) {
  if (!input)
    return ''

  const words = trim(input).split(/[\s-]+/)
  const camelCasedWords = words.map((word, index) => {
    if (index === 0)
      return word.toLocaleLowerCase(locales)
    return capitalizeFirstLetter(word, locales)
  })

  return camelCasedWords.join('')
}

function capitalizeFirstLetter(word: string, locales?: Intl.LocalesArgument): string {
  return word.charAt(0).toLocaleUpperCase(locales) + word.slice(1)
}
