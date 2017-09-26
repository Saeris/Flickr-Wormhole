import Flickr from "@/flickr"

export default async function add({ apiKey = Flickr.apiKey, photoId = ``, groupId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.pools.add`, { apiKey, photoId, groupId }, {}, `write`)
}
