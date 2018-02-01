import test from "ava"
import {
  invariant
  //missingArgument
} from '../validation'

test(`utilites/validation/invariant`, t => {
  t.true(invariant(true, ``), `invariant returns true when passed a truthy value and a message string`)
  t.throws(() => { invariant(false, ``) }, Error, `invariant throws an error if the condition is falsey`)
  t.throws(() => { invariant(true) }, Error, `invariant throws an error if 'message' argument is undefined`)
})
