import test from "ava"
import { Brand, Queries } from "../brand"

test(`Brand Type`, t => {
  t.is(Brand.name, `Brand`, `Brand Type should be named 'Brand'`)
  t.truthy(Brand.description, `Brand Type should have a description`)

  const Fields = Brand.getFields()
  t.truthy(Fields.id, `Brand Type should have an id field.`)

  t.truthy(Fields.brand, `Brand Type shoudld have a brand field.`)
  t.deepEqual(Fields.brand.type, GqlID, `brand field should have a type of GraphQLID`)
  t.truthy(Fields.brand.description, `brand field shoudld have a description.`)
  t.is(Fields.brand.sortable, true, `brand field should be sortable`)

  t.truthy(Fields.name, `Brand Type shoudld have a name field.`)
  t.deepEqual(Fields.name.type, GqlString, `name field should have a type of GraphQLString`)
  t.truthy(Fields.name.description, `name field shoudld have a description.`)
  t.is(Fields.name.sortable, true, `name field should be sortable`)
})

test(`Brand Queries`, t => {
  t.truthy(Queries.brands, `Queries should have a brands query`)
  t.deepEqual(Queries.brands.type, new GqlList(Brand), `Brands query type should be a list of type Brand`)
})
