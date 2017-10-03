import { invariant, missingArgument } from "@/utilities"

export default class License {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.name = data?.name
    this.url = data?.url
  }
}
