/**
 * Checks if a list is empty or undefined/null.
 *
 * @param {Array | null | undefined} list - The list to check.
 * Can be an array, null, or undefined.
 * @returns {boolean} Returns `true` if:
 * - The list is `undefined` or `null`
 * - The list is an array with length 0
 * Otherwise returns `false`.
 */
export function isEmpty(list: unknown[] | null | undefined) {
  if (!list)
    return true
  return list.length === 0
}

/**
 * Checks a list is not empty or undefined/null
 * @param  {Array | null | undefined} list - The list to check
 * @returns {boolean} Returns `false` if:
 * - The list is `undefined` or `null`
 * - The list is an array with length 0
 * Otherwise returns `true`.
 */
export function isNotEmpty<T>(list: T[] | null | undefined): list is T[] {
  return !isEmpty(list)
}
