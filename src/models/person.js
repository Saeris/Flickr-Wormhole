import { invariant, missingArgument } from "@/utilities"

export default class Person {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.person = data?.nsid
    this.addedBy = data?.added_by
    this.icon = (!!data?.iconfarm && !!data?.iconserver && !!data?.nsid)
      ? `http://farm${data?.iconfarm}.staticflickr.com/${data?.iconserver}/buddyicons/${data?.nsid}.jpg`
      : `https://www.flickr.com/images/buddyicon.gif`
    this.x = data?.x
    this.y = data?.y
    this.width = data?.w
    this.height = data?.h
  }
}
