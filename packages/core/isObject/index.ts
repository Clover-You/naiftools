export function isObject(suspect: unknown): suspect is object {
  return typeof suspect === 'object'
}
