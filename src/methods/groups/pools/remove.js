import Flickr from "@/flickr"

export default async function remove({ apiKey = Flickr.apiKey, photoId = ``, groupId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.pools.remove`, { apiKey, photoId, groupId }, {}, `write`)
}
