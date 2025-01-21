import { typeofs } from '../typeofs'

/**
 * Checks if the given value is a string.
 *
 * @param {unknown} suspect - The value to be checked.
 * @returns {boolean} - Returns true if the value is a string, otherwise false.
 */
export function isString(suspect: unknown): suspect is string {
  if (typeofs(suspect) === 'string')
    return true
  return false
}
