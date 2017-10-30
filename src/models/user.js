import { invariant, missingArgument } from "@/utilities"

export default class User {
  constructor(data) {
    invariant(data, missingArgument({ data }))
    this.id = data?.id
    this.userId = data?.id
    this.username = (data?.username)?._content
    this.fullname = (data?.realname)?._content
    this.bio = (data?.description)?._content
    this.location = (data?.location)?._content
    this.profile = (data?.profileurl)?._content
    this.isPro = !!data?.ispro
    this.photoCount = parseInt(data?.photos?.count?._content || 0, 10)
    this.views = parseInt(data?.photos?.views?._content || 0, 10)
    this.icon = (!!data?.iconfarm && !!data?.iconserver && !!data?.id)
      ? `http://farm${data?.iconfarm}.staticflickr.com/${data?.iconserver}/buddyicons/${data?.id}.jpg`
      : `https://www.flickr.com/images/buddyicon.gif`
    this.alias = data?.path_alias
  }
}
