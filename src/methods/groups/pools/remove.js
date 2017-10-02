import Flickr from "@/flickr"

async function remove({ flickr = Flickr, photoId = ``, groupId = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.pools.remove`, { photoId, groupId }, {}, `write`)
}

export default remove
