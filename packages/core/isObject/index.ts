/**
 * Checks if the given value is an object.
 *
 * @param {unknown} suspect - The value to be checked.
 * @returns {boolean} - Returns true if the value is an object, otherwise false.
 */
export function isObject(suspect: unknown): suspect is object {
  return typeof suspect === 'object'
}
