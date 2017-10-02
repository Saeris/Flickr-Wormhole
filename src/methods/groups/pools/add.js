import Flickr from "@/flickr"

async function add({ flickr = Flickr, photoId = ``, groupId = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.pools.add`, { photoId, groupId }, {}, `write`)
}

export default add
