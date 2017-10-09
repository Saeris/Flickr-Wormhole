import { invariant, missingArgument } from "@/utilities"

export default class Brand {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.brand = data?.id
    this.name = data?.name
  }
}
