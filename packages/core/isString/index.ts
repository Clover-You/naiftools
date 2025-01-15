import { typeofs } from '../typeofs'

export function isString(suspect: unknown): suspect is string {
  if (typeofs(suspect) === 'string')
    return true
  return false
}
