// @flow
import { invariant, missingArgument } from "@/utilities"

export default class Brand {
  id: ID
  brand: string
  name: string

  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.brand = data?.id
    this.name = data?.name
  }
}
