type NullableString = string | undefined

/**
 * Trims the whitespace from both ends of a string. Returns null or undefined if the input is null or undefined.
 *
 * @param str - The string to trim.
 * @returns A new string with whitespace removed from both ends, or the original null/undefined value.
 */
export function trim<T extends NullableString>(str: T) {
  return str?.trim() as T
}

/**
 * Trims the whitespace from the left side of a string. Returns null or undefined if the input is null or undefined.
 *
 * @param str - The string to trim.
 * @returns A new string with whitespace removed from the left side, or the original null/undefined value.
 */
export function trimLeft<T extends NullableString>(str: T) {
  return str?.trimStart() as T
}

/**
 * Trims the whitespace from the right side of a string. Returns null or undefined if the input is null or undefined.
 *
 * @param str - The string to trim.
 * @returns A new string with whitespace removed from the right side, or the original null/undefined value.
 */
export function trimRight<T extends NullableString>(str: T) {
  return str?.trimEnd() as T
}
