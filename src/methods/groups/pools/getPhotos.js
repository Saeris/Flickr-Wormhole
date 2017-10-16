import Flickr from "@/flickr"

export default function getPhotos(
  { flickr = Flickr, groupId = `` } = {},
  { tags = ``, userId = ``, extras = ``, page = 1, perPage = 100 } = {}
) {
  return flickr.fetchResource(`flickr.groups.pools.getPhotos`, { groupId }, { tags, userId, extras, page, perPage })
}
