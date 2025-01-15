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
