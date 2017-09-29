import Flickr from "@/flickr"

async function getContext({ apiKey = Flickr.apiKey, photoId = ``, groupId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.pools.getContext`, { apiKey, photoId, groupId })
}

export default getContext
