<p align="center">English | <a href="README.zh-CN.md">中文</a></p>

# NaifTools

A naive JavaScript utility library

## Installing

`@naiftools/all` contains all utility packages. It bundles `@naiftools/core` as the default export.

Note: It is recommended to use on-demand imports for optimal bundle size. `@naiftools/all` is suitable for scenarios requiring all functionalities.

```shell
pnpm add @naiftools/all
```

```ts
import naiftools, { arrays, strings } from '@naiftools/all'

naiftools.isObject(2)
strings.isBlank('')
arrays.isEmpty([])
```

Alternatively, install specific packages based on your needs:

```shell
pnpm add @naiftools/string
```

```shell
pnpm add @naiftools/array
```

```shell
pnpm add @naiftools/core
```

## core

### isArray

Checks if the given value is an array.

```ts
import naiftools from '@naiftools/core'

naiftools.isArray('') // return false
naiftools.isArray([]) // return true
```

### isObject

Checks if the given value is an object.

```ts
import naiftools from '@naiftools/core'

naiftools.isObject(1) // return false
naiftools.isObject({}) // return true
naiftools.isObject([]) // return true
naiftools.isObject(null) // return false
```

### isString

Checks if the given value is a string.

```ts
import naiftools from '@naiftools/core'

naiftools.isString(1) // return false
naiftools.isString('') // return true
```

### typeofs

Returns the type of the given value as a string.

This function handles special cases like `null` and arrays separately.

- Return Type: `'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'null' | 'object' | 'array' | 'function'`

```ts
import naiftools from '@naiftools/core'

naiftools.typeofs(null) // return 'null'
naiftools.typeofs('str') // return 'string'
naiftools.typeofs([]) // return 'array'
naiftools.typeofs(1) // return 'number'
```

## array

### isEmpty

Checks if a list is empty or undefined/null.

```ts
import arrays from '@naiftools/array'
arrays.isEmpty([]) // return true
arrays.isEmpty(undefined) // return true
arrays.isEmpty(null) // return true
arrays.isEmpty([1]) // return false
```

### isNotEmpty

Checks a list is not empty or undefined/null

```ts
import arrays from '@naiftools/array'
arrays.isNotEmpty([]) // return false
arrays.isNotEmpty(undefined) // return false
arrays.isNotEmpty(null) // return false
arrays.isNotEmpty([1]) // return true
```

## string

### numberToLetter

Converts a positive integer to its corresponding column title as used in spreadsheet programs (e.g., Excel).

```ts
import strings from '@naiftools/string'

strings.numberToLetter(1) // return 'A'
strings.numberToLetter(26) // return 'Z'
strings.numberToLetter(27) // return 'AA'
strings.numberToLetter(52) // return 'AZ'
strings.numberToLetter(701) // return 'ZY'
strings.numberToLetter(702) // return 'ZZ'
strings.numberToLetter(703) // return 'AAA'
```

### toKebabCase

Converts a given string to kebab-case. E.g., 'helloWorld' becomes 'hello-world' and 'My String' becomes 'my-string'.

```ts
import strings from '@naiftools/string'

strings.toKebabCase('helloWorld') // return 'hello-world'
strings.toKebabCase('myVariableName') // return 'my-variable-name'
strings.toKebabCase('SingleWord') // return 'single-word'
strings.toKebabCase('My String Here') // return 'my-string-here'
strings.toKebabCase('hello    world') // return 'hello-world'
strings.toKebabCase('leading space') // return 'leading-space'
strings.toKebabCase('trailing space   ') // return 'trailing-space'
strings.toKebabCase('hello İstanbul', 'tr-TR') // return 'hello-istanbul'
strings.toKebabCase('') // return ''
strings.toKebabCase(null as unknown as string) // return ''
strings.toKebabCase(undefined as unknown as string) // return ''
```

### toCamelCase

Converts a given string to camelCase. E.g., 'hello-world' becomes 'helloWorld' and 'My String' becomes 'myString'.

```ts
import strings from '@naiftools/string'

strings.toCamelCase('my string example') // return 'myStringExample'
strings.toCamelCase('hello world') // return 'helloWorld'
strings.toCamelCase('my-string-example') // return 'myStringExample'
strings.toCamelCase('hello-world') // return 'helloWorld'
strings.toCamelCase('singleword') // return 'singleword'
strings.toCamelCase('') // return ''
strings.toCamelCase(null as unknown as string) // return ''
strings.toCamelCase(null as unknown as string) // return ''
strings.toCamelCase('my-string example') // return 'myStringExample'
strings.toCamelCase('hello world-this is') // return 'helloWorldThisIs'
strings.toCamelCase('  hello world  ') // return 'helloWorld'
strings.toCamelCase('  leading space') // return 'leadingSpace'
strings.toCamelCase('trailing space   ') // return 'trailingSpace'
```

### getStringLineCount

Counts the number of lines in a given string. A line is defined as a segment of text separated by \n or \r\n.

```ts
import strings from '@naiftools/string'

strings.getStringLineCount(null) // return 0
strings.getStringLineCount(undefined) // return 0
strings.getStringLineCount('') // return 0)
strings.getStringLineCount('line1\nline2') // return 2
strings.getStringLineCount('line1\nline2\nline3') // return 3
strings.getStringLineCount('\n\n\n') // return 4
strings.getStringLineCount('line1\r\nline2') // return 2
strings.getStringLineCount('line1\r\nline2\r\nline3') // return 3
strings.getStringLineCount('\r\n\r\n\r\n') // return 4
strings.getStringLineCount('line1\nline2\r\nline3\nline4\r\n') // return 5
```

### trim

Trims the whitespace from both ends of a string. Returns null or undefined if the input is null or undefined.

```ts
strings.trim(' a ') // return 'a'
strings.trim(undefined) // return undefined
```

### trimLeft

Trims the whitespace from the left side of a string. Returns null or undefined if the input is null or undefined.

```ts
import strings from '@naiftools/string'

strings.trimLeft(' a ') // return 'a '
strings.trimLeft(undefined) // return undefined
```

### trimRight

Trims the whitespace from the right side of a string. Returns null or undefined if the input is null or undefined.

```ts
import strings from '@naiftools/string'

strings.trimRight(' a ') // return ' a'
strings.trimRight(undefined) // return undefined
```

### isBlank/isNotBlank

Checks if a string is blank (i.e., null, undefined, or empty or only contains whitespace).

```ts
import strings from '@naiftools/string'

strings.isBlank(null) // return true
strings.isBlank(undefined) // return true
strings.isBlank('') // return true
strings.isBlank(' ') // return true
strings.isBlank('\t\n\f\r') // return true
```

## Contribution

Contributions of any kind are welcome! If you have ideas or suggestions, feel free to open an issue or submit a pull request. Please ensure:

1. Add comprehensive unit tests
2. Update relevant documents
3. Through ESLint check

## License

MIT License © 2024 [Clover You](https://github.com/Clover-You)
