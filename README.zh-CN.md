<p align="center"><a href="README.md">English</a> | 中文</p>

# NaifTools

A naive JavaScript utility library

## Installing

`@naiftools/all` 包含了所有工具包。它包将 `@naiftools/core` 作为 default 导出。

注意：推荐使用按需引入方式以获得最佳打包体积，`@naiftools/all` 适合全量使用场景

```shell
# npm
npm install @naiftools/all

# yarn
yarn add @naiftools/all

# pnpm
pnpm add @naiftools/all
```

```ts
import naiftools, { arrays, strings } from '@naiftools/all'

naiftools.isObject(2)
strings.isBlank('')
arrays.isEmpty([])
```

或者你根据文档决定你所需要的包

```shell
# npm
npm install @naiftools/string

# yarn
yarn add @naiftools/string

# pnpm
pnpm add @naiftools/string
```

```shell
# npm
npm install @naiftools/array

# yarn
yarn add @naiftools/array

# pnpm
pnpm add @naiftools/array

```

```shell
# npm
npm install @naiftools/core

# yarn
yarn add @naiftools/core

# pnpm
pnpm add @naiftools/core
```

## core

### isArray

检查给定的值是否为数组。

```ts
import naiftools from '@naiftools/core'

naiftools.isArray('') // return false
naiftools.isArray([]) // return true
```

### isObject

检查给定的值是否为对象。

```ts
import naiftools from '@naiftools/core'

naiftools.isObject(1) // return false
naiftools.isObject({}) // return true
naiftools.isObject([]) // return true
naiftools.isObject(null) // return false
```

### isString

检查给定的值是否为字符串。

```ts
import naiftools from '@naiftools/core'

naiftools.isString(1) // return false
naiftools.isString('') // return true
```

### typeofs

返回给定值的类型作为字符串。此函数单独处理特殊值如`null`和数组。

- 返回类型: `'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'null' | 'object' | 'array' | 'function'`

```ts
import naiftools from '@naiftools/core'

naiftools.typeofs(null) // return 'null'
naiftools.typeofs('str') // return 'string'
naiftools.typeofs([]) // return 'array'
naiftools.typeofs(1) // return 'number'
```

## array

### isEmpty

检查列表是否为空或未定义/为null。

```ts
import arrays from '@naiftools/array'
arrays.isEmpty([]) // return true
arrays.isEmpty(undefined) // return true
arrays.isEmpty(null) // return true
arrays.isEmpty([1]) // return false
```

### isNotEmpty

检查列表不为空或未定义/为null

```ts
import arrays from '@naiftools/array'
arrays.isNotEmpty([]) // return false
arrays.isNotEmpty(undefined) // return false
arrays.isNotEmpty(null) // return false
arrays.isNotEmpty([1]) // return true
```

## string

### numberToLetter

将正整数转换为电子表格程序（例如Excel）中使用的对应列标题。

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

将给定的字符串转换为kebab-case。

例如，'helloWorld'变为'hello-world'，'My String'变为'my-string'。

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

将给定的字符串转换为驼峰式。

例如，'hello-world' 变为 'helloWorld'，'My String' 变为 'myString'。

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

计算给定字符串中的行数。行被定义为由 \n 或 \r\n 分隔的文本段。

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

去除字符串两端的空白字符。如果输入为 null 或 undefined，则返回 null 或 undefined。

```ts
strings.trim(' a ') // return 'a'
strings.trim(undefined) // return undefined
```

### trimLeft

去除字符串左侧的空白字符。如果输入为 null 或 undefined，则返回 null 或 undefined。

```ts
import strings from '@naiftools/string'

strings.trimLeft(' a ') // return 'a '
strings.trimLeft(undefined) // return undefined
```

### trimRight

去除字符串右侧的空白字符。如果输入为 null 或 undefined，则返回 null 或 undefined。

```ts
import strings from '@naiftools/string'

strings.trimRight(' a ') // return ' a'
strings.trimRight(undefined) // return undefined
```

### isBlank/isNotBlank

检查一个字符串是否为空（即，null、未定义、为空或只包含空白字符）。

```ts
import strings from '@naiftools/string'

strings.isBlank(null) // return true
strings.isBlank(undefined) // return true
strings.isBlank('') // return true
strings.isBlank(' ') // return true
strings.isBlank('\t\n\f\r') // return true
```

## 贡献指南

欢迎通过 GitHub Issues 提交建议，或通过 Pull Request 贡献代码。请确保：

1. 添加完整的单元测试
2. 更新相关文档
3. 通过 ESLint 检查

## 许可证

MIT License © 2024 [Clover You](https://github.com/Clover-You)
