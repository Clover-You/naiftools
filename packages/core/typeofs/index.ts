export type TypeOfResult = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'null' | 'object' | 'array' | 'function'

/**
 * Returns the type of the given value as a string.
 *
 * This function handles special cases like `null` and arrays separately.
 *
 * @param {unknown} ukn - The value to check.
 * @returns {TypeOfResult} The type of the value as a string.
 */
export function typeofs(ukn: unknown): TypeOfResult {
  if (ukn === null)
    return 'null'
  if (Array.isArray(ukn))
    return 'array'
  return typeof ukn
}
