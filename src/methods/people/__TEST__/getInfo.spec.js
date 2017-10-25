import test from "ava"
import { getInfo } from "../"

test(`getInfo - Success`, async t => {
  const userId = `146688070@N05`
  t.true(await getInfo({ userId }), `Successfuly fetched results for user: ${userId}`)
})

test(`getInfo - Fail`, async t => {
  await t.throws(getInfo(), Error, `getInfo throws an Error`)
})
