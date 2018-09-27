'use strict'

module.exports = (args) => {
  if (Array.isArray(args) === false) {
    throw new TypeError('Expected an array of strings')
  }

  const str = args.reduce((a, b) => (a + b))
  return str.length
}
