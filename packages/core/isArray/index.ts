export function isArray<T = unknown>(suspect: T[]): suspect is Array<T> {
  return Array.isArray(suspect)
}
