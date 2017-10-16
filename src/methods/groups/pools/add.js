import Flickr from "@/flickr"

export default function add({ flickr = Flickr, photoId = ``, groupId = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.pools.add`, { photoId, groupId }, {}, `write`)
}
