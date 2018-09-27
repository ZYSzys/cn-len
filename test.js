import test from 'ava'
import len from '.'

test('single', t => {
  const l = len(['hello'])
  t.is(l, 5)
})

test('multi', t => {
  const l = len(['hello', 'world'])
  t.is(l, 10)
})

test('input is array', t => {
  const error = t.throws(() => {
    len(100)
  }, TypeError)

  t.is(error.message, 'Expected an array of strings')
})
