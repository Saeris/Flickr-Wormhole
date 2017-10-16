import Flickr from "@/flickr"

export default function getContext({ flickr = Flickr, photoId = ``, groupId = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.pools.getContext`, { photoId, groupId })
}
