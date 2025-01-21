/**
 * Checks if the given value is an array.
 *
 * @template T - The type of the elements in the array.
 * @param {T[]} suspect - The value to be checked.
 * @returns {boolean} - Returns true if the value is an array, otherwise false.
 */
export function isArray<T = unknown>(suspect: T[]): suspect is Array<T> {
  return Array.isArray(suspect)
}
