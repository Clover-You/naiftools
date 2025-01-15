export type TypeOfResult = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'null' | 'object' | 'array' | 'function'

export function typeofs(ukn: unknown): TypeOfResult {
  if (ukn === null)
    return 'null'
  if (Array.isArray(ukn))
    return 'array'
  return typeof ukn
}
