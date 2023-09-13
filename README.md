# mime-tools

> Browser Compatible MIME Toolkit

# Geting started

## Lookup MIME type

```js
import { lookup } from 'mime-tools'
const filePath = lookup('file.txt')
lookup.mime('file.txt') // text/plain
```

## Lookup extension

```js
import { lookup } from 'mime-tools'
const mimeType = 'text/plain'
lookup.extension(mimeType) // txt
```
