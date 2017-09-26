import Flickr from "@/flickr"

export default async function getContext({ apiKey = Flickr.apiKey, photoId = ``, groupId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.pools.getContext`, { apiKey, photoId, groupId })
}
