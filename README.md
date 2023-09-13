# mime-tools

[![Build Status](https://travis-ci.org/FDVhuset-AS/mime-tools.svg?branch=main)](https://travis-ci.org/FDVhuset-AS/mime-tools)
[![Coverage Status](https://coveralls.io/repos/github/FDVhuset-AS/mime-tools/badge.svg?branch=main)](https://coveralls.io/github/FDVhuset-AS/mime-tools?branch=main)
[![npm version](https://badge.fury.io/js/mime-tools.svg)](https://badge.fury.io/js/mime-tools)

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
