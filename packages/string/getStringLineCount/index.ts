/**
 * Counts the number of lines in a given string.
 * A line is defined as a segment of text separated by \n or \r\n.
 *
 * @param {string | null | undefined} str - The input string.
 * @returns {number} The total number of lines in the string. Returns 0 for null, undefined, or empty strings.
 */
export function getStringLineCount(str?: string | null) {
  if (!str)
    return 0
  const count = str.match(/\r?\n/g)?.length ?? 0
  return count + 1
}
