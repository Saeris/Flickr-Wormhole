import Flickr from "@/flickr"

export default function remove({ flickr = Flickr, photoId = ``, groupId = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.pools.remove`, { photoId, groupId }, {}, `write`)
}
