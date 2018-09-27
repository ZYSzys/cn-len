#!/usr/bin/env node
'use strict'

const cnLen = require('.')

const args = process.argv.slice(2)

if (args.length === 0) {
  console.log(`
    Usage:
        cn-len <str> ...
`)
  process.exit()
}

console.log(cnLen(args))
