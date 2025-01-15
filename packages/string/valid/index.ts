import { trim } from '../trim'

export function isBlank(suspect?: string | null) {
  if (!suspect)
    return true
  return trim(suspect).length === 0
}

export function isNotBlank(suspect?: string | null): suspect is string {
  return !isBlank(suspect)
}

export function hasText(suspect?: string | null): suspect is string {
  if (!suspect)
    return false
  return suspect.length > 0
}

export function isEmpty(suspect?: string | null): suspect is undefined {
  return !hasText(suspect)
}
