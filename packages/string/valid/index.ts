import { trim } from '../trim'

/**
 * Checks if a string is blank (i.e., null, undefined, or empty or only contains whitespace).
 *
 * @param {string | null | undefined} suspect - The string to check.
 * @returns {boolean} True if the string is blank, false otherwise.
 */
export function isBlank(suspect?: string | null) {
  if (!suspect)
    return true
  return trim(suspect).length === 0
}

/**
 * Checks if a string is not blank.
 *
 * @param {string | null | undefined} suspect - The string to check.
 * @returns {boolean} True if the string is not blank, false otherwise.
 */
export function isNotBlank(suspect?: string | null): suspect is string {
  return !isBlank(suspect)
}

/**
 * Checks if a string has any text (i.e., not null or undefined, and has a length greater than 0).
 *
 * @param {string | null | undefined} suspect - The string to check.
 * @returns {boolean} True if the string has text, false otherwise.
 */
export function hasText(suspect?: string | null): suspect is string {
  if (!suspect)
    return false
  return suspect.length > 0
}

/**
 * Checks if a string is empty (i.e., null, undefined, or an empty string).
 *
 * @param {string | null | undefined} suspect - The string to check.
 * @returns {boolean} True if the string is empty, false otherwise.
 */
export function isEmpty(suspect?: string | null): suspect is undefined {
  return !hasText(suspect)
}
