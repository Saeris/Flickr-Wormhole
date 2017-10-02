import Flickr from "@/flickr"

async function getContext({ flickr = Flickr, photoId = ``, groupId = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.pools.getContext`, { photoId, groupId })
}

export default getContext
