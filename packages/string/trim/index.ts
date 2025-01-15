type NullableString = string | undefined

export function trim<T extends NullableString>(str: T) {
  return str?.trim() as T
}

export function trimLeft<T extends NullableString>(str: T) {
  return str?.trimStart() as T
}

export function trimRight<T extends NullableString>(str: T) {
  return str?.trimEnd() as T
}
